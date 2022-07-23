import styled from 'styled-components';
import { Content } from './bulma.js';
import trust from './positivessl.png';

const StyledFooter = styled.footer`
  height: 70px;
  line-height: 70px;
  text-align: center;
  color: white;
  background-color: cornflowerblue;
`;

const FooterPara = styled.p`
  margin-right: 1em;
`;

const FooterImg = styled.img`
  float: right;
  margin-top: 20px;
`;

export function Footer() {
  return (
    <StyledFooter>
      <Content>
        <FooterPara>
          Please contact me via <a href="tel:5712076308">phone</a> or{' '}
          <a href="mailto:frank@hellwig.org">email</a> (Build: 220723.02)
          <FooterImg src={trust} />
        </FooterPara>
      </Content>
    </StyledFooter>
  );
}
