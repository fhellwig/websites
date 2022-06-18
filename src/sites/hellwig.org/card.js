import styled, { useTheme } from 'styled-components';

export const Card = styled.div`
  background-color: ${(p) => p.theme.bgcolor};
  color: ${(p) => p.theme.fgcolor};
  border: solid 1px #909090;
  border-radius: 10px;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  flex: 1 400px;
`;

export const CardHeader = styled.div`
  border-bottom: solid 1px;
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 5px;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-top: 10px;
`;

export function xxxCard({ children }) {
  const theme = useTheme();

  return <StyledCard theme={theme}>{children}</StyledCard>;
}
