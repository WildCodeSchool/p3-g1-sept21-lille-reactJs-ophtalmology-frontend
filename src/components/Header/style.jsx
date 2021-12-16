import styled from 'styled-components';

const SHeader = styled.div`
  .header {
    width: 100%;
    height: 125px;
    background-color: var(--mColor);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-flow: row;
    padding: 2px;
  }

  .headerLogoContainer {
    height: 100px;
    width: 200px;
    display: flex;
    background-color: #fff;
  }

  .headerLogo {
    width: 100%;
  }

  .headerCatContainer {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    height: 100px;
  }

  .headerCat {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: var(--mColor);
    color: #fff;
    margin: 5px;
    width: 35vw;
    height: 50px;
    text-decoration: none;
  }

  @media only screen and (min-width: 700px) {
    .header {
      height: 100px;
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      /* the border-bottom will be deleted later */
      border-bottom: 1px solid black;
    }

    .headerLogoContainer {
      margin: 10px 10px 10px 175px;
    }

    .headerCatContainer {
      width: 50vw;
      margin: 10px 150px 10px 10px;
      display: flex;
      justify-content: flex-end;
      flex-direction: row;
    }

    .headerCatContainer a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .headerCat {
      background-color: #fff;
      color: #000;
      font-size: 20px;
      width: 8vw;
    }
  }
`;

export default SHeader;
