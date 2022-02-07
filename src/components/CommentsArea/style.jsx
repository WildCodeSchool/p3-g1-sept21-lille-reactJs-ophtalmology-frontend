import styled from 'styled-components';

const SCommentsArea = styled.section`
  @media only screen and (min-width: 700px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: #f3f2f2;
    margin: 50px 0 -50px 0;

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
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
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
  }
`;

export default SCommentsArea;
