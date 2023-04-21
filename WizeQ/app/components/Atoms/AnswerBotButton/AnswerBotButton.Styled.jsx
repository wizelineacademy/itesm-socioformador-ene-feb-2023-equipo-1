import styled from 'styled-components';
import botImage from 'app/images/logo_answerbot.png';

export const BotButton = styled.button`
    background-color: #213246;
    border: none;
    width: 150px;
    height: 150px;
    margin: 75% 0 0 0;
    float: right;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
    position: relative;
    transition: width 0.3s ease-in-out;

    & > .message {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out;
    }

    &:hover {
        width: 360px;

        & > .message {
            opacity: 1;
            visibility: visible;
            transition: opacity 0.25s ease-in-out;
            transition-delay: 0.2s;
        }
    }
`;

export const BotIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  border: none;
  background-image: url(${botImage});
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 0 0 10px 0 rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 27.5px;
  transform: translateY(-50%);
`

export const BotMessage = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    right: 8%;
    transform: translateY(-50%);
`;