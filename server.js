const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet.contentSecurityPolicy({
  directives: {
    "default-src": ["'*'"],
    "img-src": ["'*'"],
    "font-src": ["'*'"],
    "style-src": ["'*'", 'maxcdn.bootstrapcdn.com']
  }
}))
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/jobportal/index.html'));
});
