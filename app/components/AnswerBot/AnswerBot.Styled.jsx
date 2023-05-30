import styled, { keyframes, css } from 'styled-components';

import botImage from 'app/images/logo_answerbot.png';
import postIcon from 'app/images/post-icon.png';

import likeIcon from 'app/images/like.png';
import dislikeIcon from 'app/images/dislike.png';

import likeHoverIcon from 'app/images/likeHover.png';
import dislikeHoverIcon from 'app/images/dislikeHover.png';

/// ///////////////////////////////////// AnswerBot Button /////////////////////////////////////

export const BotButton = styled.button`
    background-color: #213246;
    border: none;
    width: 8.4vw;
    height: 8.4vw;
    right: 0px;
    position: fixed;
    top: 70%;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    transition: width 0.3s ease-in-out;

    & > .message {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        width: 19vw;

        & > .message {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease-in-out;
            transition-delay: 0.2s;
        }
        
        @media screen and (min-width: 1600px) {
            width: 14vw;
        }

        @media screen and (min-width: 2000px) {
            width: 13vw;
        }
    }

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (min-width: 1600px) {
        width: 6vw;
        height: 6vw;
    }
`;

export const BotIcon = styled.img`
    width: 5.6vw;
    height: 5.6vw;
    border-radius: 50%;
    background-color: #fff;
    border: none;
    background-image: url(${botImage});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    position: absolute;
    left: 1.5vw;
    transform: translateY(-50%);

    @media screen and (min-width: 1600px) {
        width: 4vw;
        height: 4vw;
        left: 1.25vw;
    }
`;

export const BotMessage = styled.div`
    color: #fff;
    font-size: 115%;
    font-weight: bold;
    position: absolute;
    right: 1.3vw;
    padding-left: 7.85vw;
    transform: translateY(-50%);

    @media screen and (max-width: 1240px) {
        font-size: 100%;
        right: 1.1vw;
    }

    @media screen and (max-width: 1100px) {
        font-size: 85%;
    }

    @media screen and (min-width: 1600px) {
        font-size: 90%;
        padding-left: 5vw;
    }

`;

/// ////////////////////////////////////// ChatBot /////////////////////////////////////////

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
    transition: visibility 0.3s ease-in-out;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

    @media screen and (max-width: 1025px) {
        display: none;
    }

    @media screen and (max-height: 450px) {
        display: none;
    }
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
    background-image: url(${botImage});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    left: 5%;
    margin: 5px 0px;
`;

export const IconUser = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    border: 0px solid transparent;
    box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
    margin-right: 10px;
    margin: 5px 0px;
`;

export const BotName = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    padding: 0 85px;

    @media screen and (min-width: 2975px) {
        padding: 0 75px;
    }
`;

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
`;

export const ChatbotMessages = styled.div`
    flex: 1;
    padding: 10px;
    overflow-y: auto;
`;

export const ChatbotRowMessage = styled.div`
    display: flex;
    alignItems: center;
`;

const blinkAnimation = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
`;

export const Message = styled.div`
    padding: 10px 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin: 5px 7.5px;
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

        ${(props) => props.isWaiting && css`
          position: relative;
          overflow: hidden;

          &:after {
            content: '...';
            animation: ${blinkAnimation} 1s infinite alternate;
            animation-delay: ${props.index * 0.2}s;
          }
        `}
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
    cursor: ${(props) => (props.enabled ? 'text' : 'not-allowed')};
`;

export const SendButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 25%;
    background-color: #fff;
    border: none;
    background-image: url(${postIcon});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 5px 5px;
    opacity: ${(props) => (props.inputLength > 13 ? 1 : 0.3)};
    cursor: ${(props) => (props.inputLength > 13 ? 'pointer' : 'not-allowed')};
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${(props) => (props.inputLength > 13 ? '#F2F2F1' : '#fff') };
    }
`;

/// ////////////////////////////////////// Feedback /////////////////////////////////////////

export const LikeButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${likeIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 2.5% 12.5%;
    padding: 0 5px;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${likeHoverIcon});
    }
`;

export const DislikeButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${dislikeIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${dislikeHoverIcon});
    }
`;

export const TextFeedback = styled.span`
    padding: ${(props) => (props.padding === 'na' ? '0px 0px' : '5px 31px')};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
`;

export const PublishButton = styled.button`
    margin: 0 0 2.5% 10%;
    background-color: #fff;
    color: #213246;
    border: 1px solid #213246;
    padding: 8px 25px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #213246;
        color: #fff;
    }
`;