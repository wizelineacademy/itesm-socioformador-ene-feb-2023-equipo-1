import styled from "styled-components";

export const MainContainer = styled.div`
	margin-top: 1px;
	height: 100vh;
	position: absolute;
	inset-y: 0;
	display: flex;
	overflow-y: scroll;
`;

export const DepContainer = styled.div`
	position: relative;
	display: inline-block;
	padding-left: 25px;
	padding-right: 15px;
`;

export const TitleDep = styled.div`
	color: #17202a; /* Indigo-800 */
	font-weight: bold;
	font-size: large;
	margin-left: 8px;
	margin-right: 8px;
	margin-top: 18%;
`;

export const ListDep = styled.ul`
	list-style-type: none;
	padding: 0;
	padding-left: 15px;
	margin-top: 20%;
`;

export const DepSelect = styled.li`
	@import url("https://fonts.googleapis.com/css?family=Inter");
	text-align: left;
	margin-top: 25%;
	/* background-color: #1f2937;  Gray-900 */
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;

	&:hover {
		background-color: #213246; /* Gray-700 */
		color: white;
		border-radius: 0.375rem; /* Rounded-md */
		padding-left: 0.75rem; /* Px-3 */
		padding-right: 0.75rem; /* Px-3 */
		padding-top: 0.5rem; /* Py-2 */
		padding-bottom: 0.5rem; /* Py-2 */
	}
`;
