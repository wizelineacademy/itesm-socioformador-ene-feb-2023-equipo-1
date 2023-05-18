import { useState, useEffect, useRef } from 'react';
import { useLoaderData } from '@remix-run/react';
import { json, redirect } from '@remix-run/node';
import styled from 'styled-components';
import { requireAuth } from 'app/session.server';
import listQuestions from 'app/controllers/questions/list';
import listDepartments from 'app/controllers/departments/list';

export const loader = async ({ request }) => {
    await requireAuth(request);

    const url = new URL(request.url);

    // const department = Number.parseInt(url.searchParams.get('department'), 10);
    // const department = undefined;
  
    const questionsFAQ = await listQuestions({
      department: 17,
      limit: 10,
    });

    const departments = await listDepartments();
  
    return json({
      questionsFAQ,
      departments,
    });
};

const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = months[date.getMonth()];
    const day = date.getDate();
  
    return `${month} ${day}`;
};

// Componente Sidebar
const Sidebar = ({ departments, selectedDepartment, handleSelectDepartment }) => {
    return (
        <Styled.Sidebar>
        {departments.map(department => (
            <Styled.Department key={department.name} onClick={() => handleSelectDepartment(department.department_id)} selected={department.department_id === selectedDepartment}>
            {department.name}
            </Styled.Department>
        ))}
        </Styled.Sidebar>
    );
}

// Componente QuestionPanel
const QuestionPanel = ({ questions }) => {
    return (
      <Styled.QuestionPanel>
        <Styled.QuestionColumn>
          <Styled.QuestionTitle>Unanswered Questions</Styled.QuestionTitle>
          {questions.filter(question => !question.answered).map(question => (
            <Styled.Question key={question.id}>
              <Styled.QuestionText>{question.text}</Styled.QuestionText>
              <Styled.QuestionInfo>{`${question.assigned_department} - ${question.date}`}</Styled.QuestionInfo>
            </Styled.Question>
          ))}
        </Styled.QuestionColumn>
        <Styled.QuestionColumn>
          <Styled.QuestionTitle>Answered Questions</Styled.QuestionTitle>
          {questions.filter(question => question.answered).map(question => (
            <Styled.Question key={question.id}>
              <Styled.QuestionText>{question.text}</Styled.QuestionText>
              <Styled.QuestionInfo>{`${question.assigned_department} - ${question.date}`}</Styled.QuestionInfo>
            </Styled.Question>
          ))}
        </Styled.QuestionColumn>
      </Styled.QuestionPanel>
    );
}

// Componente QuestionBox
const QuestionBox = ({ questions }) => {

    // const clearFilters = (params) => {
    //     params.forEach((param) => {
    //       searchParams.delete(param);
    //     });
    
    //     setSearchParams(searchParams);
    // };

    // const { questions: initialQuestions } = useLoaderData();
    // const [questions, setQuestions] = useState(initialQuestions);

    // const fetcher = useFetcher();
    // const [shouldFetch, setShouldFetch] = useState(true);
    // const [searchParams] = useSearchParams();

    // const onFetchMore = () => {
    //     if (!shouldFetch) return;
    //     fetcher.load(`/?index&${searchParams.toString()}&page=${page}`);
    //   };
    
    //   useEffect(() => {
    //     if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length === 0) {
    //       setShouldFetch(false);
    //       return;
    //     }
    
    //     if (fetcher.data && fetcher.data.questions && fetcher.data.questions.length > 0) {
    //       setQuestions((prevQuestions) => [...prevQuestions, ...fetcher.data.questions]);
    //       setPage((prevPage) => prevPage + 1);
    //       setShouldFetch(true);
    //     }
    //   }, [fetcher.data]);
    
    //   useEffect(() => {
    //     setQuestions(initialQuestions);
    //     setPage(2);
    //     setShouldFetch(true);
    //   }, [initialQuestions, searchParams]);

    return (
      <Styled.QuestionBox>
        {questions.map(question => (
          <Styled.QuestionRow key={question.id} answered={question.answered}>
            <Styled.QuestionColumn>
              <Styled.QuestionText>{question.question}</Styled.QuestionText>
            </Styled.QuestionColumn>
            <Styled.QuestionColumn>
              <Styled.QuestionInfo>{question.assigned_department}</Styled.QuestionInfo>
            </Styled.QuestionColumn>
            <Styled.QuestionColumn>
              <Styled.QuestionInfo>{formatDate(question.createdAt)}</Styled.QuestionInfo>
            </Styled.QuestionColumn>
            <Styled.QuestionColumn>
              <Styled.QuestionInfo>{question.answered ? 'Answered' : 'Unanswered'}</Styled.QuestionInfo>
            </Styled.QuestionColumn>
          </Styled.QuestionRow>
        ))}
      </Styled.QuestionBox>
    );
}

// Componente principal Dashboard
const Dashboard = () => {

    const { questionsFAQ, departments } = useLoaderData();

    useEffect(() => {
        // departments.unshift({ name: 'I don\'t know whom to assign it.', department_id: NOT_ASSIGNED_DEPARTMENT_ID });
        console.log(departments);
        console.log(questionsFAQ);
    }, []);

    const [selectedDepartment, setSelectedDepartment] = useState(departments[0].department_id);
    const [questions, setQuestions] = useState([
      {
        id: 1,
        text: 'How can I reset my password?',
        assigned_department: 1,
        date: 'May 15, 2023',
        answered: false
      },
      {
        id: 2,
        text: 'What is the status of my order?',
        assigned_department: 1,
        date: 'May 16, 2023',
        answered: true
      },
      {
        id: 3,
        text:'Do you offer any discounts for students?',
        assigned_department: 1,
        date: 'May 16, 2023',
        answered: false
      },
      {
        id: 4,
        text: 'How can I cancel my subscription?',
        assigned_department: 1,
        date: 'May 17, 2023',
        answered: false
      }
    ]);
  
    // const departments = ['All', 'Sales', 'Support', 'Billing'];
  
    const handleSelectDepartment = department => {
      setSelectedDepartment(department);
    //   const searchParam = parseInt(searchParams.get('department'), 10);
    }
  
    // const filteredQuestions = selectedDepartment === 'All'
    //   ? questions 
    //   : questions.filter(question => question.department === selectedDepartment);

    const filteredQuestions = questionsFAQ.filter(question => question.assigned_department === selectedDepartment);
  
    return (
      <Styled.Container>
        <Sidebar 
          departments={departments} 
          selectedDepartment={selectedDepartment} 
          handleSelectDepartment={handleSelectDepartment} 
        />
        <Styled.Main>
          <QuestionPanel questions={filteredQuestions} />
          <QuestionBox questions={filteredQuestions} />
        </Styled.Main>
      </Styled.Container>
    );
}

// Estilos con styled-components
const Styled = {
    Container: styled.div`
      display: flex;
      flex-direction: row;
      height: 100%;
    `,
    Sidebar: styled.div`
      display: flex;
      flex-direction: column;
      width: 20%;
      border-right: 1px solid #ccc;
      padding: 20px;
    `,
    Department: styled.div`
      margin-bottom: 10px;
      font-weight: ${props => props.selected ? 'bold' : 'normal'};
      cursor: pointer;
    `,
    Main: styled.div`
      display: flex;
      flex-direction: column;
      width: 80%;
      padding: 20px;
    `,
    QuestionPanel: styled.div`
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;
    `,
    QuestionColumn: styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-right: 20px;
    `,
    QuestionTitle: styled.div`
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 10px;
    `,
    Question: styled.div`
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
    `,
    QuestionText: styled.div`
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 5px;
    `,
    QuestionInfo: styled.div`
      font-size: 14px;
      color: #888;
    `,
    QuestionBox: styled.div`
      display: flex;
      flex-direction: column;
    `,
    QuestionRow: styled.div`
      display: flex;
      flex-direction: row;
      background-color: ${props => props.answered ? '#e0ffe0' : '#fff'};
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
    `,
    QuestionColumn: styled.div`
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-right: 20px;
    `
};

export default Dashboard;
