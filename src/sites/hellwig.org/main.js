import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Markdown } from './markdown.js';
import { Section } from './section.js';
import { ThemeToggle } from './theme-toggle.js';

const MainElement = styled.main`
  height: 100%;
  overflow-y: auto;
`;

export function Main({ onThemeChange }) {
  return (
    <MainElement>
      <ThemeToggle onThemeChange={onThemeChange} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route
            path="/pubs"
            element={
              <Markdown url="https://raw.githubusercontent.com/fhellwig/publications/master/implementing-associations/article.md" />
            }
          />
        </Routes>
      </BrowserRouter>
    </MainElement>
  );
}
