import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heroContent : {
        padding : theme.spacing(8,0,6)
    }
}));

function Profile() {

    const classes = useStyles();
    return (
        <React.Fragment>
      <CssBaseline />
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Welcome Guest User!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
            This is an example profile page which loads when a user logs in.
            This profile page may display different data for different users.
        </Typography>
      </Container>
    </React.Fragment>
    )
}

export default Profile;
