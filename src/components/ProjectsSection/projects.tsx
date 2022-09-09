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

interface ProjectListTypes {
  projectTitle: string;
  projectDescription: string;
  projectImage: string;
  altProjectImageText: string;
  projectButtonText: string;
}

export const Projects = () => {
  const projectsList = [
    {
      projectTitle: 'Lizard',
      projectDescription:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      projectImage:
        'https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b',
      altProjectImageText: 'green iguana',
      projectButtonText: 'Share',
    },
  ];

  return (
    <Grid container sx={{ my: 2, mx: 2 }}>
      {projectsList.map((project: ProjectListTypes) => {
        const {
          projectTitle,
          projectDescription,
          projectImage,
          altProjectImageText,
          projectButtonText,
        } = project;

        return (
          <Card sx={{ maxWidth: 345 }} key={projectTitle}>
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
              <Button size="small" color="primary">
                {projectButtonText}
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Grid>
  );
};
