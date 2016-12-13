const express = require('express');
const app = express();

const path = require('path');

app.use('/static', express.static('client'));
app.listen(3000);
