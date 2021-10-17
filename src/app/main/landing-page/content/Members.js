import React, { useState, useEffect } from "react";
import { Typography, Card, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getListMember } from "../../../state/action-creator/MemberActions";
import ShowMembers from "./ShowMembers";

const Members = () => {
  const dispatch = useDispatch();
  const { getListMemberSuccess, getListMemberError, getListMemberLoading } =
    useSelector((state) => state.member);
  const [displayMember, setDisplayMember] = useState(false);

  useEffect(() => {
    dispatch(getListMember());
  }, [dispatch]);

  return (
    <Card>
      <div className="p-4 bg-gray-300 flex">
        <div className="h-20 w-20 rounded-full bg-gray-500"></div>
        <div className="mx-4 flex flex-col justify-around w-60">
          <Typography variant="h5">Organizers</Typography>
          <div className="flex justify-between">
            <Typography>
              {" "}
              You{" "}
              {getListMemberSuccess
                ? `and ${parseInt(getListMemberSuccess.count) - 1} Others`
                : ""}
            </Typography>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={() => setDisplayMember(!displayMember)}
          >
            {!displayMember ? 'Show Member' : 'Hide'}
          </Button>
        </div>
      </div>
      {displayMember ? (
        <ShowMembers
          member={getListMemberSuccess}
          loading={getListMemberLoading}
          error={getListMemberError}
        />
      ) : null}
    </Card>
  );
};

export default Members;
