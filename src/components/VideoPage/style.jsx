import styled from 'styled-components';

const SVideoPage = styled.section`
  @media only screen and (min-width: 700px) {
    .videoList {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
    .videoItem {
      width: 400px;
      height: 300px;
      margin: 20px;
      border: 2px dotted red;
    }
    .videoCont {
      width: 100%;
      height: 85%;
    }
    .videoTitle {
      height: 10%;
      padding: 4px;
      text-align: center;
      border: 2px dotted orange;
    }
  }
`;

export default SVideoPage;
