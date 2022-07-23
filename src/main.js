import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Content, Panel, PanelBlock, PanelHeading } from './bulma.js';
import { Markdown } from './markdown.js';
import { Section } from './section.js';

const MainElement = styled.main`
  height: 100%;
  overflow-y: auto;
`;

const Padded = styled.div`
  padding: 20px;
`;

const PubPanel = styled(Panel)`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

function PubPanelHeading() {
  let location = useLocation();
  return (
    <PanelHeading>
      <Content>
        <a href="/">Back to Main Page</a>
        {location.search && (
          <>
            <span>&nbsp;|&nbsp;</span>
            <a href="./pubs">Back to Publications</a>
          </>
        )}
      </Content>
    </PanelHeading>
  );
}

function Publications() {
  return (
    <Padded>
      <PubPanel>
        <PubPanelHeading />
        <PanelBlock>
          <Content>
            <Markdown />
          </Content>
        </PanelBlock>
      </PubPanel>
    </Padded>
  );
}

export function Main({ onThemeChange }) {
  return (
    <MainElement>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/pubs" element={<Publications />} />
        </Routes>
      </BrowserRouter>
    </MainElement>
  );
}
