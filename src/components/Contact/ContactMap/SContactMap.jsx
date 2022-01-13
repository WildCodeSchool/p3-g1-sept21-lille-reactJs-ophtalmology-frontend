import styled from 'styled-components';

const SContactMap = styled.div`
  .leaflet-container {
    margin: 3em;
    width: 30vw;
    height: 400px;
  }
  
  @media only screen and (max-width: 1100px) {
    .leaflet-container {
    min-width: 280px;
    width: 70vw;
    height: 350px;
    }
  
`;

export default SContactMap;
