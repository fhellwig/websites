import { Marginal } from './marginal.js';

export function Footer() {
  return (
    <Marginal as="footer">
      <span>
        Please contact me via <a href="tel:5712076308">phone</a> or{' '}
        <a href="mailto:frank@hellwig.org">email</a>
      </span>
    </Marginal>
  );
}
