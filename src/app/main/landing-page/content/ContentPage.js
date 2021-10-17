import {
  Typography,
} from '@material-ui/core';

const ContentPage = (props) => {
  const { children, value } = props;

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