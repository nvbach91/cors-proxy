const express = require('express');
const router = express.Router();
const axios = require('axios');

const handleException = (e, res) => {
  res.status(e.response ? e.response.status : 400).json(e.response ? e.response.data : e.message || e);
};

router.get('/test', async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    const resp = await axios.get(url);
    res.json({ url, data: resp.data });
  } catch (e) {
    handleException(e, res);
  }
});

router.get('/', (req, res) => {
  console.log('GET query', '/');
  res.json({ success: true, msg: 'See usage and documentation here: https://github.com/nvbach91/cors-proxy' });
});

router.get('/get', async (req, res) => {
  console.log('GET query', req.query.url);
  const config = {};
  if (req.get('accept')) {
    config.headers = { 'accept': req.get('accept') };
  }
  try {
    const resp = await axios.get(req.query.url, config);
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});

router.get('/:url', async (req, res) => {
  console.log('GET param', req.params.url);
  try {
    const resp = await axios.get(req.params.url);
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});


router.post('/', async (req, res) => {
  console.log('POST', req.body.url, req.body.data, req.body.headers);
  const config = {
    headers: {},
  };
  try {
    if (req.body.headers) {
      const customHeaders = JSON.parse(req.body.headers);
      Object.keys(customHeaders).forEach((key) => {
        config.headers[key] = customHeaders[key];
      });
    }
    const data = req.body.data ? JSON.parse(req.body.data) : {};
    const resp = await axios.post(req.body.url, data, config);
    res.json({ status: resp.status, data: resp.data });
  } catch (e) {
    handleException(e, res);
  }
});

router.patch('/', async (req, res) => {
  console.log('PATCH', req.body.url, req.body.data);
  try {
    const resp = await axios.patch(req.body.url, req.body.data ? JSON.parse(req.body.data) : {});
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});

router.put('/', async (req, res) => {
  console.log('PUT', req.body.url, req.body.data);
  try {
    const resp = await axios.put(req.body.url, req.body.data ? JSON.parse(req.body.data) : {});
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});

router.delete('/', async (req, res) => {
  console.log('DELETE', req.body.url);
  try {
    const resp = await axios.delete(req.body.url);
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});


module.exports = router;
