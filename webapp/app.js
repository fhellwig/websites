import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getContent } from './sites/content.js';

const Site = styled.div`
  font-family: Roboto, sans-serif;
`;

const theme = {
  global: {
    colors: {
      brand: '#228Be6'
    },
    font: {
      family: 'Roboto, sans-serif',
      size: '18px',
      heigt: '20px'
    }
  }
};

export function App() {
  const [host, setHost] = useState({});

  useEffect(() => {
    async function getHost() {
      const res = await fetch('/host');
      const host = await res.json();
      setHost(host);
    }
    getHost();
  }, []);

  return <Site>{getContent(host.domain)}</Site>;
}

function Content({ size, domain }) {
  switch (domain) {
    case 'hellwig.org':
    case 'localhost':
      return <Hellwig />;
    case 'odalco.com':
      return <Odalco />;
    default:
      return <h1>Unknown domain: {domain}</h1>;
  }
}
