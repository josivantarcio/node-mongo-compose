const express = require('express');
const restful = require('node-restful');
const server = express();
const mongoose = restful.mongoose;

// Database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://db/mydb', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Test route
server.get('/', (req, res, next) => res.send('Backend!'));

// Start server
server.listen(3000, () => {
   console.log('Server is running on port 3000');
});
