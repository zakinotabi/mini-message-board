const messages = [
  {
    text: 'Hi there!, pls leave a message',
    user: 'Fyodor',
    added: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
  {
    text: 'I lost my way a long time ago, and the thought of aging into weakness terrifies me. Coding is the only thing that connects me back to the kid who fell in love with a computer screen, he still wants to prove something but maybe its too late.',
    user: 'Kino',
    added: new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  },
];

module.exports = messages;
