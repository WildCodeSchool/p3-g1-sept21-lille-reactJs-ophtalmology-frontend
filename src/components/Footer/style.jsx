import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: var(--mColor);
  display: flex;
  flex-flow: row wrap;
  color: white;
  padding: 20px;
  margin-top: 50px;

  .footerLinks {
    width: 20%;
  }

  .footerLinks li {
    font-size: 14px;
    margin: 10px 0;
  }

  .legalNotice {
    width: 60%;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
    align-items: center;
  }

  .legalNotice h3 {
    font-size: 18px;
    font-weight: 600;
  }

  .legalNotice p {
    text-align: center;
    font-size: 14px;
    width: 80%;
  }

  a {
    text-decoration: underline;
    color: white;
  }

  .copyright {
    width: 100%;
    text-align: center;
    font-size: 12px;
    margin-top: 40px;
  }

  @media screen and (max-width: 700px) {
    flex-flow: column wrap;

    .footerLinks,
    .legalNotice {
      width: 100%;
    }

    .legalNotice {
      margin: 30px 0;
    }

    .footerLinks li {
      text-align: center;
    }
  }
`;

export default SFooter;
