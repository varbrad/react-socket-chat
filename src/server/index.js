import dotenv from 'dotenv';
// import mri from 'mri';
import http from 'http';
import socketIO from 'socket-io';

dotenv.config();

const server = http.createServer();
const io = socketIO(server);

// Get command line arguments
// const args = mri(process.argv.slice(2));

// Get host and port from env file
const { SERVER_HOST, SERVER_PORT } = process.env;

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
  console.log(`> Server started at ${SERVER_HOST}:${SERVER_PORT}`);
});

server.listen(SERVER_HOST, SERVER_PORT);
