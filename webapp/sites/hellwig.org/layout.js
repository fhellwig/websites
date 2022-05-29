import styled from 'styled-components';

export const PageContent = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  row-gap: 1em;
  column-gap: 1em;
  padding: 2px;
`;

export const PageItem = styled.div`
display: "inline-block"
  xpadding: 1em;
  xmargin: 1em;
`;

export const PageBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Card = styled.div`
  background-color: white;
  border: solid 1px #909090;
  border-radius: 10px;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 1em;
`;

export const CardHeader = styled.div`
  border-bottom: solid 1px;
  font-weight: 500;
  font-size: 1.1em;
  margin-bottom: 5px;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-top: 10px;
`;
