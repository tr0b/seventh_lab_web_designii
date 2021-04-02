const express = require('express');

const router = express.Router();

// Models
const Client = require('../models/client.js');

// [POST] New Client
router.post('/clients', async (req, res) => {
  const client = new Client(req.body);
  client.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send({ err: e.message }));
});

// [GET] All Clients
router.get('/clients', async (req, res) => {
  const clients = await Client.find();
  res.status(200).json(clients);
});

// [GET] Client by _id
router.get('/clients/:id', async (req, res) => {
  const client = await Client.find({ _id: req.params.id })
    .then(() => res.status(200).send(client))
    .catch((e) => res.status(404).send({ err: e.message }));
});

// [DELETE] Client
router.delete('/clients/:id', async (req, res) => {
  const { id } = req.params;
  await Client.deleteOne({ _id: id })
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

// [PUT] Client
router.put('/clients/:id', async (req, res) => {
  const { id } = req.params;
  await Client.updateOne({ _id: id }, req.body)
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

module.exports = router;
