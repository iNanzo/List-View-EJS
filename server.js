const express = require('express');
const app = express();
const port = 3000;

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
