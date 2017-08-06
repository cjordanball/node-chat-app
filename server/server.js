const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io');

const PUBLIC_PATH = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(`${PUBLIC_PATH}`));

io.on('connection', (socket) => {
	console.log('New user connected.');

	socket.on('createMessage', (newMessage) => {
		console.log('createEmail', newMessage);
		io.emit('newMessage', {
			from: newMessage.from,
			text: newMessage.text,
			createdAt: new Date()
		})
	})

	socket.on('disconnect', () => {
		console.log('User disconnected.');
	});
});

app.get('/', (req, res) => {
	res.send('index.html');
})

server.listen(PORT, (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log(`Server running on port ${PORT}!`);
})