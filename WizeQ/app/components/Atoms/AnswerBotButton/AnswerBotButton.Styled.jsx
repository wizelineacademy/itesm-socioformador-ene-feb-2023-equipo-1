import styled from 'styled-components';
import botImage from 'app/images/logo_answerbot.png';
import postIcon from 'app/images/post-icon.png';

import likeIcon from 'app/images/like.png';
import dislikeIcon from 'app/images/dislike.png';

import likeHoverIcon from 'app/images/likeHover.png';
import dislikeHoverIcon from 'app/images/dislikeHover.png';

import likeClickIcon from 'app/images/likeClick.png';
import dislikeClickIcon from 'app/images/dislikeClick.png';

/////////////////////////////////////////// AnswerBot Button ///////////////////////////////////////////

export const BotButton = styled.button`
    background-color: #213246;
    border: none;
    width: 8.4vw;
    height: 8.4vw;
    margin: 75% 0 0 0;
    float: right;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    position: relative;
    visibility: ${props => props.visible ? 'visible' : 'hidden'};
    transition: width 0.3s ease-in-out;

    & > .message {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        width: 20.16vw;

        & > .message {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease-in-out;
            transition-delay: 0.2s;
        }

        @media screen and (max-width: 3025px) and (min-height: 1150px) {
            width: 14vw;
        }

        @media screen and (max-width: 2400px) and (min-height: 1750px) {
            width: 17vw;
        }

        @media screen and (max-width: 2000px) and (min-height: 1750px) {
            width: 18vw;
        }

    }

    @media screen and (max-width: 1300px) {
        margin: 50% 0 0 0;
    }

    @media screen and (max-width: 1025px) and (max-height: 1060px) {
        display: none;
    }

    @media screen and (min-width: 1150px) and (min-height: 1150px) {
        width: 6.5vw;
        height: 6.5vw;
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
  
    @media screen and (min-width: 1150px) and (min-height: 1150px) {
        width: 4vw;
        height: 4vw;
    }
`


export const BotMessage = styled.div`
    color: #fff;
    font-size: 1.3vw;
    font-weight: bold;
    position: absolute;
    right: 8%;
    transform: translateY(-50%);

    @media screen and (max-width: 2000px) and (min-height: 500px) {
        font-size: 16px;
        left: 45%;
    }

    @media screen and (max-width: 2017px) {
        right: 2.15vw;
    }

    @media screen and (max-width: 1000px) {
        left: 50%;
        font-size: 20px;
    }

    @media screen and (max-width: 1500px) {
        left: 50%;
        font-size: 100%;
    }

`;

/////////////////////////////////////////// ChatBot ///////////////////////////////////////////

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
    visibility: ${props => props.visible ? 'visible' : 'hidden'};

    @media screen and (max-width: 1025px) and (max-height: 960px) {
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

    @media screen and (min-width: 2975px) {
        padding: 0 75px;
    }
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

export const sendButton = styled.button`
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
    transition: background-color 0.3s ease-in-out;

    &:hover {
    background-color: #F2F2F1;
    }
`;

/////////////////////////////////////////// Feedback ///////////////////////////////////////////

export const likeButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${props => props.liked ? likeClickIcon : likeIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0 0 2.5% 12.5%;
    padding: 0 5px;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${props => props.liked ? likeClickIcon : likeHoverIcon});
    }
`;

export const dislikeButton = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    background-image: url(${props => props.disliked ? dislikeClickIcon : dislikeIcon});
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
        background-image: url(${props => props.disliked ? dislikeClickIcon : dislikeHoverIcon});
    }
`;