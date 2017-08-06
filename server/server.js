const path = require('path');
const express = require('express');
const server = express();

const PUBLIC_PATH = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 3000;

server.use(express.static(`${PUBLIC_PATH}`));

server.get('/', (req, res) => {
	res.send('index.html');
})

server.listen(PORT, (err) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log(`Server running on port ${PORT}!`);
})