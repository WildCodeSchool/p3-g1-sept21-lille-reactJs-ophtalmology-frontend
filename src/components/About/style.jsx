import styled from 'styled-components';

const SAbout = styled.section`
  .about {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  .aboutPicDiv {
    width: 100%;
  }
  .aboutPic {
    width: 100%;
  }
  .aboutTextDiv {
    width: 90vw;
    font-size: 18px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .aboutText {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 700px) {
    .about {
      flex-direction: row;
      margin: 30px 5px 5px 5px;
      align-items: center;
    }
    .aboutPicDiv {
      width: 50vw;
    }
    .aboutPic {
      width: 100%;
    }
    .aboutTextDiv {
      width: 50vw;
      height: auto;
      margin: 10px;
    }
    .aboutText {
      width: auto;
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 22px;
      line-height: 30px;
      margin: 10px;
    }
  }
`;

export default SAbout;
