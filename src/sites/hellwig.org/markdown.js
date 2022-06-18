import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${(p) => p.theme.bgcolor};
  color: ${(p) => p.theme.fgcolor};
  border: solid 1px #909090;
  border-radius: 10px;
  padding: 1em;
  font-size: 1.2em;
  font-family: serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: sans-serif;
    margin-bottom: 0.1em;
  }
  p {
    margin-top: 10px;
  }
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  * img {
    max-width: 100%;
  }
`;

function bindTransformer(base) {
  return (path) => new URL(path, base).href;
}

export function Markdown({ url }) {
  const [text, setText] = useState(null);

  useEffect(() => {
    async function getText() {
      const res = await fetch(url);
      const text = await res.text();
      setText(text);
    }
    getText();
  }, []);

  return text ? (
    <Container>
      <ReactMarkdown transformImageUri={bindTransformer(url)}>
        {text}
      </ReactMarkdown>
    </Container>
  ) : (
    <p>Loading...</p>
  );
}
