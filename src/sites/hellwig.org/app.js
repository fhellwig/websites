import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BuildInfo } from './build-info.js';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Main } from './main.js';
import { getTheme } from './themes.js';
import { TrustLogo } from './trust-logo.js';
import { Wrapper } from './wrapper.js';

export function App() {
  const [theme, setTheme] = useState(getTheme());
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Main onThemeChange={setTheme} />
        <Footer />
        <BuildInfo />
        <TrustLogo />
      </Wrapper>
    </ThemeProvider>
  );
}
