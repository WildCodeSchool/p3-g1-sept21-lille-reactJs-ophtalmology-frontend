import styled from 'styled-components';

const SFormMenuBurger = styled.div`

  @media only screen and (max-width: 926px) {
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 28px;
    }
    .menuBurger {
      height: 10vh;
      position: fixed;
      top: 0;
      z-index: 1000;
      margin-bottom: 1vh;
      width: 100%;
      background-color: var(--mColor);
      background-size: 100vw 1200px;
    }
    .bm-burger-bars {
      background: black;
      border-radius: 10px;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-menu-wrap {
      position: fixed;
      height: 100%;
    }
    .bm-menu {
      background: #373a47;
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    .bm-morph-shape {
      fill: #373a47;
    }
    .bm-item-list {
      color: #fff;
      padding: 0.8em;
      font-family: var(--mFont);
    }
    .bm-item {
      display: inline-block;
    }
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .menuBurger li {
      margin-top: 2vh;
    }
    details {
      border: 1px solid #aaa;
      border-radius: 4px;
      padding: 0.5em 0.5em 0;
    }
    details p {
      margin: 15px;
    }
    summary {
      font-weight: bold;
      margin: -0.5em -0.5em 0;
      padding: 0.5em;
    }
    details[open] {
      padding: 0.5em;
    }
    details[open] summary {
      border-bottom: 1px solid #aaa;
      margin-bottom: 0.5em;
    }
  }
  @media only screen and (min-width: 927px) {
    .menuBurger{
      display: none;
    }
`;
export default SFormMenuBurger;
