import styled from 'styled-components';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Main } from './main.js';

// Page layout as columns for the header, the main content, and the footer.
const Page = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

export function App() {
  return (
    <Page>
      <Header />
      <Main />
      <Footer />
    </Page>
  );
}
