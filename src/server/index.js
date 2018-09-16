require("dotenv").config();
const server = require("http").createServer();
const io = require("socket.io")(server);

io.on("connection", client => {
  console.log("Connected client");
});

server.listen(process.env.SERVER_PORT);
