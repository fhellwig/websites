import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const BASE = 'https://raw.githubusercontent.com/fhellwig/publications/master/';
const DEFAULT = 'README.md';

const Container = styled.div`
  background-color: ${(p) => p.theme.bgcolor};
  color: ${(p) => p.theme.fgcolor};
  border: solid 1px #909090;
  border-radius: 10px;
  padding: 1em;
  font-size: 1.2em;
  xxfont-family: serif;
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
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  * img {
    max-width: 100%;
  }
`;

function transformImageUri(src) {
  return new URL(src, BASE).href;
}

function transformLinkUri(path) {
  if (path.endsWith('.md')) {
    const doc = path.substring(path.lastIndexOf('/') + 1);
    return './pubs?doc=' + doc;
  } else if (path.startsWith('http')) {
    return path;
  } else {
    return BASE + path;
  }
}

export function Markdown() {
  let location = useLocation();

  const [doc, setDoc] = useState(null);
  const [text, setText] = useState(null);

  useEffect(() => {
    let s = location.search;
    if (s && s.startsWith('?doc=')) {
      const doc = s.substring(s.indexOf('=') + 1);
      setDoc(doc);
    } else {
      setDoc(DEFAULT);
    }
  }, [location]);

  useEffect(() => {
    async function getText() {
      if (doc) {
        const url = BASE + doc;
        const res = await fetch(url);
        const text = await res.text();
        setText(text);
      } else {
        setText(null);
      }
    }
    getText();
  }, [doc]);

  return text ? (
    <Container>
      <p>
        <a href="/">Back to Main Page</a>
      </p>
      <p>
        <a href="./pubs">Back to Publications</a>
      </p>
      <ReactMarkdown
        transformLinkUri={transformLinkUri}
        transformImageUri={transformImageUri}
      >
        {text}
      </ReactMarkdown>
    </Container>
  ) : (
    <p>Loading...</p>
  );
}
