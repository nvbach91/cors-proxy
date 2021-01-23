const express = require('express');
const router = express.Router();
const axios = require('axios');

const handleException = (e, res) => {
  res.status(e.response ? e.response.status : 400).json(e.response ? e.response.data : e.message || e);
};

router.get('/', (req, res) => {
  res.json({ success: true, msg: 'See usage and documentation here: https://github.com/nvbach91/cors-proxy' });
});

router.get('/get', async (req, res) => {
  console.log('GET query', req.query.url);
  try {
    const resp = await axios.get(req.query.url);
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
  console.log('POST', req.body.url, req.body.data);
  try {
    const resp = await axios.post(req.body.url, JSON.parse(req.body.data));
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});

router.patch('/', async (req, res) => {
  console.log('PATCH', req.body.url, req.body.data);
  try {
    const resp = await axios.patch(req.body.url, JSON.parse(req.body.data));
    res.json(resp.data);
  } catch (e) {
    handleException(e, res);
  }
});

router.put('/', async (req, res) => {
  console.log('PUT', req.body.url, req.body.data);
  try {
    const resp = await axios.put(req.body.url, JSON.parse(req.body.data));
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
