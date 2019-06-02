const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String
  }
}, { strict: false });

// employeeScheman.path('email', 

module.exports = {
  Employee: mongoose.model('Employee', employeeSchema)
};
