import * as Styled from 'app/components/Atoms/AnswerBotButton/AnswerBotButton.Styled';
import { useEffect, useRef, useState, useCallback } from 'react';
import {pdfConv} from 'app/controllers/answerBot/pdfConv';
import useUser from 'app/utils/hooks/useUser';
import { ContentState, convertFromRaw, EditorState } from 'draft-js';
import { useFetcher } from '@remix-run/react';
import {
    DEFAULT_LOCATION,
    ANONYMOUS_USER,
    HTML_CODE_WARNING,
    MINIMUM_QUESTION_LENGTH,
    MAXIMUM_QUESTION_LENGTH,
    NO_DEPARTMENT_SELECTED_TOOLTIP_MESSAGE,
    MIN_CHARS_QUESTION_INPUT_TOOLTIP_MESSAGE,
    DEFAULT_MESSAGE_END_QUESTION_INPUT_TOOLTIP,
    NO_LOCATIONS_AVAILABLE_TOOLTIP_MESSAGE,
    NONE_LOCATION,
    DEFAULT_LOCATION_MESSAGE,
    ALL_LOCATIONS_MESSAGE,
    LOCATION_WARNING,
    NO_DEPARTMENT_SELECTED_ID,
    NOT_ASSIGNED_DEPARTMENT_ID,
  } from 'app/utils/constants';
import { markdownToDraft } from 'markdown-draft-js';
import PropTypes from 'prop-types';

function AnswerBotButton({
    postQuestion,
    locations,
    departments,
    initialValue,
    initialDepartment,
    initialIsAnonymous,
}) {

    const { full_name, picture } = useUser();
    const fetcher = useFetcher();
    const initialState = {
        inputValue: initialValue,
        isAnonymous: initialIsAnonymous,
        showSubmitWithModal: false,
        dropDownTitle: postQuestion,
        warnings: [],
        location: NONE_LOCATION,
        closed: false,
        isAsking: false,
        profilePicture: picture,
        assignedDepartment: initialDepartment,
        fullLocation: '',
        isShowPreview: false,
        askBtbEnabled: false,
        assignedEmployee: undefined,
        employeesByDepartment: [],
    };
    const [state, setState] = useState(initialState);
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(convertFromRaw(markdownToDraft(state.inputValue))),
    );

    const selectPostingAs = (username) => {
        const isAnonymous = (username === ANONYMOUS_USER.username);
        const profilePicture = isAnonymous ? ANONYMOUS_USER.profilePicture : picture;
        setState({
          ...state,
          dropDownTitle: username,
          profilePicture,
          isAnonymous,
        });
    };

    useEffect(() => {
        selectPostingAs(full_name);
    }, [full_name]);

    const clearTextArea = () => {
        setEditorState(() => EditorState.push(editorState, ContentState.createFromText(''), 'remove-range'));
    };

    const onSubmitWithModalSuccess = async () => {
        const {
          location, isAnonymous, inputValue, assignedDepartment,
        } = state;
        setState({ ...state, showSubmitWithModal: false });
        const question = {
          isAnonymous,
          question: inputValue,
          location: location === NONE_LOCATION ? DEFAULT_LOCATION : location,
          assignedDepartment: assignedDepartment.department_id || 'wizeq',
          assigned_to_employee_id: state.assignedEmployee ? state.assignedEmployee.id : undefined,
        };
        // console.log("inputValue onSubmitWithModalSuccess: ",inputValue)
        console.log(question)
    
        try {
          await postQuestion(question);
          setState(initialState);
          clearTextArea();
        } catch (error) {
          throw error;
        }
    };

    const onSubmit = () => {
        const {
          location,
          isAnonymous,
          inputValue,
        } = state;
        const trimmed = inputValue;
        const sanitizedInput = inputValue;
    
        setState({
          ...state,
          isAsking: true,
        });

        console.log("isAnonymous: ", isAnonymous)
        console.log("!isAnonymous: ", !isAnonymous)
        console.log("inputValue onSubmit: ",inputValue)
        // if (!isAnonymous) {
        //   setState({
        //     ...state,
        //     showSubmitWithModal: true,
        //     isAsking: false,
        //   });
        //   return;
        // }
        console.log("yes")
        onSubmitWithModalSuccess();
    };

    const onSubmitWithModalClose = () => {
        setState({
          ...state,
          showSubmitWithModal: false,
          warnings: [],
        });
    };

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const instructions = "Instructions: Compose a comprehensive reply to the query using the search results given.\nCite each reference using [number] notation (every result has this number at the beginning).\nCitation should be done at the end of each sentence. If the search results mention multiple subjects\nwith the same name, create separate answers for each. Only include information found in the results and\ndon't add any additional information. Make sure the answer is correct and don't output false content.\nIf the text does not relate to the query, simply state 'Sorry, I couldn't find an answer to your question.'. Don't write 'Answer:'Directly start the answer.\n"

    const messagesEndRef = useRef(null);

    const [messages, setMessages] = useState([{role: "system", content: instructions}, {role: "system", content: "Hello! Ask me any question and I'll see how I can help you."}]);

    const handleInput = async (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input');
        const message = input.value;
        input.value = '';
        setMessages([...messages, {role: "user", content: message}]);
        const chatHistory = [...messages, {role: "user", content: message}];
        const filteredMessages = chatHistory.filter((message, index) => index !== 1);
        const response = await pdfConv(filteredMessages);
        const answer = response.text
        setMessages([...messages, {role: "user", content: message}, {role: "system", content: answer}]);
        // console.log(response);
    };

    useEffect(() => {
        const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        };
        scrollToBottom();
        if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const [chatbotVisible, setChatbotVisible] = useState(false);

    const handleChatbotToggle = () => {
        setChatbotVisible(!chatbotVisible);
        console.log(chatbotVisible);
    };

    const [likedButtons, setLikedButtons] = useState({});
    const [dislikedButtons, setDislikedButtons] = useState({});
    const [showThanksMessage, setShowThanksMessage] = useState({});

    const handleLikeClick = (index) => {
        setLikedButtons((prevLikedButtons) => ({
          ...prevLikedButtons,
          [index]: !prevLikedButtons[index],
        }));
        setDislikedButtons((prevDislikedButtons) => ({
          ...prevDislikedButtons,
          [index]: false,
        }));
        setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [index]: !likedButtons[index],
        }));
    };

    const onInputChange = (inputValue) => {
        setState({ ...state, inputValue });
    };
    
    const handleDislikeClick = (index) => {
        console.log(messages[index].content);
        onInputChange(messages[index].content)
        setDislikedButtons((prevDislikedButtons) => ({
            ...prevDislikedButtons,
            [index]: !prevDislikedButtons[index],
        }));
        setLikedButtons((prevLikedButtons) => ({
            ...prevLikedButtons,
            [index]: false,
        }));
        setShowThanksMessage((prevShowThanksMessage) => ({
            ...prevShowThanksMessage,
            [index]: !dislikedButtons[index],
        }));
        onSubmit();

    };

    return (
        <div>
            <Styled.BotButton visible={!chatbotVisible} onClick={handleChatbotToggle}>
                <Styled.BotIcon/>
                <Styled.BotMessage className="message">
                    Hi, I'm AnswerBot!
                    <br/>
                    Ask me anything!
                </Styled.BotMessage>
            </Styled.BotButton>

            <Styled.ChatbotContainer visible={chatbotVisible}>
                <Styled.ChatbotHeader>
                    <Styled.IconBot style={{position: 'absolute'}}/>
                    <Styled.BotName> AnswerBot </Styled.BotName>
                    <Styled.CloseButton onClick={handleChatbotToggle}> ✕ </Styled.CloseButton>
                </Styled.ChatbotHeader>

                <Styled.ChatbotMessages>
                {messages.slice(1).map((message, index) => (
                    message.role == "user" ? 
                    <Styled.ChatbotRowMessage style={{justifyContent: 'flex-end'}}>
                        <Styled.Message 
                            key={index}
                            className='user'
                            ref={messagesEndRef}>
                            {message.content}
                        </Styled.Message>
                        <Styled.IconUser src='/build/_assets/placeholder_user_img-ZWAQNLBE.png'/> 
                    </Styled.ChatbotRowMessage>
                    :
                    <div>
                        <Styled.ChatbotRowMessage style={{justifyContent: 'flex-start'}}>
                            <Styled.IconBot/>
                            <Styled.Message
                                key={index}
                                className='bot'
                                ref={messagesEndRef}>
                                {message.content}
                            </Styled.Message>
                        </Styled.ChatbotRowMessage>
                        {index !== 0 ?
                            <div>
                                <Styled.likeButton
                                    key={`like-${index}`}
                                    liked={likedButtons[index]}
                                    onClick={() => handleLikeClick(index)}
                                />
                                <Styled.dislikeButton
                                    key={`dislike-${index}`}
                                    disliked={dislikedButtons[index]}
                                    onClick={() => handleDislikeClick(index)}
                                />
                                { showThanksMessage[index] ? <span style={{padding: '5px'}}> Thanks for the feedback! </span> : <> </> }
                            </div>
                            :
                            <> </>
                        }
                    </div>
                ))}
                </Styled.ChatbotMessages>

                <Styled.ChatbotInput onSubmit={handleInput}>
                <Styled.Input type="text" placeholder="Enter your question..." />
                <Styled.sendButton type="submit"/>
                </Styled.ChatbotInput>
            </Styled.ChatbotContainer>
        </div>
    );
}








AnswerBotButton.propTypes = {
    postQuestion: PropTypes.func.isRequired,
    profile: PropTypes.shape({
      name: PropTypes.string,
      picture: PropTypes.string,
    }),
    locations: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    departments: PropTypes.arrayOf(
      PropTypes.shape(),
    ),
    initialValue: PropTypes.string,
    initialDepartment: PropTypes.shape({
      name: PropTypes.string.isRequired,
      department_id: PropTypes.number.isRequired,
    }),
    initialIsAnonymous: PropTypes.bool,
};
  
AnswerBotButton.defaultProps = {
    profile: {
        name: '',
        picture: '',
    },
    initialValue: 'Hello! Ask me any question and I\'ll see how I can help you.',
    departments: [],
    initialDepartment: {department_id: 17, name: "Wizeline Questions Staff", is_active: true},
    initialIsAnonymous: false,
};



export default AnswerBotButton;