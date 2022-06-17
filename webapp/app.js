import { getPage } from './selector.js';

export function App() {
  /*
  const [host, setHost] = useState({});

  useEffect(() => {
    async function getHost() {
      const res = await fetch('/host');
      const host = await res.json();
      setHost(host);
    }
    getHost();
  }, []);
  */

  return getPage();
}
