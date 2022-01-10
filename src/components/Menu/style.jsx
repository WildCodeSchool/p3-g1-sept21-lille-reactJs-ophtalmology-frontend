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
    }

    .dropContent {
      display: flex;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    .dropDown:hover .dropContent {
      background-color: white;
      color: black;
      height: 52px;
      padding-top: 45px;
    }

    li.dropDown {
      display: flex;
    }

    .dropDownContent {
      color: black;
      margin-top: -30px;
      padding-left: 10px;
      padding-right: 10px;
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    
    .dropDownContent a{
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

    .dropDownContent a:hover {
      background-color: #f1f1f1;
      text-decoration: underline;
    }

    .dropDown:hover .dropDownContent {
      display: block;
    }
  }
  @media only screen and (max-width: 926px) {
    .menu{
      display: none;
    }
`;
export default SFormMenu;
