import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Markdown } from './markdown.js';
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

const Loc = styled.pre`
  color: lightgreen;
  background-color: black;
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
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Section />} />
              <Route
                path="/loc"
                element={<Loc>{JSON.stringify(window.location, null, 4)}</Loc>}
              />
              <Route
                path="/pubs"
                element={
                  <Markdown url="https://raw.githubusercontent.com/fhellwig/publications/master/implementing-associations/article.md" />
                }
              />
            </Routes>
          </BrowserRouter>
        </Main>
        <Footer />
        <Build />
      </Wrapper>
    </ThemeProvider>
  );
}
