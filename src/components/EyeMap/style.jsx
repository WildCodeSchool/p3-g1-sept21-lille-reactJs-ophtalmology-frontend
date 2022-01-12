import styled from 'styled-components';

const SEye = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25vw;
  width: 100%;
  border-radius: 2vh;
  margin: auto;
  img {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
  }
  p {
    display: flex;
    align-items: center;
    color: var(--mColor);
    font-size: 3vh;
    margin-bottom: 5vh;
  }
  p:hover {
    display: flex;
    align-items: center;
    color: var(--mColor);
    font-size: 3vh;
    margin-bottom: 5vh;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
  @media only screen and (max-width: 800px) {
      margin: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  img {
      margin-top: 100px;
    }
  }

`;
export default SEye;
