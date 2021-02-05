
const ScriptServer = require('scriptserver');

const mcs = (serverConf, starterKit) => {
  const mcs = new ScriptServer({
    command: {
      prefix: '~'
    },
    core: {
      jar: 'server.jar',
      args: ['-Xmx1536M', '-Xms1536M'],
      rcon: {
        port: '25575',
        password: serverConf.password
      }
    },
    essentials: {
      motd: {
        enabled: true,
        first: `Welcome to ${serverConf.serverName}, ${player}!`,
        text: `Welcome back ${player}!`
      },
      starterKit: {
        enabled: true,
        items: starterKit,
      },
      home: {
        enabled: true,
        amount: 3
      },
      spawn: true,
      warp: {
        enabled: true,
        opOnly: false
      },
      tpa: true,
      back: true,
      day: {
        enabled: true,
        percent: 75
      },
      night: {
        enabled: true,
        percent: 25
      },
      weather: {
        enabled: true,
        percent: 35
      }
    },
  });
  mcs.use(require('scriptserver-command'));
  mcs.use(require('scriptserver-essentials'));
  mcs.use(require('scriptserver-event'));
  mcs.use(require('scriptserver-json'));
  mcs.use(require('scriptserver-util'));
  return mcs;
};

module.exports = mcs;