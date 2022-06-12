import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Section } from './section.js';
import { ThemeToggle } from './theme-toggle.js';
import { getTheme } from './themes.js';

const Wrapper = styled.div`
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

const Main = styled.main`
  height: 100%;
  overflow-y: auto;
`;

const BuildInfo = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 0.5em;
  color: white;
`;

function Build() {
  return <BuildInfo>220612.01</BuildInfo>;
}

export function Page() {
  const [theme, setTheme] = useState(getTheme());
  function changeTheme(theme) {
    setTheme(getTheme(theme));
  }
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main>
          <ThemeToggle onThemeChange={changeTheme} />
          <Section />
        </Main>
        <Footer />
        <Build />
      </Wrapper>
    </ThemeProvider>
  );
}
