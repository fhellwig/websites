import { Header, Heading } from 'grommet';

export function PageHeader() {
  return (
    <Header
      fill="horizontal"
      direction="column"
      background="brand"
      height="xsmall"
      justify="center"
      align="center"
    >
      <Heading level="1" size="small">
        Frank Hellwig &mdash; Solution Architect
      </Heading>
    </Header>
  );
}
