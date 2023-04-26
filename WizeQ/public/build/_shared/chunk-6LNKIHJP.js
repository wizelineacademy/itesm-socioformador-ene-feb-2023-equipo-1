import {
  styled_components_browser_esm_default
} from "/build/_shared/chunk-UPCFJQSK.js";
import {
  init_react
} from "/build/_shared/chunk-3WZ3CGWF.js";

// app/styles/About.Styled.jsx
init_react();
var colorDark50 = "#4E5154";
var colorSecondary = "#00A7E5";
var About = styled_components_browser_esm_default.div`
  background-color: #fff;
  color: ${colorDark50};
  line-height: 1.71;
  text-align: center;
`;
var AboutBody = styled_components_browser_esm_default.div`
  margin: auto;
  max-width: 65%;
  padding: 0 20px;

  @media (max-width: 767px) {
    max-width: 100%;
  }

  h1 {
    color: #a2abaf;
    font-size: 14px;
    letter-spacing: 1.5px;
    margin: auto;
    padding: 72px 0 12px;
    text-transform: uppercase;
  }

  h2 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    padding: 8px 10px;
  }

  h3 {
    color: ${colorDark50};
    font-size: 24px;
    font-weight: 600;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: left;
  }

  p {
    color: ${colorDark50};
    letter-spacing: 0.6px;
    margin: 40px 40px 18px 18px;
    padding: 8px 10px;
    text-align: justify;
  }

  span ul {
    list-style: none;

    @media (max-width: 767px) {
      padding-left: 20px;
    }
  }

  span ul li {
    padding-top: 10px;
    width: 60%;

    @media (max-width: 767px) {
      width: 100%;
    }

    &:before {
      display: inline-block;
      content: "\\2022";
      font-size: 30px;
      font-weight: bold;
      left: 6px;
      line-height: 0;
      margin-left: -1em;
      margin-top: 12px;
      position: relative;
      top: 4px;
      width: 1em;
      color: ${colorSecondary};

      @media (max-width: 767px) {
        left: 6px;
      }
    }
  }

  span ul.inside-list li::before {
    content: "\00b0";
    font-weight: unset;
    left: 22px;
    top: 23px;

    @media (max-width: 767px) {
      left: 32px;
    }
  }
`;
var BoxWrapper = styled_components_browser_esm_default.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;
var BoxContainer = styled_components_browser_esm_default.div`
    padding: 16px;
    
    @media screen and (min-width: 1025px){
      max-width: 50%;
    }

    @media (max-width: 767px) {
      left: 32px;
    }
`;
var BoxImageContainer = styled_components_browser_esm_default.div`
display: inline-block;
height: 48px;
margin-right: 8px;
`;
var BoxImage = styled_components_browser_esm_default.img`
  float: left;
  margin: 28px;

  @media (max-width: 767px) {
    margin-top: 0px;
  }
`;
var BoxBoldText = styled_components_browser_esm_default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;

  @media (max-width: 767px)  {
    margin-top: 0px;
  }
`;
var BoxMetadata = styled_components_browser_esm_default.div`
  margin: 28px;
  text-align: left;
`;
var AboutMetadata = styled_components_browser_esm_default.div`
  @media (max-width: 767px)  {
    margin-top: 24px;
  }
`;
var AboutWhatElseContainer = styled_components_browser_esm_default.div`
  margin-bottom: 28px;
  margin-top: 28px;
`;
var AboutWhatElseImg = styled_components_browser_esm_default.img`
  float: right;
  margin-left: 100px;
  margin-right: 28px;

  @media (max-width: 767px) {
    float: none;
    margin: auto;
  }
`;
var AboutWHatElseText = styled_components_browser_esm_default.div`
  margin-top: 44px;
  text-align: left;
  width: 70%;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
var AboutWHatElseBold = styled_components_browser_esm_default.div`
  color: ${colorDark50};
  font-family: "NunitoSans Semibold";
  margin-top: 44px;
  margin: 28px;
  text-align: left;
`;
var AboutWhatElseMetadata = styled_components_browser_esm_default.div`
  margin: 28px;
  text-align: left;
`;
var AboutFooter = styled_components_browser_esm_default.div`
  padding: 50px 0;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 50px 0 100px;
  }

  @media (max-width: 767px) {
    padding: 50px 0 100px;
  }

  a {
    text-decoration: none;
  }

  p {
    margin: auto;
    max-width: 800px;
    padding: 0 20px;

    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
`;

// app/images/ic_meeting.svg
var ic_meeting_default = "/build/_assets/ic_meeting-Q6VQZ7JB.svg";

// app/images/ic_saving_fund.svg
var ic_saving_fund_default = "/build/_assets/ic_saving_fund-Q3MWXURZ.svg";

// app/images/ic_dialogue.svg
var ic_dialogue_default = "/build/_assets/ic_dialogue-IMAMZON2.svg";

// app/images/ic_anonymous.svg
var ic_anonymous_default = "/build/_assets/ic_anonymous-YCAN6UEP.svg";

export {
  About,
  AboutBody,
  BoxWrapper,
  BoxContainer,
  BoxImageContainer,
  BoxImage,
  BoxBoldText,
  BoxMetadata,
  AboutMetadata,
  AboutWhatElseContainer,
  AboutWhatElseImg,
  AboutWHatElseText,
  AboutWHatElseBold,
  AboutWhatElseMetadata,
  AboutFooter,
  ic_meeting_default,
  ic_saving_fund_default,
  ic_dialogue_default,
  ic_anonymous_default
};
//# sourceMappingURL=/build/_shared/chunk-6LNKIHJP.js.map
