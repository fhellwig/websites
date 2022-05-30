import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 70px;
  color: white;
  background-color: #228be6;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 1.5em;
    font-weight: 500;
    xmargin-left: 1em;
    xmargin-right: 1em;
  }
`;

export function Header() {
  return (
    <StyledHeader>
      <span>Frank Hellwig</span>
      <span>Solution Architect</span>
    </StyledHeader>
  );
}
