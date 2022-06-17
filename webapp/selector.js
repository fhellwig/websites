import { Page as Hellwig } from './sites/hellwig.org/page.js';

export function getPageFor(domain) {
  switch (domain) {
    case 'hellwig.org':
    case 'localhost':
      return <Hellwig />;
    case 'odalco.com':
      //return <Odalco />;
      //XXX TEST ONLY
      return <Hellwig />;
    default:
      return <h1>Unknown domain: {domain}</h1>;
  }
}
