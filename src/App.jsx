import React from "react";
import { Container, AppBar, Grid, Typography, Grow } from "@material-ui/core";
import stories from "./images/stories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import useStyles from './styles'

const App = () => {
  const classes = useStyles()
  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Prince Diary
        </Typography>
        <img className={classes.image} src={stories} alt="stories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            spacing={3}
            alignItems="stretch"
          >
            <Grid item xs={12} sm={7}><Posts/></Grid>
            <Grid item xs={12} sm={4}><Form /></Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
