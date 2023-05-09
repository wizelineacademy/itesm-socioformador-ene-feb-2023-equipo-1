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
	display: flex;
	align-items: center;
	justify-content: center;
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
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
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
