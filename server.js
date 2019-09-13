const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet')
const favicon = require('serve-favicon')



app.use(express.static(__dirname, './dist/jobportal'));
app.use(favicon(path.join(__dirname, './dist/jobportal', 'favicon.ico')))
app.listen(process.env.PORT || 8080)

app.get('/*', function (req, res) {
  console.log('Redirect method');
  res.sendFile(path.join(__dirname, './dist/jobportal/index.html'));
});
