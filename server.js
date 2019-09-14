const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet')
const favicon = require('serve-favicon')



app.use(express.static(path.join(__dirname, 'dist', 'jobPortal')));

app.get('*', function (req, res) {
  console.log('Redirect method');
  res.sendFile(path.join(__dirname, 'dist', 'jobPortal', 'index.html'));
});
app.listen(process.env.PORT || 8080)
