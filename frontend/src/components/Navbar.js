import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import propTypes from 'prop-types';

import {AppBar, Toolbar, Typography, makeStyles, Link} from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      toolbarTitle: {
        flexGrow: 1,
      },
    link: {
        margin: theme.spacing(1, 1.5),
      },
    })
) 

const Navbar = ({auth : {isAuthenticated, loading}, logout }) => {

    const classes = useStyles();

    const guestLinks = (<Fragment>
                        <Button href="/signup/student" color="primary" variant="outlined" className={classes.link}>SignUp</Button>
                        <Button href="/login" color="primary" variant="outlined" className={classes.link}>Login</Button>
                        </Fragment>);

    const authLinks = (<Fragment>
                            <Button color="primary" variant="outlined" onClick={logout} href="/">Log Out</Button>
                        </Fragment>);

    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <Link href="/">Web App Name</Link>
          </Typography>
          <nav>
            { !isAuthenticated &&   
            (<Fragment><Link variant="button" color="textPrimary" href="#" className={classes.link}>
              For Business
            </Link>
            <Link variant="button" color="textPrimary" href="/signup/teacher" className={classes.link}>
              Sign in as Teacher
            </Link></Fragment>)}
          </nav>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </Toolbar>
      </AppBar>
    )
}

Navbar.propTypes = {
    logout : propTypes.func.isRequired,
    auth : propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth : state.auth,
});

export default connect(mapStateToProps, {logout})(Navbar);
