import { useState } from 'react';
import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Restore, Favorite, LocationOn, Folder } from '@mui/icons-material';

/**
 * Refer = https://mui.com/material-ui/react-bottom-navigation/#bottom-navigation
 */
export const Footer = () => {
  const [value, setValue] = useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box justifyContent="center" alignItems="center" minHeight="100vh" minWidth="100vw">
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOn />} />
        <BottomNavigationAction label="Folder" value="folder" icon={<Folder />} />
      </BottomNavigation>
    </Box>
  );
};
