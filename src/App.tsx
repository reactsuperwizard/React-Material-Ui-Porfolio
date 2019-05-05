import React, { useState } from 'react';
import { Box, createTheme, Stack, ThemeProvider } from '@mui/material';
import Feed from './components/Feed';
import RightBar from './components/RightBar';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import Add from './components/Add';

const App: React.FunctionComponent = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <NavBar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <SideBar setMode={setMode} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
};

export default App;
