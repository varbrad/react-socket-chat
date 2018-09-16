const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', client => {
  console.log('Connected client')
})

server.listen(1235)