const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Employee',
                 { useNewUrlParser: true },
                 (err) => {
                   if (!err) {
                     console.log('Connected!');
                   } else {
                     console.log('Failed Connecting...!');
                   }
                 })
