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
} from '@mui/material';
import { Menu, Brightness7, Brightness4, GitHub, LinkedIn } from '@mui/icons-material';
import { LogoAnimation } from './LogoAnimation';
import { SnackBarComponent } from './SnackBarComponent';
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
  const [activateSnackDownComponent, setActivateSnackDownComponent] = useState<boolean>(false);
  const path = useLocation().pathname;

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function handleDarkModeToggle() {
    setDarkMode(initialState => !initialState);
  }

  function handleSnackBarComponent() {
    setActivateSnackDownComponent(initialState => !initialState);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            handleDarkModeToggle();
            handleSnackBarComponent();
          }}
          color="inherit"
        >
          {darkMode === true ? <Brightness7 /> : <Brightness4 />}
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
    <>
      <>
        {
          <SnackBarComponent
            darkMode={darkMode}
            activateSnackDownComponent={activateSnackDownComponent}
          />
        }
      </>
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
             * Put social links here
             */}
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
                onClick={() => {
                  handleDarkModeToggle();
                  handleSnackBarComponent();
                }}
                color="inherit"
              >
                {darkMode === true ? <Brightness7 /> : <Brightness4 />}
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
    </>
  );
};
