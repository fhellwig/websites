import styled from 'styled-components';

export const Page = styled.div`
  hight: 100%;
`;

export const PageHeader = styled.div`
  background-color: DodgerBlue;
  font-size: 2em;
  color: white;
  line-height: 2em;
  text-align: center;
  font-weight: 500;
`;

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
  xpadding: 1em;
  xmargin: 1em;
`;

export const PageBreak = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Card = styled.div`
  border: solid 1px #909090;
  border-radius: 10px;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const CardHeader = styled.div`
  border-bottom: solid 1px;
  font-weight: 500;
  font-size: 1.1em;
  padding-bottom: 5px;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-top: 10px;
`;
