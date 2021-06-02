const net = require("net");

// establishes a connection with the game server
const connect = function() {
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
    //  setInterval(() => {
    //  conn.write('Move: up');
    //  }, 50);
  });

  // "Move: up" - move up one square (unless facing down)
  // "Move: down" - move down one square (unless facing up)
  // "Move: left" - move left one square (unless facing right)
  // "Move: right" - move left one square (unless facing left)

  conn.on("data", (data) => {
    console.log('server says:', data);
  });
  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;