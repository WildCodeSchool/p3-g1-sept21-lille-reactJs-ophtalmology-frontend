import styled from 'styled-components';

const SEye = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  img {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    width: 100%;
  }
  p {
    display: flex;
    align-items: center;
    color: var(--mColor);
    font-size: 20px;
    margin-top: 10px;
  }
  .eyeContainer {
    width: 300px;
  }
  @media only screen and (max-width: 800px) {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export default SEye;
