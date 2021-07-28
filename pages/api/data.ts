import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '../../libs/initMiddleware';

const cors = initMiddleware(
  Cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
  })
);

export default async function getData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(res, res);

  const params = req.query;

  await axios
    .get(
      `http://apis.data.go.kr/B090041/openapi/service/SpcdeInfoService/getRestDeInfo?solYear=${params.solYear}&solMonth=${params.solMonth}&ServiceKey=%2B38WhaVhWMOoUF9ImhSJLAJBcJxargI9xyzkd6c79TGqzqayO2TpJSYCdump8kI6y%2F%2Bfpupnlw94fWd%2BZnKQWg%3D%3D`
    )
    .then((json) => {
      res.send(json.data.response.body.items);
    })
    .catch(() => {
      res.send(
        JSON.stringify({
          message: 'System Error',
        })
      );
    });
}
