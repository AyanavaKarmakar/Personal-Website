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
      projectTitle: 'CatchApp',
      projectDescription:
        'Real-Time Messaging Platform built using React, getstream.io, Node.js, and Express.js. Reference: Discord.',
      projectLink: 'https://catch-app-ak.netlify.app/',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189305155-3ccbd7e7-d568-47f2-9fce-b163362156eb.png',
      altProjectImageText: 'CatchApp Project Snapshot',
      projectButtonText: 'Live Demo',
    },
    {
      projectTitle: 'Self-Driving Car',
      projectDescription:
        'Self-Driving Car using Neural Networks, and Machine Learning; built using HTML, CSS, and Javascript.',
      projectLink: 'https://main.d2uu9fdlrx4iu2.amplifyapp.com/',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189307981-83140c51-dbcf-45a4-91db-a5e0265d4f11.png',
      altProjectImageText: 'Weather App Project Snapshot',
      projectButtonText: 'Live Demo',
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
      projectTitle: 'Kloud Pad',
      projectDescription:
        'MERN Stack Application for storing personalized notes in the cloud with bycrypt hashing, and JWT authentication.',
      projectLink: 'https://github.com/AyanavaKarmakar/Kloud-Pad-Client',
      projectImage:
        'https://user-images.githubusercontent.com/89210438/189304444-ba1192f1-5314-4f00-9528-cd9ab697c8dd.png',
      altProjectImageText: 'Kloud Pad Project Snapshot',
      projectButtonText: 'GitHub',
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