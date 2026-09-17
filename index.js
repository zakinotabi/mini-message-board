const express = require('express');
const app = express();
const port = 3000;
const homeRoute = require('./routes/home');
const messagesRoute = require('./routes/messages');

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', homeRoute);
app.use('/new', messagesRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
