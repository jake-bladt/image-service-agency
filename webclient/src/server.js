const express = require('express');
const app = express();
const path = require('path');
const port = process.env.IMGSVCA_WEBCLIENT_PORT || 3000;

app.use(express.static('client'));
app.listen(port);
console.log("Listening on port", port);
