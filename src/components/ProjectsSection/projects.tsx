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

export const Projects = () => {
  return (
    <Grid container sx={{ my: 2, mx: 2 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://ayanava-karmakar.imgix.net/https%3A%2F%2Fraw.githubusercontent.com%2FAyanavaKarmakar%2Fimgix-source-assets%2Fmain%2FsiteIcon.png?s=b56a16a7886aaf99f639de88c3fcdc0b"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
