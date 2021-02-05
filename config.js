
const fs = require('fs');
const path = require('path');

if (process.env.NODE_ENV != 'PRODUCTION') {
  require('dotenv').config();
}

let serverConf;
fs.readFile(path.join(__dirname, '/config.json'), (err, data) => {
  if (err) {
    throw err;
  } else {
    serverConf = JSON.parse(data).servers;
  }
});

module.exports = {
  serverConf: serverConf, env: process.env.NODE_ENV, port: process.env.PORT || 4004
};