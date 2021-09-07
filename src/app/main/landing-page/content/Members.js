import {
  Typography,
  Card
} from '@material-ui/core';

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

export default Members;
