import { Footer, Text } from 'grommet';
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

export function PageFooter() {
  return (
    <Footer
      flex={false}
      background="brand"
      justify="center"
      pad={{
        vertical: 'small'
      }}
    >
      <Text a11yTitle="Contact">
        Please contact me via <a href="tel:5712076308">phone</a> or{' '}
        <a href="mailto:frank@hellwig.org">email</a>.
      </Text>
    </Footer>
  );
}
