import React, { useEffect, useState } from "react";
import { json } from "@remix-run/node";
import * as Styled from "app/styles/Dashboard.Styled.jsx";
import { requireAuth } from "app/session.server";
import AdminSideBar from "app/components/AdminSideBar";
import { Table } from "react-bootstrap";
import { useLoaderData } from '@remix-run/react';
import listQuestions from "app/controllers/questions/list";
import listDepartments from 'app/controllers/departments/list';

export const loader = async ({ request }) => {
    await requireAuth(request);

    const url = new URL(request.url);

    const department = Number.parseInt(url.searchParams.get('department'), 10);
  
    const questionsFAQ = await listQuestions({
        department: Number.isNaN(department) ? undefined : department,
        limit: 5,
    });

    const questionsOF = await listQuestions({
        department: Number.isNaN(department) ? undefined : department,
        limit: 5,
    });

    const departments = await listDepartments();
    departments.unshift({ department_id: 0, name: 'Not Assigned'});
    departments.unshift({ department_id: undefined, name: 'All'});
  
    return json({
      questionsFAQ,
      questionsOF,
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
    
    const { questionsFAQ, departments } = useLoaderData();

    const [selectedDepartment, setSelectedDepartment] = useState(departments[0].department_id);
  
    const handleSelectDepartment = department => {
      setSelectedDepartment(department);
      const queryParams = new URLSearchParams({ department });
      window.location.search = queryParams.toString();
    }

    useEffect(() => {
        console.log('questions: ', questionsFAQ);
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
										<tr>
											<Styled.Text>What is Wizeline?</Styled.Text>
										</tr>
										<tr>
											<Styled.Text>
												What are the available projects?
											</Styled.Text>
										</tr>
										<tr>
											<Styled.Text>
												Where are the Wizeline offices located?
											</Styled.Text>
										</tr>
										<tr>
											<Styled.Text>
												Are there any job openings at the moment?
											</Styled.Text>
										</tr>
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
										<tr>
											<Styled.Text>What is Wizeline?</Styled.Text>
											<Styled.Text>Wizeline is a ....</Styled.Text>
											<Styled.TextA>Good</Styled.TextA>
										</tr>
										<tr>
											<Styled.Text>
												What are the available projects?
											</Styled.Text>
											<Styled.Text>There are ....</Styled.Text>
											<Styled.TextU>Bad</Styled.TextU>
										</tr>
										<tr>
											<Styled.Text>
												Where are the Wizeline offices located?
											</Styled.Text>
											<Styled.Text>They are located in ...</Styled.Text>
											<Styled.TextA>Good</Styled.TextA>
										</tr>
										<tr>
											<Styled.Text>
												Are there any job openings at the moment?
											</Styled.Text>
											<Styled.Text>There aren't any openings at...</Styled.Text>
											<Styled.TextA>Good</Styled.TextA>
										</tr>
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
										<Styled.Text key={`question-${index}`}> {question.question} </Styled.Text>
										<Styled.Text key={`department-${index}`}> {question.assigned_department !== null ? departments.find(depa => depa.department_id === question.assigned_department)?.name : 'Not Assigned'} </Styled.Text>
										<Styled.Text key={`date-${index}`}> {formatDate(question.createdAt)} </Styled.Text>
                                        {question.Answers.length > 0 ?
                                            <Styled.TextA key={`status-${index}`}> Answered </Styled.TextA>
                                            :
                                            <Styled.TextU key={`status-${index}`}> Unanswered </Styled.TextU>
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