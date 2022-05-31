import { useEffect, useState } from 'react';
import { getPageFor } from './selector.js';

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

  return getPageFor(host.domain);
}
