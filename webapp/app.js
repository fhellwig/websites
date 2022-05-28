import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext
} from 'grommet';
import { FormClose, Notification } from 'grommet-icons';
import React, { useEffect, useState } from 'react';

const theme = {
  global: {
    colors: {
      brand: '#228Be6'
    },
    font: {
      family: 'Roboto, sans-serif',
      size: '18px',
      height: '20px'
    }
  }
};

export function App() {
  [host, setHost] = useState(null);

  useEffect(() => {
    async function getHost() {
      const res = await fetch('/host');
      const host = await res.json();
      setHost(host);
    }
    getHost();
  });

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <ResponsiveContext.Consumer>
        {(size) => <Content size={size} {...host} />}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

function Content({ size, hostname, domain }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Box fill>
      <AppBar>
        <Heading level="3" margin="none">
          My App
          <p>size: {size}</p>
        </Heading>
        <Button
          icon={<Notification />}
          onClick={() => {
            setShowSidebar(!showSidebar);
          }}
        />
      </AppBar>
      <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
        <Box flex align="center" justify="center">
          <h1>You are calling this app as {domain}</h1>
        </Box>
        {!showSidebar || size !== 'small' ? (
          <Collapsible direction="horizontal" open={showSidebar}>
            <Box
              flex
              width="medium"
              background="light-2"
              elevation="small"
              align="center"
              justify="center"
            >
              sidebar
            </Box>
          </Collapsible>
        ) : (
          <Layer>
            <Box
              background="light-2"
              tag="header"
              justify="end"
              align="center"
              direction="row"
            >
              <Button
                icon={<FormClose />}
                onClick={() => setShowSidebar(false)}
              ></Button>
            </Box>
            <Box fill background="light-2" align="center" justify="center">
              sidebar
            </Box>
          </Layer>
        )}
      </Box>
    </Box>
  );
}

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation="medium"
    style={{ zIndex: '1' }}
    {...props}
  />
);
