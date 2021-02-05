
// imports

const config = require('./config');

const express = require('express'),
  app = express(),
  PORT = config.port;

const parser = require('body-parser');
const http = require('http');
const path = require('path');

const mcs = require('./mcs');
const kitGenerator = require('./kitGenerator');

// declarations

const creative = mcs(config.serverConf.creative, kitGenerator.creative);
const peaceful = mcs(config.serverConf.peaceful, kitGenerator.peaceful);

app.use(parser.json());

app.route('/')
  .get((req, res) => res.send({'answer': 'you found it!'}));

app.route('/mcs/creative')
  .get((req, res) => res.send({'answer': 'creative'}));

app.route('/mcs/peaceful')
  .get((req, res) => res.send({'answer': 'peaceful'}));

// create http-server

const server = http.createServer(app);

// functions

function startMCSs() {
  creative.start();
  peaceful.start();
}

// start the server

server.listen(PORT, () => {
  console.log(`MCS Kettula running on port ${PORT}`);
  startMCSs();
});