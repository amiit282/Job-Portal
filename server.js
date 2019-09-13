const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet')

app.use(helmet.contentSecurityPolicy({
  directives: {
    "default-src": ["'*'"],
    "img-src": ["'*'"],
    "font-src": ["'*'"],
    "style-src": ["'*'", 'maxcdn.bootstrapcdn.com']
  }
}))

app.use(express.static(__dirname, './dist/jobportal'));

app.listen(process.env.PORT || 8080)

app.get('*', function (req, res) {
  console.log('Redirect method')
  res.sendFile(path.join(__dirname, './dist/jobportal/index.html'));
});
