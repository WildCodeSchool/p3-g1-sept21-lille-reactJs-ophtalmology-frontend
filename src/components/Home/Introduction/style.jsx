import styled from 'styled-components';

const SIntroduction = styled.section`
  .introduction {
    width: 100vw;
    height: auto;
    display: flex;
    flex-flow: column;
  }
  .aljPictureDiv {
    width: 100%;
  }
  .aljPicture {
    width: 100%;
  }
  .aljAchievementsList {
    background-color: white;
    width: 90vw;
    padding: 20px;
    font-size: 18px;
    display: flex;
    flex-flow: column;
  }
  .aljTitle {
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
      justify-content: flex-start;
      flex-flow: row;
      align-items: center;
      margin: 30px 5px 5px 5px;
    }
    .aljPictureDiv {
      width: 50vw;
    }
    .aljPictureDiv:hover {
      background-color: var(--mColor);
    }
    .aljPicture:hover {
      opacity: 80%;
    }
    .aljAchievementsList {
      width: 50vw;
    }
    .aljTitle {
      width: 50vw;
      font-size: 22px;
      margin-bottom: 20px;
      display: flex;
      text-align: center;
    }
    .learnMoreDiv {
      display: flex;
      justify-content: center;
    }
    .learnMoreBtn {
      width: 300px;
      margin: 15px auto 0 auto;
      height: 30px;
      display: flex;
      justify-content: center;
      transition: 0.3s;
    }
    .learnMoreBtn:hover {
      background-color: var(--mColor);
      color: white;
      transition: 0.3s;
    }
  }
`;

export default SIntroduction;
