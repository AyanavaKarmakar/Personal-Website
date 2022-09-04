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
import { Menu, Brightness7, Brightness4 } from '@mui/icons-material';
import { LogoAnimation } from './LogoAnimation';
import { SnackBarComponent } from './SnackBarComponent';

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
  const navItems = ['Home', 'Skills', 'Projects', 'Contact'];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activateSnackDownComponent, setActivateSnackDownComponent] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
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
              <LogoAnimation />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map(item => (
                <Button key={item} color="secondary">
                  {item}
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
