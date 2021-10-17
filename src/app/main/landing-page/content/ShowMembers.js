import { Typography } from "@material-ui/core";

const ShowMembers = (props) => {
  return (
    <div>
      {props.member
        ? props?.member?.results.map((value) => (
            <Typography>{value.name}</Typography>
          ))
        : <Typography>Data tidak ditemukan</Typography>}
    </div>
  );
};

export default ShowMembers;
