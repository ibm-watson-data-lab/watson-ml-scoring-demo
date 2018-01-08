const cfenv = require('cfenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// load env vars
require('dotenv').config();

const api = require('./routes/api');
const app = express();
const appEnv = cfenv.getAppEnv();
const http = require('http').Server(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);

// start server on the specified port and binding host
http.listen(appEnv.port, appEnv.bind, () => {
  console.log("server starting on " + appEnv.url);
});

module.exports = app;