import { useState, useEffect, useRef } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import styled from 'styled-components';
import { requireAuth } from 'app/session.server';
import listQuestions from 'app/controllers/questions/list';
// import userImg from 'build/_assets/placeholder_user_img-ZWAQNLBE.png'
// import botImg from 'build/_assets/logo_answerbot.png'

export const loader = async ({ request }) => {
  await requireAuth(request);

  const questionsFAQ = await listQuestions({
    orderBy: "popular",
    dateRange: "this_month",
    limit: 10,
  });

  return json({
    questionsFAQ,
  });
};

const FaqContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #f7f7f7;
  border-left: 1px solid #ccc;
`;

const FaqList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const FaqItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`;

const FaqLink = styled.a`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;

function Chatbot() {

  const { questionsFAQ } = useLoaderData();

  useEffect(() => {
    console.log(questionsFAQ)
  }, [questionsFAQ]);

  return (
    <FaqContainer>
      <FaqList>
        {questionsFAQ.map((faq, index) => (
          <FaqItem key={index}>
            <FaqLink href={`http://localhost:3000/questions/${faq.question_id}`}>{faq.question}</FaqLink>
          </FaqItem>
        ))}
      </FaqList>
    </FaqContainer>
  );
};

export default Chatbot;
