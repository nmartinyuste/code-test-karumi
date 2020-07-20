const express = require('express');
const router = express.Router({ mergeParams: true });
const asyncWrap = require('./../../helpers/asyncWrap');
const correctUsers = require('./../../fake/users');

router.post(
  '/login',
  asyncWrap(async (req, res, next) => {
    const { username, password } = req.body;
    const success = correctUsers.find((_user) => _user.username === username && _user.password === password);
    if (!success) res.status(401).send({ message: 'Invalid credentials' });
    res.status(200).send(success);
  })
);

module.exports = router;
