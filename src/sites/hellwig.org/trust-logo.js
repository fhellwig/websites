import styled from 'styled-components';
import trust from './positivessl.png';

const Image = styled.img`
  position: absolute;
  bottom: 25px;
  left: 5px;
`;

export function TrustLogo() {
  return <Image src={trust} />;
}
