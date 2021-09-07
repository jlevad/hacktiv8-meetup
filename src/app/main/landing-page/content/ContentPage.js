import {
  Typography,
  Card
} from '@material-ui/core';

const ContentPage = (props) => {
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

export default ContentPage;