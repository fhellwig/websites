import styled from 'styled-components';
import { Content, Footer as BulmaFooter } from './bulma.js';
import trust from './positivessl.png';

const StyledFooter = styled(BulmaFooter)`
  color: white;
  background-color: cornflowerblue;
`;

export function Footer() {
  return (
    <StyledFooter>
      <Content>
        <p>
          Please contact me via <a href="tel:5712076308">phone</a> or{' '}
          <a href="mailto:frank@hellwig.org">email</a>
        </p>
        <p>
          <img src={trust} />
        </p>
        <p>Build: 220723.01</p>
      </Content>
    </StyledFooter>
  );
}
