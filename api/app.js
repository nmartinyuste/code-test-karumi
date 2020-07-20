const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Body parsers
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

const auth = require('./routes/unauth/auth');
app.use('/auth', auth);

// 404 Not Found Errors
app.use((req, res, next) => {
  const err = new Error('Endpoint not Found');
  err.status = 404;
  next(err);
});

// 500 Internal Errors
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500);
  res.send({
    message: err.message || 'Undefined error',
    errors: err.errors,
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
