const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'src')));
app.use('/widget', express.static(path.join(__dirname, 'widget')));
app.use('/wordpress', express.static(path.join(__dirname, 'wordpress-theme')));
app.use('/drupal', express.static(path.join(__dirname, 'drupal-theme')));

// Demo switching routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo-index.html'));
});

app.get('/nextjs', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo-nextjs.html'));
});

app.get('/wordpress', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo-wordpress.html'));
});

app.get('/drupal', (req, res) => {
  res.sendFile(path.join(__dirname, 'demo-drupal.html'));
});

app.get('/widget-examples', (req, res) => {
  res.sendFile(path.join(__dirname, 'widget', 'widget-examples.html'));
});

app.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs.html'));
});

app.get('/api', (req, res) => {
  res.sendFile(path.join(__dirname, 'api.html'));
});


app.listen(PORT, () => {
  console.log(`Demo server running at http://localhost:${PORT}`);
  console.log(`\nAvailable demos:`);
  console.log(`- Main Demo: http://localhost:${PORT}`);
  console.log(`- Next.js: http://localhost:${PORT}/nextjs`);
  console.log(`- WordPress: http://localhost:${PORT}/wordpress`);
  console.log(`- Drupal: http://localhost:${PORT}/drupal`);
  console.log(`- Widget Examples: http://localhost:${PORT}/widget-examples`);
});