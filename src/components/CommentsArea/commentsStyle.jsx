import styled from 'styled-components';

const SComments = styled.section`
  @media only screen and (min-width: 927px) {
    padding: 10px 0;

    .comment {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      background-color: white;
      box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
    }
    .userComment {
      width: 100%;
    }
    .answerComment {
      width: 95%;
      margin-left: 5%;
      border: 1.5px solid var(--mColor);
    }
    .avatarContainer {
      width: 100px;
      height: 100px;
      margin: 10px 10px;
    }
    .avatars {
      margin: auto;
      width: 75px;
      height: 75px;
    }
    .infoContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    .dateContainer {
      display: flex;
      flex-direction: row;
    }
    .nameDisplay {
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
    .dateDisplay {
      font-size: 14px;
      font-weight: lighter;
      color: #a19999;
    }
    .messageDisplay {
      margin: 10px 0;
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media only screen and (max-width: 926px) {
    padding: 10px 0;

    .comment {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      background-color: white;
      box-shadow: 0px 0px 10px -4px rgba(0, 0, 0, 0.7);
    }
    .userComment {
      width: 100%;
    }
    .answerComment {
      width: 95%;
      margin-left: 5%;
      border: 1.5px solid var(--mColor);
    }
    .avatarContainer {
      width: 100px;
      height: 100px;
      margin: 10px 10px;
    }
    .avatars {
      margin: auto;
      width: 75px;
      height: 75px;
    }
    .infoContainer {
      display: flex;
      flex-direction: column;
      width: 90%;
    }
    .dateContainer {
      display: flex;
      flex-direction: row;
    }
    .nameDisplay {
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }
    .dateDisplay {
      font-size: 14px;
      font-weight: lighter;
      color: #a19999;
    }
    .messageDisplay {
      margin: 10px 0;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export default SComments;
