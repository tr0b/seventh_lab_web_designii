const express = require('express');

const router = express.Router();

// Models
const Bus = require('../models/bus');
const Client = require('../models/client')

// [POST] New Bus
router.post('/buses', async (req, res) => {
  const bus = new Bus(req.body);
  console.log(bus);
  bus.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send({ err: e.message }));
});

// [GET] All Buses
router.get('/buses', async (req, res) => {
  const buses = await Bus.find().populate('clients');
  res.status(200).json(buses);
});

// [GET] Bus by _id
router.get('/buses/:id', async (req, res) => {
  const bus = await Bus.find({ _id: req.params.id }).populate('clients')
    .then(() => res.status(200).send(bus))
    .catch((e) => res.status(404).send({ err: e.message }));
});

// [DELETE] Bus
router.delete('/buses/:id', async (req, res) => {
  const { id } = req.params;
  await Bus.deleteOne({ _id: id })
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

// [PATCH] Bus
router.patch('/buses/:id', async (req, res) => {
  const { id } = req.params;
  if (req.body.clients.length > 20) {
    return res.status(500).send({ err: 'A maximum of 20 clients are allowed per bus' });
  }
  return Bus.updateOne({ _id: id }, req.body)
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

module.exports = router;
