import styled from 'styled-components';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { Section } from './section.js';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  font-family: Roboto, sans-serif;
  background-image: url(background.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Main = styled.main`
  height: 100%;
  overflow-y: auto;
`;

export function Page() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Section />
      </Main>
      <Footer />
    </Wrapper>
  );
}
