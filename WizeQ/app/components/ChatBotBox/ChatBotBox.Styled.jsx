import styled from 'styled-components';
import botIcon from 'app/images/logo_answerbot.png';
import postIcon from 'app/images/post-icon.png'

export const ChatbotContainer = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
    width: 330px;
    height: 430px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    background-color: #E1EAF4;
    display: flex;
    flex-direction: column;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
`;

export const ChatbotHeader = styled.div`
    background-color: #213246;
    height: 40px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 47.5px;
`;

export const IconBot = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    background-image: url(${botIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    left: 5%;
    margin: 5px 0px;
`

export const IconUser = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    margin: 5px 0px;
`

export const BotName = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    padding: 0 85px;
`

export const CloseButton = styled.button`
    color: #fff;
    font-size: 15px;
    background-color: transparent;
    border: none;
    transform: scale(1);
    transition: transform 0.3s ease-in-out;

    &:hover {
    transform: scale(1.4);
    }
`

export const ChatbotMessages = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`;

export const ChatbotRowMessage = styled.div`
    display: flex;
    alignItems: center;
`

export const Message = styled.div`
    padding: 5px 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px 10px;
    max-width: 80%;
    word-break: break-word;

    &.user {
    background-color: #fff;
    border-top-left-radius: 10px;
    align-self: flex-end;
    color: #000;
    text-align: right;
    }

    &.bot {
    background-color: #213246;
    border-top-right-radius: 10px;
    color: #fff;
    }
`;

export const ChatbotInput = styled.form`
    display: flex;
    align-items: center;
    width: 330px;
    background-color: #fff;
`;

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    border: none;
    outline: none;
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 25%;
    background-color: #fff;
    border: none;
    background-image: ${postIcon};
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 5px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
    background-color: #F2F2F1;
    }
`;