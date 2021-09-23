import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import LandingPage from './landing-page/LandingPage';
import CreateMeetupsPage from './landing-page/CreateMeetups';
import ExplorePage from './landing-page/Explore';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



const LinkTabs = (props) => {
  const { link, label, activeLink } = props;
  return (
    <div className="p-6 hover:text-blue-400 transition-all ease-in-out duration-300">
      <NavLink exact to={link} activeClassName={activeLink} >
        <Typography
          variant="h6"
        >
          {label}
        </Typography>
      </NavLink>
    </div>
  )
}

LinkTabs.propTypes = {
  link: PropTypes.isRequired,
  activeLink: PropTypes.string,
  label: PropTypes.isRequired,
};

const Main = () => {
  const classes = useStyles();
 

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="fixed" color="default">
          <div className="flex flex-row">
            <LinkTabs link="/" label="HOME" activeLink="text-blue-500" />
            <LinkTabs link="/create-meetups" label="CREATE MEETUPS" activeLink="text-blue-500" />
            <LinkTabs link="/explore" label="EXPLORE" activeLink="text-blue-500" />
          </div>
        </AppBar>
        <Switch>
          <div className="mt-28 mx-6">
            <Route exact path="/" component={LandingPage} />
            <Route path="/create-meetups" component={CreateMeetupsPage} />
            <Route path="/explore" component={ExplorePage} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;