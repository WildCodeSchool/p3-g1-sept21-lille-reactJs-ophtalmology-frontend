import styled from 'styled-components';

const SFormContact = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px;
  width: 30vw;
  border: 2px solid #0081c9;
  border-radius: 5px;

  label {
    padding: 5px;
    display: flex;
    flex-direction: column;
    input {
      margin: 5px;
      height: 2vw;
      border-radius: 5px;
      border: 2px solid #0081c9;
    }
    textarea {
      margin: 5px;
      height: 3vw;
      border-radius: 5px;
      border: 2px solid #0081c9;
    }
  }
  .button {
    width: 10vw;
    height: 2vw;
    align-self: center;
    border: 2px solid #0081c9;
    border-radius: 5px;
    background-color: #0081c9;
    color: white;
  }
`;
export default SFormContact;
