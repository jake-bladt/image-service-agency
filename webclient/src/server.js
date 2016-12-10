const express = require('express');
const app = express();

app.use(express.static('/', path.join(__dirname, 'client')));

app.listen('0.0.0.0', 3000);
