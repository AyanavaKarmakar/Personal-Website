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

  const handleClick = () => {
    setChecked(prev => !prev);
  };

  return (
    <>
      <button onClick={handleClick}>button</button>
      <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
        {TimeLine({ darkMode })}
      </Slide>
    </>
  );
};
