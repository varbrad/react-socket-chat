require('dotenv').config();
const mri = require('mri');
const server = require('http').createServer();
const io = require('socket.io')(server);

// Get command line arguments
const args = mri(process.argv.slice(2));

// Get host and port from env file
const HOST = process.env.SERVER_HOST;
const PORT = process.env.SERVER_PORT;

const message_log = [];

io.on('connection', client => {
  // Hydrate this client
  client.emit('hydrate', message_log);
  // Emit an event to say a client has joined
  client.broadcast.emit('update', 'Connected: ' + client.id);

  // Handle if this client sends a message
  client.on('send', message => {
    const output = client.id + ' posted: ' + message;
    io.emit('update', output);
    message_log.push(output);
  });
});

// Event for when server succesfully starts
server.on('listening', () => {
  console.log(`> Server started at ${HOST}:${PORT}`);
});

server.listen(PORT, HOST);
