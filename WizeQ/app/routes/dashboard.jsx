import React from "react";
import { json } from "@remix-run/node";
import * as Styled from "app/styles/Dashboard.Styled.jsx";
import { requireAuth } from "app/session.server";
import SideBar from "app/components/AdminSideBar";

export const loader = async ({ request }) => {
	await requireAuth(request);
	return json({});
};

function Dashboard() {
	return (
		<>
			<SideBar />

			<Styled.MainContainer>
				<Styled.NextContainer>
					<Styled.DividerContainer>
						<Styled.TopContainers>container 1</Styled.TopContainers>

						<Styled.TopContainers>container 2</Styled.TopContainers>
					</Styled.DividerContainer>

					<Styled.BottomContainer>container 3</Styled.BottomContainer>
				</Styled.NextContainer>
			</Styled.MainContainer>
		</>
	);
}

export default Dashboard;
