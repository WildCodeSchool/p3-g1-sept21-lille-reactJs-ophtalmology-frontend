import styled from 'styled-components';

const SFormContact = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 30vw;
  border: 2px solid var(--mColor);
  border-radius: 5px;

  label {
    padding: 5px;
    display: flex;
    flex-direction: column;

    input {
      margin: 5px;
      height: 4vh;
      border-radius: 5px;
      border: 2px solid var(--mColor);
    }

    textarea {
      margin: 5px;
      height: 12vh;
      border-radius: 5px;
      border: 2px solid var(--mColor);
    }
  }

  .button {
    width: 30%;
    height: 7vh;
    align-self: center;
    border: 2px solid var(--mColor);
    border-radius: 5px;
    background-color: var(--mColor);
    color: white;
    font-size: large;
  }

  @media only screen and (max-width: 1100px) {
    width: 80%;
  }

  .button {
    width: 30%;
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
  }

  .button {
    width: 45%;
  }
`;
export default SFormContact;
