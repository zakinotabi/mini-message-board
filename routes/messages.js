const express = require('express');
const router = express.Router();
const messages = require('../data/messagesData');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  // there is a lot going on inside req so we access body and then the key which is name="" in html
  // on your form's <input> and <textarea> tags — they must match exactly.
  // we push data into array
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });

  // Sends the browser back to "/", which triggers a fresh GET request
  res.redirect('/');
});

module.exports = router;
