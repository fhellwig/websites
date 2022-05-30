import { Header, Text } from 'grommet';
import React from 'react';

function HeaderText({ children, ...rest }) {
  return (
    <Text
      size="xxlarge"
      weight={500}
      margin={{ left: 'medium', right: 'medium' }}
      style={{ whiteSpace: 'nowrap' }}
      {...rest}
    >
      {children}
    </Text>
  );
}

export function PageHeader() {
  return (
    <Header
      flex={false}
      background="brand"
      justify="center"
      wrap
      pad={{
        vertical: 'small'
      }}
    >
      <HeaderText a11yTitle="Name">Frank Hellwig</HeaderText>
      <HeaderText a11yTitle="Role">Solution Architect</HeaderText>
    </Header>
  );
}
