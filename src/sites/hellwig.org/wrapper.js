import styled from 'styled-components';

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  font-family: Roboto, sans-serif;
  background-image: url('static/background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  a {
    color: ${(p) => p.theme.hrefcolor};
  }
`;

export function Wrapper({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}
