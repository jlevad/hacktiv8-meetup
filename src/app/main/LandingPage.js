import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Card } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

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

const Banner = (props) => {
  return (
    <Card>
      <div className="flex bg-gray-300">
        <div className="w-40 h-40 m-4 bg-gray-500"></div>
        <div className="flex flex-col my-4 justify-around">
          <Typography
            variant="h4"
          >
            Hacktiv8 Meetup
          </Typography>
          <div className="flex flex-col justify-around">
            <div className="grid grid-cols-2">
              <Typography>
                Location
              </Typography>
              <Typography>
                {props.location}
              </Typography>
              <Typography>
                Member
              </Typography>
              <Typography>
                {props.members}
              </Typography>
              <Typography>
                Organizer
              </Typography>
              <Typography>
                {props.organizer}
              </Typography>
            </div>
          </div>

          <Button
            className="self-start"
            variant="contained"
            color="primary"
          >
            Join Us
          </Button>
        </div>
      </div>
    </Card>
  )
}
const PastMeetups = (props) => {

  return (
    <Card className="mx-6">
      <div className="flex bg-gray-300 flex-col p-4">
        <Typography>
          {props.date}
        </Typography>
        <Divider variant="middle" />
        <Typography>
          {props.content}
        </Typography>
        <Typography>
          <b>{props.visitor}</b> went
        </Typography>
        <div className="self-start mt-8">
          <Button
            variant="contained"
            color="primary"
          >
            View
          </Button>
        </div>
      </div>
    </Card>
  )
}

const Content = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div className="pt-4">
      <Typography
        variant="h4"
      >
        {value}
      </Typography>
      <div className="m-4">
        {children}
      </div>
    </div>
  )
}

const MeetupContent = () => {
  return (
    <Card>
      <div className="p-4 bg-gray-300">
        <Typography>
          Awesome meetup and event
        </Typography>
        <Typography
          variant="subtitle2"
        >
          25 Januari 2019
          <br />
        </Typography>
        <Typography
        >
          Hello, Javascript & Node.js Ninjas! <br />
          Get ready for our montly meetup JakartaJS! this will be our fifth meetup of 2018! <br />
          The meetup format will contain some sort stories and technical task. <br />
          If you have a short announcement you'd like to share with audience, you may so during open mic announcements. <br />
          <br />
          Remember to bring a photo ID to get through building security.
          <br />
          ----- <br />
          see you there! <br />
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </Typography>
      </div>
    </Card>
  )
}
const Members = () => {
  return (
    <Card>
      <div className="p-4 bg-gray-300 flex">
        <div className="h-20 w-20 rounded-full bg-gray-500">
        </div>
        <div className="mx-4 flex flex-col justify-around w-60">
          <Typography
            variant="h5"
          >
            Organizers
          </Typography>
          <div className="flex justify-between">
            <Typography>
              Adhy Wiranata
            </Typography>
            <Typography>
              4 Others
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

const AboutContent = () => {
  return (
    <div className="p-4">
      <Typography>
        Come and meet other developers interested in the Javascript and it's library in the Greater Jakarta area. <br /> <br />
        Twitter: @JakartaJS and we use the hastag #jakartajs
      </Typography>
    </div>
  )
}

const FooterPage = () => {
  return (
    <div className="w-full mt-10">
      <Divider />
      <div className="m-20">
        <Typography
          align="center"
        >
          Copyright Hacktiv8 2018
        </Typography>
      </div>
    </div>
  )
}


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
        <Banner location="Jakarta, Indonesia" members="1,078" organizer="Adhy Wiranata" />
        <Content
          value="Next Meetup"
        >
          <MeetupContent />
        </Content>
        <Content
          value="About Meetup"
        >
          <AboutContent />
        </Content>
        <Content
          value="Members"
        >
          <Members />
        </Content>
        <Content
          value="Past Meetups"
        >
          <div className="grid grid-cols-3">
            <PastMeetups
              date="27 November 2017"
              content="#39 Jakarta Js April Meetup with kumparan"
              visitor="139"
            />
            <PastMeetups
              date="27 Oktober 2017"
              content="#38 Jakarta Js April Meetup with Blibli"
              visitor="113"
            />
            <PastMeetups
              date="27 November 2017"
              content="#39 Jakarta Js April Meetup with Hacktiv8"
              visitor="110"
            />
          </div>
        </Content>
        <FooterPage />
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