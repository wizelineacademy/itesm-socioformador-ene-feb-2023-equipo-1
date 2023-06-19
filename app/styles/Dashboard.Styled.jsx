import styled from 'styled-components';

export const MainContainer = styled.div`
height: 115vh;
background-color: #f7fafc; /* Slate-100 */
margin: 0;
margin-left: 18%;
@media (min-width: 1536px) {
margin-left: 40px; /* 2xl:ml-40 */
}

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
overflow-y: scroll;
align-items: center;
justify-content: center;
margin-top: 20px;
width: 11/12;
height: 380px;
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
overflow-y: scroll;
align-items: center;
justify-content: center;
background-color: white;
margin-top: 15px;
border: 1px solid #d1d5db; /* ring-gray-200 */
box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.05);
&:focus {
outline: none;
box-shadow: 0px 0px 0px 3px rgba(59, 130, 246, 0.5);
}
border-radius: 0.375rem; /* rounded-md */
margin-left: 2px; /* ml-2 */
margin-right: 1px; /* mr-1 */
height: 300px;
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

export const ButtonText = styled.a`
 background-color: #304966;
 border: 1px solid #304966;
 color: white;
 padding: 5px;
 text-align: center;
 text-decoration: none;
 letter-spacing: 0.5px;
 display: inline-block;
 height: 30px;
 width: 100px;
 border-radius: 20px;
 font-weight: 400;

 &:hover {
  background-color: #fff;
  color: #304966;
  text-decoration: none;
 }
`;

export const Title = styled.h2`
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 margin-bottom: 15px;
 background-color: white;

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
 position: sticky;
 top: 0;
 background-color: white;
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

export const TextUBorder = styled.span`
  display: inline-block;
  background-color: #FFE6DE;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const TextA = styled.td`
 color: #83bb2b;
 font-weight: 400;
 letter-spacing: 1px;

`;

export const TextABorder = styled.span`
  display: inline-block;
  background-color: #F0F4E6;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const TextB = styled.td`
 color: #DE9A34;
 font-weight: 400;
 letter-spacing: 1px;
`;

export const TextBBorder = styled.span`
  display: inline-block;
  background-color: #FFEFD6;
  border-radius: 5px;
  padding-bottom: 2.5px;
  padding-top: 2.5px;
  padding-right: 10px;
  padding-left: 10px;
`;
