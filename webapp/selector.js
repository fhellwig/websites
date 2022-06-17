import { Page as Hellwig } from './sites/hellwig.org/page.js';
import { Page as Odalco } from './sites/odalco.com/page.js';

export function getPageFor(domain) {
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

export function getPage() {
  switch (window.location.hostname) {
    case 'www.hellwig.org':
    case 'hellwig.org':
    case 'localhost':
      return <Hellwig />;
    case 'www.odalco.com':
    case 'odalco.com':
      return <Odalco />;
    default:
      return <h1>Unknown domain: {domain}</h1>;
  }
}
