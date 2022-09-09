import { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/HomeSection/index';
import { Skills } from './components/SkillsSection/index';
import { Projects } from './components/ProjectsSection/index';
import {
  NavBar,
  LandingPageLoadingAnimation,
  ForceDesktopUnloading,
} from './components/Utils/index';

/**
 * Adapted from MUI.
 * Ref: https://mui.com/material-ui/customization/dark-mode
 */
export const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isViewedOnDesktop, setIsViewedOnDesktop] = useState(false);

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
    if (isMobileDevice === false) {
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
              <ForceDesktopUnloading
                isViewedOnDesktop={isViewedOnDesktop}
                setIsViewedOnDesktop={setIsViewedOnDesktop}
              />
            )
          }
        />
        <Route
          path="/skills"
          element={
            isViewedOnDesktop === true ? (
              <>
                <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Skills darkMode={darkMode} />
              </>
            ) : (
              <ForceDesktopUnloading
                isViewedOnDesktop={isViewedOnDesktop}
                setIsViewedOnDesktop={setIsViewedOnDesktop}
              />
            )
          }
        />
        <Route
          path="/projects"
          element={
            isViewedOnDesktop === true ? (
              <>
                <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
                <Projects />
              </>
            ) : (
              <ForceDesktopUnloading
                isViewedOnDesktop={isViewedOnDesktop}
                setIsViewedOnDesktop={setIsViewedOnDesktop}
              />
            )
          }
        />
        <Route path="/contact" element={<NavBar darkMode={darkMode} setDarkMode={setDarkMode} />} />
      </Routes>
    </ThemeProvider>
  );
};
