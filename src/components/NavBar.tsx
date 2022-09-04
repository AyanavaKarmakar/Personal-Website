import { SyntheticEvent, useState, forwardRef, Dispatch, SetStateAction } from 'react';
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
  AlertProps,
  Snackbar,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { Menu, Brightness7, Brightness4 } from '@mui/icons-material';
import { LogoAnimation } from './LogoAnimation';

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
  const navItems = ['Home', 'Skills', 'Projects', 'Timeline', 'Contact'];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  function handleDarkModeToggle() {
    setDarkMode(initialState => !initialState);
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <IconButton
          sx={{ ml: 1 }}
          onClick={() => {
            handleDarkModeToggle();
            handleClick();
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

  /**
   * Ref: https://mui.com/material-ui/react-snackbar/#customization
   */
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
  }

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
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
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => {
                handleDarkModeToggle();
                handleClick();
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
            keepMounted: true, // Better open performance on mobile.
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
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          {`Dark Mode Has Been Turned ${darkMode === true ? 'On' : 'Off'}!`}
        </Alert>
      </Snackbar>
    </Box>
  );
};
