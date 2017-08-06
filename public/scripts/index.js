let socket = io({ reconnection: false });

socket.on('connect', function () {
	console.log('Connected to server.');
});

socket.on('disconnect', function () {
	console.log('The server connection is lost.');
});

socket.on('newMessage', function(data) {
	console.log('You have a new message: ', data);
})