import styled from 'styled-components';

const SDropdownWindow = styled.section`
  width: 95vw;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .dropdownBtn {
    background-color: var(--mColor);
    color: white;
    font: var(--mFont);
    border: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    text-align: left;
    align-items: center;
  }
  .windowTitle {
    width: 90vw;
    height: 40px;
    margin: 20px auto 0 auto;
    display: flex;
    align-items: center;
  }
  .hiddenDropdown {
    display: none;
  }
  .dropdownContent {
    width: 89vw;
    padding: 10px;
    line-height: 22px;
    margin: auto;
  }
  .pictureDisplay {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (min-width: 700px) {
    width: 100vw;

    .windowTitle {
      width: 75vw;
      height: 50px;
    }
    .dropdownContent {
      width: 74vw;
      height: auto;
      line-height: 26px;
    }
    .pictureDisplay {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
    }
    button {
      cursor: pointer;
    }
  }
`;

export default SDropdownWindow;
