import {
  Typography,
  Button,
  Divider,
  Card,
} from '@material-ui/core';

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

export default PastMeetups;
