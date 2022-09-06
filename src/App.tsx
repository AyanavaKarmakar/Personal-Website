import { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { LandingPageLoadingAnimation } from './components/LandingPageLoadingAnimation';
import { ForceDesktop } from './components/ForceDesktop';

/**
 * Adapted from MUI.
 * Ref: https://mui.com/material-ui/customization/dark-mode
 */
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  let [isViewedOnDesktop, setIsViewedOnDesktop] = useState(false);

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

  /**
   * Checks if the site is being viewed
   * in dektop or mobile
   */
  const userDeviceDetails = navigator.userAgent;

  /**
   * Creating a regular expression
   * containing some mobile devices keywords
   * to search it in details string
   */
  const regexp = /android|iphone|kindle|ipad/i;
  const isMobileDevice: boolean = regexp.test(userDeviceDetails);

  useEffect(() => {
    if (isMobileDevice === true) {
      console.log('Mobile');
    } else if (isMobileDevice === false) {
      console.log('Desktop');
      setIsViewedOnDesktop(true);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<LandingPageLoadingAnimation />} />
        <Route
          path="/home"
          element={
            isViewedOnDesktop === true ? (
              <>
                <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Home darkMode={darkMode} />
              </>
            ) : (
              <ForceDesktop />
            )
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
