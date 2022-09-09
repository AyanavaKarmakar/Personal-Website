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
      projectTitle: 'Lizard',
      projectDescription:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      projectLink: 'https://stackoverflow.com/',
      projectImage:
        'https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b',
      altProjectImageText: 'green iguana',
      projectButtonText: 'Share',
    },
    {
      projectTitle: 'Lizard',
      projectDescription:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      projectLink: 'https://stackoverflow.com/',
      projectImage:
        'https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b',
      altProjectImageText: 'green iguana',
      projectButtonText: 'Share',
    },
    {
      projectTitle: 'Lizard',
      projectDescription:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      projectLink: 'https://stackoverflow.com/',
      projectImage:
        'https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b',
      altProjectImageText: 'green iguana',
      projectButtonText: 'Share',
    },
    {
      projectTitle: 'Lizard',
      projectDescription:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      projectLink: 'https://stackoverflow.com/',
      projectImage:
        'https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b',
      altProjectImageText: 'green iguana',
      projectButtonText: 'Share',
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
