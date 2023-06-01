import styled from 'styled-components';

export const Button = styled.button`
background-color: #304966;
border: none;
color: white;
padding: 0;
text-align: center;
text-decoration: none;
display: inline-block;
height: 30px;
width: 100px;
border-radius: 20px 20px 20px 20px;
font-weight: 400;

&:hover {
background-color: #213246;
}
`;

export const ButtonText = styled.p`
color: white;
margin-top: 5px;
letter-spacing: 0.5px;
font-weight: 400;
`;
