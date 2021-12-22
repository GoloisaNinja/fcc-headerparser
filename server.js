// server.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
const accepts = require('accepts');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
	res.json({ greeting: 'hello API world' });
});

// API endpoint to retrieve request headers for project completion

app.get('/api/whoami', (req, res) => {
	const ipaddress = req.ip;
	const language = accepts(req).languages()[0];
	const software = req.headers['user-agent'];
	res.send({ ipaddress, language, software });
});

const PORT = process.env.PORT || 5000;

// listen for requests :)
var listener = app.listen(PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});
