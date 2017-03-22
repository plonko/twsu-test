var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = process.env.NODE_ENV === 'production' ? require('./webpack.config.production') : require('./webpack.config');
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

const words = {
  happy: ['delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant'],
  sad: ['disappointed', 'miserable', 'sad', 'sorrow', 'unhappy']
}

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/words', (req, res) => {
  // res.status(500).send('Something broke!')
  res.json(words);
});


app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
