import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Card } from '@material-ui/core';



const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};


const LandingPage = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="QTemu" {...a11yProps(0)} />
          <Tab label="Create Meetup" {...a11yProps(1)} />
          <Tab label="Explore" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card className="flex">
          <div className="w-40 h-40 m-4 bg-gray-500"></div>
          <div className="flex flex-col my-4 justify-around">
            <Typography
              variant="h4"
            >
              Hacktiv8 Meetup
            </Typography>
            <div className="flex flex-col justify-around">
              <Typography>
                Location
              </Typography>
              <Typography>
                Members
              </Typography>
              <Typography>
                Organizers
              </Typography>
            </div>

            <Button
              className="self-start"
              variant="contained"
              color="primary"
            >
              Join Us
            </Button>
          </div>
        </Card>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Create Meetup
      </TabPanel>
      <TabPanel value={value} index={2}>
        Explore
      </TabPanel>
    </div>
  );
}

export default LandingPage;