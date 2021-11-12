const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.send("Test");

});

app.listen(3000, '0.0.0.0');
