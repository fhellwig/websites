import { App as Hellwig } from './sites/hellwig.org/app.js';
import { App as Odalco } from './sites/odalco.com/app.js';

export function getApp() {
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
