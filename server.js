const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    imgSrc: ["'self'"],
    fontSrc: ["'*'"]
    styleSrc: ["'self'", 'maxcdn.bootstrapcdn.com']
  }
}))
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080)

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
