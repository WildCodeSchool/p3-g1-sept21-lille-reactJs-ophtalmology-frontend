import styled from 'styled-components';

const SIntroduction = styled.section`
  .introduction {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .aljPictureDiv {
    width: 100%;
  }
  .aljPicture {
    width: 100%;
  }
  .aljAchievementList {
    background-color: white;
    width: 90vw;
    padding: 20px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
  }
  .aboutTextDiv {
    background-color: white;
    width: 90vw;
    padding: 20px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
  }
  .aljTitle {
    display: none;
  }
  .aljTitleMobile {
    width: 100%;
    font-size: 20px;
    text-align: center;
    margin: 15px;
  }
  .aljAchievement {
    margin: 10px;
  }
  .learnMoreBtn {
    text-decoration: none;
    border: none;
    background-color: white;
    font: var(--mFont);
    color: var(--mColor);
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 700px) {
    .introduction {
      width: 100vw;
      color: black;
      justify-content: center;
      flex-flow: row wrap;
      margin: 30px 5px 5px 5px;
    }
    .introductionSlide {
      width: 100vw;
      color: black;
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      margin: 30px 5px 5px 5px;
    }
    .aljPictureDiv {
      width: 55vw;
      position: relative;
    }
    .aljPictureDiv:hover .aljTitleOverlay {
      opacity: 0.5;
    }
    .aljTitleOverlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: 1.5s ease;
      background: rgb(191, 188, 188);
      background: linear-gradient(
        130deg,
        rgba(191, 188, 188, 1) 0%,
        rgba(0, 0, 0, 1) 74%
      );
    }
    .aljTitleMobile {
      display: none;
    }
    .aljTitle {
      display: flex;
      flex-direction: column;
      width: 19vw;
      font-size: 18px;
      line-height: 22px;
      color: white;
      position: absolute;
      top: 20%;
      left: 75%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
    .learnMoreBtnSlide {
      border: none;
      text-decoration: none;
      background-color: transparent;
      color: white;
      font: var(--mFont);
      margin-top: 30px;
    }
    .learnMoreBtnSlideHidden {
      display: none;
    }
    .aljAchievementList {
      width: 40vw;
      padding: 10px;
      justify-content: center;
    }
    .aljAchievementHidden {
      display: none;
    }
    .learnMoreDiv {
      display: flex;
      justify-content: center;
    }
    .learnMoreBtn {
      width: 300px;
      margin: 15px auto 0 auto;
      height: 30px;
      transition: 0.4s;
    }
    .learnMoreBtn:hover {
      background-color: var(--mColor);
      color: white;
      transition: 0.4s;
    }
    .aboutTextDiv {
      width: 40vw;
      padding: 10px;
      line-height: 30px;
      display: flex;
      flex-direction: column;
    }
    .aboutText {
      margin-bottom: 10px;
      text-align: center;
    }
    .aboutTextHidden {
      display: none;
    }
    button {
      cursor: pointer;
    }
  }
`;

export default SIntroduction;
