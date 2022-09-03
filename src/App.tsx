import { NavBar } from './components/NavBar';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { useState } from 'react';

/**
 * Adapted from MUI.
 * Ref: https://mui.com/material-ui/customization/dark-mode
 */
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#2c2c6c',
      },
      mode: darkMode === true ? ('dark' as PaletteMode) : ('light' as PaletteMode),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
};
