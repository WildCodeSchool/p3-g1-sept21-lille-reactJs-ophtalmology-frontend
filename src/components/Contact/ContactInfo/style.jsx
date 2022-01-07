import styled from 'styled-components';

const SContactDiv = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  section {
    background-color: var(--color);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 350px;
    padding: 2em;
    margin-top: 2em;
    box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
      50px 5px 0px 5px rgba(0, 0, 0, 0);
    background: #0081c9;
  }

  p {
    margin-top: 5%;
    width: 80%;
    text-align: center;
  }

  h2 {
    margin-top: 5%;
    text-align: center;
  }

  img {
    min-width: 3vw;
    height: 7vh;
  }

  a {
    text-decoration: none;
    color: white;
  }

    @media only screen and (max-width: 800px) {
      flex-direction: column;
      align-items: center;
      
    section {
      width: 75%;
    }  
    

`;
export default SContactDiv;
