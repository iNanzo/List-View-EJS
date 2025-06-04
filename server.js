const express = require('express');
const app = express();
const port = 3000;
const users = require('./data/users.json');

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Serve static files like images from /public
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/dnd', (req, res) => {
  res.render('dnd', { title: 'Dungeons & Dragons' });
});

app.get('/gamedev', (req, res) => {
  res.render('gamedev', { title: 'Game Development' });
});

app.get('/kpop', (req, res) => {
  res.render('kpop', { title: 'K-Pop' }); // Change topic name as needed
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
  res.render('users/index', { title: 'Users', users });
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.render('users/list', { title: user.name, user });
  } else {
    res.status(404).send('User not found');
  }
});
