import styled from 'styled-components';

export const FAQContainer = styled.div`
    margin: 30px 40px 0;
    width: 260px;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    flex-direction: column;
`;

export const FAQHeader = styled.div`
    background-color: #f5f5f5;
    font-size: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    font-weight: bold;
    padding: 10px 0;
`;

export const FAQList = styled.div`
  padding: 10px 25px 10px 25px;
  border: 1px solid #f5f5f5;

  &:last-child {
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

export const Question = styled.a`
  font-size: 15px;
  color: #555555;
  text-decoration: none;
  transition: color 0.2s;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  &:hover {
    color: #213246;
  }
`;
