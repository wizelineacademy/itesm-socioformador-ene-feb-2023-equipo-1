import styled from 'styled-components';

export const MainContainer = styled.div`
 background-color: red;
 margin-top: 1px;
 height: 115vh;
 width: 265px;
 position: absolute;
 inset-y: 0;
 display: flex;
 overflow-y: scroll;
 padding-right: 5px;
 background-color: white;


`;

export const DepContainer = styled.div`
 position: relative;
 display: inline-block;
 padding-left: 25px;
 padding-right: 15px;
 margin-right: 10px;

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
 padding-left: 10px;
 margin-top: 20%;
`;

export const DepSelect = styled.li`
 text-align: left;
 margin-top: 10px;
 margin-bottom: 10px;
 padding-top: 10px;
 padding-bottom: 10px;
 padding-left: 5px;
 color: #17202a;
 font-weight: 600;
 letter-spacing: 1px;
 word-break: break-all;

 &.selected,
 &:hover {
  background-color: #213246; /* Gray-700 */
  color: white;
  border-radius: 0.375rem; /* Rounded-md */
  cursor: pointer;
 }
`;
