const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  res.json({ success: true, msg: 'See also https://github.com/nvbach91/cors-proxy' });
});

router.get('/:url', async (req, res) => {
  console.log('GET', req.params.url);
  try {
    const resp = await axios.get(req.params.url);
    res.json(resp.data);
  } catch (e) {
    res.json(e.response ? e.response.data : e.message || e);
  }
});

router.post('/', async (req, res) => {
  console.log('POST', req.body.url, req.body.data);
  try {
    const resp = await axios.post(req.body.url, JSON.parse(req.body.data));
    res.json(resp.data);
  } catch (e) {
    res.json(e.response ? e.response.data : e.message || e);
  }
});

router.patch('/', async (req, res) => {
  console.log('PATCH', req.body.url, req.body.data);
  try {
    const resp = await axios.patch(req.body.url, JSON.parse(req.body.data));
    res.json(resp.data);
  } catch (e) {
    res.json(e.response ? e.response.data : e.message || e);
  }
});

router.put('/', async (req, res) => {
  console.log('PUT', req.body.url, req.body.data);
  try {
    const resp = await axios.put(req.body.url, JSON.parse(req.body.data));
    res.json(resp.data);
  } catch (e) {
    res.json(e.response ? e.response.data : e.message || e);
  }
});

router.delete('/', async (req, res) => {
  console.log('DELETE', req.body.url);
  try {
    const resp = await axios.delete(req.body.url);
    res.json(resp.data);
  } catch (e) {
    res.json(e.response ? e.response.data : e.message || e);
  }
});


module.exports = router;
