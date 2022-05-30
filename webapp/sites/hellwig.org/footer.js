import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 70px;
  color: white;
  background-color: #228be6;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.5em;
    font-weight: 500;
    xmargin-left: 1em;
    xmargin-right: 1em;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <span>
        Please contact me via <a href="tel:5712076308">phone</a> or{' '}
        <a href="mailto:frank@hellwig.org">email</a>
      </span>
    </StyledFooter>
  );
}
