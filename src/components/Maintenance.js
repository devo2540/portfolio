import './maintenance.css'
import React from 'react';
import {
  Typography,
  Grid,
  Paper
} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

const Maintenance = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={8}>
        <Paper
          elevation={12}
          style={{ padding: "3rem", backgroundColor: "" }}
        >
          <Typography align="center" variant="h6">
            A better site is on the way
          </Typography>
          <Typography align="center" variant="body1">
            In the meantime, feel free to join me on social media!
          </Typography>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="center"
            style={{ paddingTop: "2rem" }}
          >
            <a
              name="twitter"
              href="https://twitter.com/TheDevoCarter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon fontSize="large" />
            </a>

            <a
              name="linkedin"
              href="https://www.linkedin.com/in/thedevincarter/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" />
            </a>

            <a
              name="github"
              href="https://github.com/devo2540"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
 
export default Maintenance;