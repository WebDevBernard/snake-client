const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // connect
  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write('Name: BY');
  });

  conn.on("data", (data) => {
    console.log('server says:', data);
  });
  return conn;
};

module.exports = {connect};