import styled from 'styled-components';

const SFormMenu = styled.div`
  @media only screen and (min-width: 927px) {
    .menu {
      background-color: var(--mColor);
      font-family: var(--mFont);
      height: 52px;
      color: white;
      font-size: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: var(--mColor);
      z-index: 1;
    }

    .dropContent {
      display: flex;
      color: white;
      text-align: center;
      padding: 0 14px 0 14px;
      margin: 20px 0;
      text-decoration: none;
    }

    .dropDown:hover .dropContent {
      background-color: white;
      color: black;
      height: 52px;
      justify-content: center;
      align-items: center;
    }

    li.dropDown {
      display: flex;
    }

    .dropDownContent {
      color: black;
      margin-top: -20px;
      padding-left: 10px;
      padding-right: 10px;
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }

    .dropContent a {
      text-decoration: none;
      color: white;
    }
    .dropDownContent a {
      text-decoration: none;
      color: black;
    }

    .dropDownContent > li {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }

    .dropContent:hover > a {
      color: black;
    }

    .dropDownContent a:hover {
      text-decoration: underline;
    }

    .dropDown:hover .dropDownContent {
      display: block;
    }
  }
  @media only screen and (max-width: 926px) {
    .menu {
      display: none;
    }
  }
`;
export default SFormMenu;
