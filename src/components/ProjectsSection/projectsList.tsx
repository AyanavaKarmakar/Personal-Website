import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material';

interface Props {
  darkMode: boolean;
}

interface ProjectListTypes {
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
  projectImage: string;
  altProjectImageText: string;
  projectButtonText: string;
}

/**
 * Refer = https://mui.com/material-ui/react-card/#primary-action
 */
export const ProjectsList = (props: Props) => {
  const { darkMode } = props;

  const projectsList = [
    {
      projectTitle: 'CatchApp v2.0',
      projectDescription:
        'Real-time Cross-Platform Messaging App built using React Native, Expo, and Firebase. Reference: https://signal.org/en/',
      projectLink: 'https://github.com/AyanavaKarmakar/signal-clone',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/190871778-b15cf4c5-11fe-4797-8ab0-98629db91c1b.png',
      altProjectImageText: 'Signal Project Snapshot',
      projectButtonText: 'GitHub',
    },
    {
      projectTitle: 'TODOs App',
      projectDescription:
        'A mobile app to save your TODOs digitally! Supports basic CRUD operations. Built using React Native, and Expo.',
      projectLink: 'https://github.com/AyanavaKarmakar/TODOS',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189995623-4fd42b3f-1745-4ec7-a1ee-b6428bf92620.png',
      altProjectImageText: 'TODOs App Project Snapshot',
      projectButtonText: 'Github',
    },
    {
      projectTitle: 'Weather App',
      projectDescription:
        'Simple Weather App built using HTML, CSS, Javascript, Unsplash Image API, and OpenWeather API.',
      projectLink: 'https://main.d28jun6e20cb3m.amplifyapp.com/',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189307211-b8d6d110-9c0c-4ce3-a165-70a32857a6d2.png',
      altProjectImageText: 'Weather App Project Snapshot',
      projectButtonText: 'Live Demo',
    },
    {
      projectTitle: 'CatchApp',
      projectDescription:
        'Real-Time Messaging Platform built using React, getstream.io, Node.js, and Express.js. Reference: https://discord.com/',
      projectLink: 'https://catch-app-ak.netlify.app/',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189305155-3ccbd7e7-d568-47f2-9fce-b163362156eb.png',
      altProjectImageText: 'CatchApp Project Snapshot',
      projectButtonText: 'Live Demo',
    },
  ];

  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '85vh' }}
    >
      {projectsList.map((project: ProjectListTypes) => {
        const {
          projectTitle,
          projectDescription,
          projectLink,
          projectImage,
          altProjectImageText,
          projectButtonText,
        } = project;

        return (
          <Card sx={{ maxWidth: 250, mx: 5 }} key={projectTitle}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={projectImage}
                alt={altProjectImageText}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {projectTitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {projectDescription}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                color={`${darkMode === true ? 'secondary' : 'primary'}`}
                variant="outlined"
                href={projectLink}
                target="_blank"
                fullWidth
              >
                {projectButtonText}
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
