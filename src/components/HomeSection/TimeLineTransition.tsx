import { Slide } from '@mui/material';
import { TimeLine } from './TimeLine';

interface Props {
  darkMode: boolean;
}

/**
 * Ref: https://mui.com/material-ui/transitions/#slide
 */
export const TimeLineTransition = (props: Props) => {
  const { darkMode } = props;

  return (
    <>
      <Slide direction="down" in={true} timeout={3000} mountOnEnter unmountOnExit>
        {TimeLine({ darkMode })}
      </Slide>
    </>
  );
};
