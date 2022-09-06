import { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { LandingPage } from './components/LandingPage';

/**
 * Adapted from MUI.
 * Ref: https://mui.com/material-ui/customization/dark-mode
 */
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1F2022',
      },
      secondary: {
        main: '#E0FFFF',
      },
      mode: darkMode === true ? ('dark' as PaletteMode) : ('light' as PaletteMode),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={
            <>
              <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Home darkMode={darkMode} />
            </>
          }
        />
        <Route path="/skills" element={<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route
          path="/projects"
          element={<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/contact" element={<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </ThemeProvider>
  );
};
