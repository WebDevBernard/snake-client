const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",// IP address here,
    port: 50542// PORT number here,
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

console.log("Connecting ...");
connect();

module.exports = connect;