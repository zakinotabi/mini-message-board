# mini-message-board

A small Node.js + Express app where you can view a list of messages and add new ones through a form. Built with EJS templates and a bit of custom CSS.

## I used

- **Express** – handles routing and serving pages
- **EJS** – lets me mix JavaScript into HTML templates
- **express.static** – serves my CSS file
- **express.urlencoded** – reads form data from POST requests

## What I learned / found difficult

- **EJS syntax** — `<% %>` runs JavaScript but shows nothing, `<%= %>` runs JavaScript and prints the result. Confusing at first, made sense once I saw it as "= means output." but it can easily ger you confused again.
- **`req.body` only works with middleware** — without `express.urlencoded({ extended: true })`, form data never reaches my routes.
- **Form `name` attributes must match `req.body.xxx` exactly** — a silent mismatch here was my most common bug.
- **Node caches modules.** `require()`ing the same file twice gives you the _exact same array in memory_, not a copy. That's why changes made in one route instantly show up in another.
- **`express.static('public')` is relative to where you _run_ the app.** It looks for `public` in whatever folder your terminal is currently in, not where the script file actually lives. Using `path.join(__dirname, 'public')` prevents broken paths if you launch the app from a different directory.
