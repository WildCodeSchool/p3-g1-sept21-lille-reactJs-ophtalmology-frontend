import styled from 'styled-components';

const SCommentsArea = styled.section`
  @media only screen and (min-width: 300px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f3f2f2;
    padding: 10px 0;
    margin: auto;

    .commentSection {
      width: 90%;
      margin: auto;
    }
    .writeComment {
      display: flex;
      flex-direction: column;
    }
    .inputTitle {
      color: black;
    }
    h3 {
      display: flex;
      justify-content: center;
      color: var(--mColor);
      font-size: 32px;
      margin: 10px 0;
    }
    h5 {
      color: var(--mColor);
      font-size: 22px;
      margin: 15px 0;
    }
    .messageInput {
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      color: grey;
      font-size: 22px;
      margin: 5px 0 15px 0;
    }
    .sendBtn {
      width: 150px;
      height: auto;
      font-size: 16px;
      padding: 5px 10px;
      border: 2px solid var(--mColor);
      background-color: transparent;
      color: var(--mColor);
      cursor: pointer;
    }
    .sendBtn:hover {
      background-color: var(--mColor);
      color: #f3f2f2;
    }
    .btnDiv {
      margin: 20px 0;
      display: flex;
      justify-content: flex-end;
    }

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

export default SCommentsArea;
