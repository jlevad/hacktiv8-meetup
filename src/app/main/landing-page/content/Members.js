import React, { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Card, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../../../state";

const Members = () => {
  const countMember = useSelector((data) => data.member);
  const dispatch = useDispatch();
  const { addMember }= bindActionCreators(actionCreator, dispatch);
  const [datas, setDatas] = useState([]);
  const [totalDatas, setTotalDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        setDatas(response.data.results);
        setTotalDatas(response.data.count);
      })
      .catch((error) => {
        console.log(error);
        setDatas([]);
        setLoading(false);
      });
  };

  useEffect(async () => {
    await getData();
    setLoading(false);
  }, []);

  return (
    <Card>
      <div className="p-4 bg-gray-300 flex">
        <div className="h-20 w-20 rounded-full bg-gray-500"></div>
        <div className="mx-4 flex flex-col justify-around w-60">
          <Typography variant="h5">Organizers</Typography>
          <div className="flex justify-between">
            <Typography>
              {loading
                ? "Loading...."
                : datas.length !== 0
                ? datas[0].name
                : "Data Tidak Ditemukan"}
            </Typography>
            <Typography>And {(parseInt(totalDatas) - 1) + (countMember)} Others</Typography>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={() => addMember(1)}
          >
            Add Member
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Members;
