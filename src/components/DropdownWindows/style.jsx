import styled from 'styled-components';

const SDropdownWindow = styled.section`
  width: 95vw;
  padding: 10px;
  display: flex;
  justify-content: center;
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
    align-items: center;
  }
  .hiddenDropdown {
    display: none;
  }

  @media only screen and (min-width: 700px) {
    width: 100vw;

    .windowTitle {
      width: 75vw;
      height: 40px;
      display: flex;
      align-items: center;
    }
    .dropdownContent {
      width: 75vw;
      height: auto;
    }
  }
`;

export default SDropdownWindow;
