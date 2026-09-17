const express = require('express');
const router = express.Router();

// import the array from the module
// message.js pushes a new message onto it, this file sees the update too.
const messages = require('../data/messagesData');

router.get('/', (req, res) => {
  // res.render(templateName, dataToPassIn)
  // rendering index.ejs and passing the messages variable to it
  // The second argument is an object. Its keys become variables you
  // can use inside the .ejs file. Here, "messages" (the array) becomes
  // available as a variable called `messages` inside index.ejs.
  res.render('index', { messages });
});

module.exports = router;
