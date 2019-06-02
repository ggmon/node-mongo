const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const employees = require('./employees');
const db = require('./db.js');
// const employee_model = require('./employee.model');

app.use(bodyparser.urlencoded({
  extended: true
}));

app.use('/employees', employees);

app.listen(3010, () => {
  console.log('Express server startet at 3010');
})
