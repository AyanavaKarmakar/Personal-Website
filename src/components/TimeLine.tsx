/**
 * Refer: https://mui.com/material-ui/about-the-lab/#typescript
 */
import type {} from '@mui/lab/themeAugmentation';

import Timeline from '@mui/lab/Timeline';
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Typography } from '@mui/material';
import { Code, School } from '@mui/icons-material';

/**
 * Refer: https://mui.com/material-ui/react-timeline/
 */
export const TimeLine = () => {
  return (
    <Timeline position="right">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="secondary" sx={{ fontStyle: 'italic' }}>
            August, 2022
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <Code fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="secondary" variant="h6">
            Technical Content Writer
          </Typography>
          <Typography color="secondary">GeeksForGeeks</Typography>
          <Typography color="secondary">Intern</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="secondary" sx={{ fontStyle: 'italic' }}>
            2018 — 2022
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <School fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="secondary" variant="h6">
            Undergraduate
          </Typography>
          <Typography color="secondary">MAKAUT / WBUT</Typography>
          <Typography color="secondary">Bachelor of Technology</Typography>
          <Typography color="secondary">Electrical Engineering</Typography>
          <Typography color="secondary">GPA: 8.7 / 10</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="secondary" sx={{ fontStyle: 'italic' }}>
            2017 — 2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <School fontSize="small" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="secondary" variant="h6">
            Higher Secondary
          </Typography>
          <Typography color="secondary">CBSE</Typography>
          <Typography color="secondary">Stream: PCMCs</Typography>
          <Typography color="secondary">Percentage: 87.4%</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="secondary" sx={{ fontStyle: 'italic' }}>
            2015 — 2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <School fontSize="small" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography color="secondary" variant="h6">
            Secondary
          </Typography>
          <Typography color="secondary">CBSE</Typography>
          <Typography color="secondary">GPA: 9.3 / 10</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
