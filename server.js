
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/website'));
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/website/index.html');

});

app.listen(8080, '0.0.0.0');