import styled from 'styled-components';

const SContactInfo = styled.div`
  color: white;

  display: flex;
  justify-content: space-around;

  section {
    display: flex;
    background-color: #0081c9;
    flex-direction: column;
    align-items: center;
    width: 22vw;
    padding: 2em;
    margin-top: 2em;
    box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
      50px 5px 0px 5px rgba(0, 0, 0, 0);
    box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
      50px 5px 0px 5px rgba(0, 0, 0, 0);
    background: #0081c9;
  }

  p {
    width: 80%;
    text-align: center;
  }

  img {
    width: 75px;
  }

  a {
    text-decoration: none;
  }

  @media screen and (max-width: 750px) {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section {
    flex-direction: column;
    align-items: center;
    width: 75%;
    height: auto;
    margin: 2.5vh;
  }
`;

export default SContactInfo;
