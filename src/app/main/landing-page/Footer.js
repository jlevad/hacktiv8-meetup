import {
  Typography,
  Divider,
} from '@material-ui/core';

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

export default FooterPage;