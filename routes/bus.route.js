const express = require('express');

const router = express.Router();

// Models
const Bus = require('../models/bus.js');

// [POST] New Bus
router.post('/buses', async (req, res) => {
  const bus = new Bus(req.body);
  console.log(bus);
  bus.save().then(() => res.status(201).send())
    .catch((e) => res.status(500).send({ err: e.message }));
});

// [GET] All Buses
router.get('/buses', async (req, res) => {
  const buses = await Bus.find();
  res.status(200).json(buses);
});

// [GET] Bus by _id
router.get('/buses/:id', async (req, res) => {
  const bus = await Bus.find({ _id: req.params.id })
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

// [PUT] Bus
router.put('/buses/:id', async (req, res) => {
  const { id } = req.params;
  await Bus.updateOne({ _id: id }, req.body)
    .then(() => res.send())
    .catch((e) => res.status(404).send(e.message));
});

module.exports = router;
