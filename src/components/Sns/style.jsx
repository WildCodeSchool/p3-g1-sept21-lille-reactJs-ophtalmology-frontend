import styled from 'styled-components';

const SSns = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  width: 20%;

  li {
    margin: 0 5px;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: center;
  }
`;

export default SSns;
