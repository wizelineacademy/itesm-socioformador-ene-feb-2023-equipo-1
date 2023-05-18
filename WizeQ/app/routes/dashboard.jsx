import React from "react";
import { json } from "@remix-run/node";
import * as Styled from "app/styles/Dashboard.Styled.jsx";
import { requireAuth } from "app/session.server";
import AdminSideBar from "app/components/AdminSideBar";
import { Table } from "react-bootstrap";

/*
import ListQuestions from "app/components/ListQuestions";
import lisStyled.Textepartments from "app/controllers/departments/list";
import listQuestions from "app/controllers/questions/list";
import ACTIONS from "app/utils/actions";

import Ejemplo from "app/components/Ejemplo";

export const loader = async ({ request }) => {
	await requireAuth(request);
	const user = await getAuthenticatedUser(request);

	const url = new URL(request.url);

	const order = url.searchParams.get("order");
	const status = url.searchParams.get("status");
	const department = Number.parseInt(url.searchParams.get("department"), 10);
	const dateRange = dateRangeConversion(url.searchParams.get("dateRange"));

	const questions = await listQuestions({
		user,
		orderBy: order,
		status,
		department: Number.isNaN(department) ? undefined : department,
		dateRange,
	});

	const departments = await lisStyled.Textepartments();

	return json({
		questions,
		departments,
	});
};

export const action = async ({ request }) => {
	const formData = await request.formData();
	const formAction = formData.get('action');
	let response;
	let questionId;
	switch (formAction) {
	  case ACTIONS.PINNIN:
		questionId = parseInt(formData.get('questionId'), 10);
		const value = formData.get('value') !== 'false';
		response = await modifyPinStatus(questionId, value);
		break;
	  case ACTIONS.VOTE_QUESTION:
		const voteQuestionId = parseInt(formData.get('questionId'), 10);
		const voteQuestionUser = JSON.parse(formData.get('user'));
		const isUpVote = formData.get('isUpVote') === 'true';
		response = await voteQuestion(voteQuestionId, voteQuestionUser, isUpVote);
		break;
	  case ACTIONS.ENABLED_ACTION:
		questionId = parseInt(formData.get('questionId'), 10);
		const enabledValue = formData.get('enabledValue') !== 'false';
		response = await modifyEnabledValue(questionId, enabledValue);
		break;
	  default:
		break;
	}
  
	return json(response);
  };

  */

function Dashboard() {
	return (
		<>
			<AdminSideBar />

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
									<tr>
										<Styled.Text>What is Wizeline?</Styled.Text>
										<Styled.Text>General</Styled.Text>
										<Styled.Text>March, 6</Styled.Text>
										<Styled.TextU>Unanswered</Styled.TextU>
									</tr>
									<tr>
										<Styled.Text>What are the available projects?</Styled.Text>
										<Styled.Text>Projects</Styled.Text>
										<Styled.Text>March, 8</Styled.Text>
										<Styled.TextA>Answered</Styled.TextA>
									</tr>
									<tr>
										<Styled.Text>
											Where are the Wizeline offices located?
										</Styled.Text>
										<Styled.Text>Logistics and Operations</Styled.Text>
										<Styled.Text>March, 5</Styled.Text>
										<Styled.TextA>Answered</Styled.TextA>
									</tr>
									<tr>
										<Styled.Text>
											Are there any job openings at the moment?
										</Styled.Text>
										<Styled.Text>Planning</Styled.Text>
										<Styled.Text>March, 4</Styled.Text>
										<Styled.TextA>Answered</Styled.TextA>
									</tr>
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
