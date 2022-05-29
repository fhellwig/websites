import { Content as Hellwig } from './hellwig.org/content.js';
import { Content as Odalco } from './odalco.com/content.js';

export function getContent(domain) {
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
