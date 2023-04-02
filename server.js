const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen('3300');
console.log('Running at http://localhost:3300');