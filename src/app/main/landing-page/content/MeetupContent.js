import {
  Typography,
  Card
} from '@material-ui/core';

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

export default MeetupContent;
