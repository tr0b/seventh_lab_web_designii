// wiki.js - Wiki route module.

const express = require('express');

const router = express.Router();

// Models
const Client = require('../models/client.js');

// [POST] New Client
router.post('/clients', (req, res) => {
  const client = new Client(req.body);
  client.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send(e.message));
});

// [GET] All Clients
router.get('/clients', (req, res) => {
  res.status(200).send(Client.find());
});

// [GET] Client by _id
router.get('/clients/:id', (req, res) => {
  res.status(200).send(Client.find(req.params.id));
});

// [DELETE] Client
router.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  await Client.deleteOne({ _id: id }).then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

// [PUT] Client
router.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  await Client.updateOne({ _id: id }, req.body).then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

module.exports = router;
