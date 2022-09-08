import { useState, Dispatch, SetStateAction } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { VariantType, useSnackbar } from 'notistack';
import { Menu, Brightness7, Brightness4, GitHub, LinkedIn } from '@mui/icons-material';
import { LogoAnimation } from './HomeSection/LogoAnimation';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

/**
 * Adapted from MUI.
 * Ref: https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
 */
export const NavBar = (props: Props) => {
  const { darkMode, setDarkMode } = props;
  const drawerWidth = 240;
  const navItems = [
    {
      buttonName: 'Home',
      buttonRoute: '/home',
    },
    {
      buttonName: 'Skills',
      buttonRoute: '/skills',
    },
    {
      buttonName: 'Projects',
      buttonRoute: '/projects',
    },
    {
      buttonName: 'Contact',
      buttonRoute: '/contact',
    },
  ];
  const [mobileOpen, setMobileOpen] = useState(false);
  const path = useLocation().pathname;
  const GITHUB_URL = 'https://github.com/AyanavaKarmakar';
  const LINKEDIN_URL = 'https://www.linkedin.com/in/ayanava-karmakar-b6ba90219/';

  const handleGitHub = () => {
    window.open(GITHUB_URL, '_blank');
  };

  const handleLinkedIn = () => {
    window.open(LINKEDIN_URL, '_blank');
  };

  /**
   * Ref: https://mui.com/material-ui/react-snackbar/#notistack
   * variant could be success, error, warning, info, or default
   */
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (variant: VariantType) => () => {
    handleDarkModeToggle();
    enqueueSnackbar(
      `The theme has been set to ${darkMode === true ? 'default' : 'experimental'}!`,
      { variant }
    );
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(initialState => !initialState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <IconButton
          sx={{ ml: 1 }}
          /**
           * ! variants are reversed
           * ! since the darkMode state changes after clicking
           */
          onClick={handleClickVariant(`${darkMode === true ? 'info' : 'warning'}`)}
          color="inherit"
        >
          {darkMode === true ? <Brightness7 /> : <Brightness4 color="secondary" />}
        </IconButton>
        {navItems.map(item => (
          <ListItem key={item.buttonName} disablePadding>
            <ListItemButton
              component={Link}
              to={item.buttonRoute}
              key={item.buttonName}
              sx={{ textAlign: 'center' }}
            >
              <ListItemText primary={item.buttonName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid container columns={8} columnSpacing={1} direction={'column'}>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" position="sticky">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Menu fontSize="large" />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <LogoAnimation darkMode={darkMode} />
            </Typography>
            {/**
             * Social links:
             */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ mx: 50, textAlign: 'center' }}
            >
              <IconButton onClick={handleGitHub}>
                <GitHub fontSize="large" color={darkMode === true ? 'inherit' : 'secondary'} />
              </IconButton>
              <IconButton onClick={handleLinkedIn}>
                <LinkedIn fontSize="large" color={darkMode === true ? 'inherit' : 'secondary'} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(item => (
                <Button
                  component={Link}
                  to={item.buttonRoute}
                  key={item.buttonName}
                  variant={path === item.buttonRoute ? 'outlined' : 'text'}
                  color={path === item.buttonRoute ? 'secondary' : 'inherit'}
                  size="large"
                  sx={{ color: `${darkMode === true ? '#ffffff' : '#E0FFFF'}` }}
                >
                  {item.buttonName}
                </Button>
              ))}
              <IconButton
                sx={{ ml: 1 }}
                /**
                 * ! variants are reversed
                 * ! since darkMode state changes after click
                 */
                onClick={handleClickVariant(`${darkMode === true ? 'info' : 'warning'}`)}
                color="inherit"
              >
                {darkMode === true ? <Brightness7 /> : <Brightness4 color="secondary" />}
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              /**
               * Better open performance on mobile.
               */
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </Grid>
  );
};
