import {
  Typography,
  Card,
  Button,
} from '@material-ui/core';

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

export default Banner;