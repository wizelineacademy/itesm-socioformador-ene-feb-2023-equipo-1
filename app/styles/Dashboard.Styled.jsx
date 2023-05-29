import styled from "styled-components";

export const MainContainer = styled.div`
	background-color: #f7fafc; /* Slate-100 */
	margin-left: 15%;

	@media (min-width: 1536px) {
		margin-left: 40px; /* 2xl:ml-40 */
	}

	height: 100vh;
	padding-top: 8px; /* Pt-8 */
	align-content: stretch; /* Content-stretch */
`;

export const NextContainer = styled.div`
	margin-left: 1%;

	height: 100vh;
	padding-top: 8px;
	display: grid;

	grid-template-columns: repeat(1, minmax(0, 1fr));
	gap: 3.5rem;
	padding-left: 2.5rem;
	padding-right: 2.5rem;

	margin-right: 1px;
`;

export const DividerContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	grid-template-rows: minmax(0, 1fr);
	column-gap: 3%;
	margin-left: 2px;
`;

export const TopContainers = styled.div`
	display: inline-block;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	width: 11/12;
	height: 100%;
	border-radius: 0.5rem;
	background-color: white;
	border: 1px solid #d1d5db;
	box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
	&:focus {
		outline: none;
		box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
	}
`;

export const BottomContainer = styled.div`
	display: inline-block;
	align-items: center;
	justify-content: center;
	background-color: white;
	margin-top: 20px;
	border: 1px solid #d1d5db; /* ring-gray-200 */
	box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
	&:focus {
		outline: none;
		box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
	}
	border-radius: 0.375rem; /* rounded-md */
	margin-left: 2px; /* ml-2 */
	margin-right: 1px; /* mr-1 */
	height: 90%;
`;

export const ContMargin = styled.div`
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 10px;
`;

export const UList = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const Title = styled.h2`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	margin-bottom: 15px;
`;

export const Text = styled.td`
	color: #17202a;
	font-weight: 400;
	letter-spacing: 1px;
`;

export const TextBold = styled.th`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: medium;
`;

export const TextBoldList = styled.li`
	color: #17202a;
	font-weight: 600;
	letter-spacing: 1px;
	font-size: large;
	margin-top: 30px;
`;

export const TextU = styled.td`
	color: #c64927;
	font-weight: 400;
	letter-spacing: 1px;
`;

export const TextA = styled.td`
	color: #83bb2b;
	font-weight: 400;
	letter-spacing: 1px;
`;

export const TextB = styled.td`
	color: #4766b6;
	font-weight: 400;
	letter-spacing: 1px;
`;