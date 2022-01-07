import styled from 'styled-components';

const SEye = styled.section`
  display: flex;
  align-items: center;
  width: 75vw;
  margin: auto;
  img {
    border: solid 1px var(--mColor);
    border-radius: 3px;
    box-shadow: inset -1px 3px 8px 5px #1f87ff, 2px 5px 16px 0px #0b325e,
      50px 5px 0px 5px rgba(0, 0, 0, 0);
  }
  p {
    width: 600px;
    text-align: center;
    color: var(--mColor);
    margin-left: 10rem;
  }
`;
export default SEye;
