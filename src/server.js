const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(routes());

module.exports = app;