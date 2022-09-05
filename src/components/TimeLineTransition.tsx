import { Box, FormControlLabel, Switch, Slide } from '@mui/material';
import { useState } from 'react';
import { TimeLine } from './TimeLine';

interface Props {
  darkMode: boolean;
}

/**
 * Ref: https://mui.com/material-ui/transitions/#slide
 */
export const TimeLineTransition = (props: Props) => {
  const { darkMode } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(prev => !prev);
  };

  return (
    <Box sx={{ height: 180 }}>
      <Box sx={{ width: `calc(100px + 16px)` }}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Show"
        />
        <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
          <TimeLine darkMode={darkMode} />
        </Slide>
      </Box>
    </Box>
  );
};
