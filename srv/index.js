import express from 'express';
import kladrApi from 'kladrapi-for-node';
import cors from 'cors';


const Kladr = new kladrApi();

function getKladrInfo(query) {
  return new Promise(resolve => {
    Kladr.getData({
          query,
          contentType: 'city',
          withParent: 0
        },
        (err, result) => resolve(result || err));
  });
}

export default (app, http) => {
  app.use(express.json());
  app.use(cors());

  app.get('/kladr-api', async (req, res) => {
    const result = await getKladrInfo(req.query.query);
    res.json(result);
  });

}
