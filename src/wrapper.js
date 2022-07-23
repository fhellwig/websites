import styled from 'styled-components';
import { Section } from './bulma.js';

const AppWrapper = styled(Section)`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

export function Wrapper({ children }) {
  return <AppWrapper>{children}</AppWrapper>;
}
