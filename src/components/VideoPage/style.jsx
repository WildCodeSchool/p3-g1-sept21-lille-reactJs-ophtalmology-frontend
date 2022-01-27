import styled from 'styled-components';

const SVideoPage = styled.section`
  display: flex;
  .videoList {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .videoItem {
    width: 80%;
    height: 200px;
    margin: 40px;
  }
  .videoCont {
    width: 100%;
    height: 85%;
  }
  .videoTitle {
    width: 100%;
    height: 10%;
    padding: 4px;
    text-align: center;
  }
  @media only screen and (min-width: 700px) {
    .videoList {
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
    .videoItem {
      width: 400px;
      height: 300px;
      margin: 20px;
    }
  }
`;

export default SVideoPage;
