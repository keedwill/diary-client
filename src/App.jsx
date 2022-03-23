import React from "react";
import { Container, AppBar, Grid, Typography, Grow } from "@material-ui/core";
import stories from "./images/stories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Prince Diary
        </Typography>
        <img src={stories} alt="stories" height="60" />
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
