import styled from 'styled-components';

// base for header and footer
export const Marginal = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 70px;
  height: 70px;
  color: ${(p) => p.theme.marginal.fgcolor};
  background-color: ${(p) => p.theme.marginal.bgcolor};
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 1em;
    margin: 0;
    margin-block: 0;
  }
  span {
    font-size: 20pt;
    font-weight: 500;
  }
`;
