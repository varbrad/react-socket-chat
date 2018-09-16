require('dotenv').config();
const mri = require('mri');
const server = require('http').createServer();
const io = require('socket.io')(server);

// Get command line arguments
const args = mri(process.argv.slice(2));

// Get host and port from env file
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

io.on('connection', client => {
  // Emit an event to say a client has joined
  io.emit('update', 'Connected: ' + client.id);
});

// Event for when server succesfully starts
server.on('listening', () => {
  console.log(`> Server started at ${HOST}:${PORT}`);
});

server.listen(PORT, HOST);
