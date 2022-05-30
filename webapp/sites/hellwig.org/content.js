import styled from 'styled-components';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Main } from './main.js';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-family: Roboto, sans-serif;
  height: 100%;
`;

const MainContent = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export function Content() {
  return (
    <Container>
      <Header />
      <MainContent>
        <Main />
      </MainContent>
      <Footer />
    </Container>
  );
}
