import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {
  Typography,
  Card
} from '@material-ui/core';

const Members = () => {

  const [datas, setDatas] = useState([]);
  const [totalDatas, setTotalDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      setDatas(response.data.results);
      setTotalDatas(response.data.count);
    })
    .catch((error) => {
      console.log(error);
      setDatas([]);
      setLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, []);

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
              {datas.length !== 0 ?
               datas[0].name : '-'}
            </Typography>
            <Typography>
              And {parseInt(totalDatas) - 1} Others
            </Typography>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Members;
