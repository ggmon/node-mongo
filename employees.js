const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const models = require('./employee.model');

router.get('/', (req, res) => {
  models.Employee.find((err, docs) => {
    if (!err) {
      res.json(docs);
      return;
    }
    res.json({});
  })
})

router.post('/', (req, res) => {
  const emp =  models.Employee(req.body);
  emp.save((err, doc) => {
    console.log(err)
    console.log(doc)
  })
  res.json({});
})

router.put('/:employee_id', (req, res) => {
  models.Employee.updateOne({
    _id: req.params.employee_id
  }, req.body, (err, doc) => {
    console.log(err)
    console.log(doc)
  })
  res.json({});
})

router.delete('/:employee_id', (req, res) => {
  models.Employee.deleteOne({
    _id: req.params.employee_id
  },(err,doc) => {
    console.log(err)
    console.log(doc)
  })
  res.json({});
})

module.exports = router;
