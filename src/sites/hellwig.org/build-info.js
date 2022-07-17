import styled from 'styled-components';

const Info = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 0.75em;
  color: white;
`;

export function BuildInfo() {
  return <Info>Build: 220717.01</Info>;
}
