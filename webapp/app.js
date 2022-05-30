import { useEffect, useState } from 'react';
import { getContent } from './sites/content.js';

const theme = {
  global: {
    colors: {
      brand: '#228Be6',
      text: 'black'
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

  return getContent(host.domain);
}
