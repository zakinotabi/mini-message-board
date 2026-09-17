const express = require('express');
const router = express.Router();
const messages = require('../data/messagesData');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect('/');
});
module.exports = router;
