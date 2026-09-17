const express = require('express');
const app = express();
const port = 3000;

// Each route file handles a different URL path. Keeping them separate
// importing them
const homeRoute = require('./routes/home');
const messagesRoute = require('./routes/messages');

// access files from the "public" folder directly, no route needed (href="/styles.css" instead of ../../..)).
// So public/styles.css becomes accessible at the URL /styles.css
app.use(express.static('public'));

// Tells Express to use EJS for rendering pages, and to look for
// template files in a folder called "views" by default.
// you can make it more focused if you're afraid that it will search somewhere else, but thus is just fine now
app.set('view engine', 'ejs');

// REMEMBER THIS ONE: without this line, req.body (in messages) is always undefined.
// This "middleware" reads form data sent by <form method="POST"> and
// makes it available as req.body.fieldName in your routes.
app.use(express.urlencoded({ extended: true }));

// "mounting" a router: any request to "/" gets handled by homeRoute,
// any request starting with "/new" gets handled by messagesRoute.
app.use('/', homeRoute);
app.use('/new', messagesRoute);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
