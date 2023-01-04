const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// import and configure dotenv
require('dotenv').config()

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// disable x-powered-by headers.
app.disable('x-powered-by');

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining endpoints
app.get('/', (req, res) => {
  res.send({ status: true });
});

// starting the server
app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
});