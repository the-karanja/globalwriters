const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/assets/vendor/bootstrap/js/bootstrap.min.js', (req, res) => {
  res.setHeader('Content-Type', mime.getType('js'));
  res.sendFile(__dirname + '/public/assets/vendor/bootstrap/js/bootstrap.min.js');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000');
});