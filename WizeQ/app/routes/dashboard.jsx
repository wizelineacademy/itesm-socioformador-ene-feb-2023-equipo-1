import React, { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import * as Styled from "app/styles/Dashboard.Styled.jsx";
import { requireAuth, getAuthenticatedUser } from "app/session.server";
import AdminSideBar from "app/components/AdminSideBar";
import { Table } from "react-bootstrap";
import { useLoaderData } from '@remix-run/react';
import listQuestions from "app/controllers/questions/list";
import listDepartments from 'app/controllers/departments/list';
import listAnswerBot from "app/controllers/answerBot/list";

export const loader = async ({ request }) => {
    await requireAuth(request);
	const user = await getAuthenticatedUser(request);

    const url = new URL(request.url);

    const department = Number.parseInt(url.searchParams.get('department'), 10);
  
    const questionsFAQ = await listQuestions({
        department: Number.isNaN(department) ? undefined : department,
        limit: 4,
    });

    const questionsOF = await listQuestions({
        department: Number.isNaN(department) ? undefined : department,
		status: 'not_answered',
        limit: 4,
    });

	const questionsBot = await listAnswerBot({
        department: Number.isNaN(department) ? undefined : department,
		limit: 4,
    });

    const departments = await listDepartments();
    departments.unshift({ department_id: 0, name: 'Not Assigned'});
    departments.unshift({ department_id: undefined, name: 'All'});
  
    return json({
      questionsFAQ,
      questionsOF,
	  questionsBot,
      departments,
    });
};

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
  
    return `${month} ${day}`;
};

function Dashboard() {
    
    const { questionsFAQ, questionsOF, questionsBot, departments } = useLoaderData();

    const [selectedDepartment, setSelectedDepartment] = useState(departments[0].department_id);
  
    const handleSelectDepartment = department => {
      setSelectedDepartment(department);
      const queryParams = new URLSearchParams({ department });
      window.location.search = queryParams.toString();
    }

    useEffect(() => {
        console.log('qFAQ: ', questionsFAQ);
        console.log('qOF: ', questionsOF);
        console.log('qABF: ', questionsBot);
        console.log('departments: ', departments);
        console.log('selected department: ', selectedDepartment);
    }, []);

	return (
		<>
			<AdminSideBar 
                departments={departments}
                selectedDepartment={selectedDepartment} 
                handleSelectDepartment={handleSelectDepartment}
            />

			<Styled.MainContainer>
				<Styled.NextContainer>
					<Styled.DividerContainer>
						<Styled.TopContainers>
							<Styled.ContMargin>
								<Styled.Title>Open Forums</Styled.Title>
								<Table hover>
									<tbody>
									{questionsOF.map((question,index) => (
										<tr>
											<Styled.Text 
												key={`questionOP-${index}`}
												title={question.question}>
												{question.question.length > 100 ? `${question.question.substring(0, 100)}...` : question.question}
											</Styled.Text>
										</tr>
									))}
									</tbody>
								</Table>
							</Styled.ContMargin>
						</Styled.TopContainers>

						<Styled.TopContainers>
							<Styled.ContMargin>
								<Styled.Title>Answerbot Feedback</Styled.Title>

								<Table stripped hover>
									<thead>
										<tr>
											<Styled.TextBold width="250">Question</Styled.TextBold>
											<Styled.TextBold width="250">Answer</Styled.TextBold>
											<Styled.TextBold width="170">Feedback</Styled.TextBold>
										</tr>
									</thead>
									<tbody>
										{questionsBot.map((question,index) => (
											<tr>
												<Styled.Text 
													key={`questionAB-${index}`} 
													title={question.question_by_user}> 
													{question.question_by_user.length > 50 ? `${question.question_by_user.substring(0, 50)}...` : question.question_by_user}
												</Styled.Text>
												<Styled.Text 
													key={`answerAB-${index}`} 
													title={question.answer_by_bot}> 
													{question.answer_by_bot.length > 50 ? `${question.answer_by_bot.substring(0, 50)}...` : question.answer_by_bot}
												</Styled.Text>
												{question.answer_status === -1 && <Styled.TextU key={`statusAB-${index}`}> Bad </Styled.TextU>}
												{question.answer_status === 0 && <Styled.Text key={`statusAB-${index}`}> N/A </Styled.Text>}
												{question.answer_status === 1 && <Styled.TextA key={`statusAB-${index}`}> Good </Styled.TextA>}
											</tr>
										))}
									</tbody>
								</Table>
							</Styled.ContMargin>
						</Styled.TopContainers>
					</Styled.DividerContainer>

					<Styled.BottomContainer>
						<Styled.ContMargin>
							<Styled.Title>FAQs</Styled.Title>
							<Table stripped hover>
								<thead>
									<tr>
										<Styled.TextBold width="330">Question</Styled.TextBold>
										<Styled.TextBold width="170">Department</Styled.TextBold>
										<Styled.TextBold width="170">Date</Styled.TextBold>
										<Styled.TextBold width="170">Status</Styled.TextBold>
									</tr>
								</thead>
								<tbody>
                                {questionsFAQ.map((question,index) => (
									<tr>
										<Styled.Text 
											key={`questionFAQ-${index}`} 
											title={question.question}> 
											{question.question.length > 50 ? `${question.question.substring(0, 50)}...` : question.question}
										</Styled.Text>
										<Styled.Text key={`department-${index}`}> {question.assigned_department !== null ? departments.find(depa => depa.department_id === question.assigned_department)?.name : 'Not Assigned'} </Styled.Text>
										<Styled.Text key={`date-${index}`}> {formatDate(question.createdAt)} </Styled.Text>
                                        {question.Answers.length > 0 ?
                                            <Styled.TextA key={`statusFAQ-${index}`}> Answered </Styled.TextA>
                                            :
                                            <Styled.TextU key={`statusFAQ-${index}`}> Unanswered </Styled.TextU>
                                        }
									</tr>
                                ))}
								</tbody>
							</Table>
						</Styled.ContMargin>
					</Styled.BottomContainer>
				</Styled.NextContainer>
			</Styled.MainContainer>
		</>
	);
}

export default Dashboard;