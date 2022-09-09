import { useState, useEffect } from 'react';
import { Box, Zoom } from '@mui/material';
import { ProjectsList } from './index';

interface Props {
  darkMode: boolean;
}

/**
 * Ref = https://mui.com/material-ui/transitions/
 */
export const ProjectTransition = (props: Props) => {
  const { darkMode } = props;
  const [load, setLoad] = useState(false);

  const handleChange = () => {
    setLoad(true);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ display: 'flex' }}>
        <Zoom in={load}>{ProjectsList({ darkMode })}</Zoom>
      </Box>
    </Box>
  );
};
