const express = require('express');
const path = require('path');
const app = express();

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

// Function to find available port
function findAvailablePort(startPort) {
  return new Promise((resolve) => {
    const server = app.listen(startPort, () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    }).on('error', () => {
      resolve(findAvailablePort(startPort + 1));
    });
  });
}

// Start server with automatic port detection
async function startServer() {
  try {
    const PORT = process.env.PORT || await findAvailablePort(3000);
    app.listen(PORT, () => {
      console.log(`Demo server running at http://localhost:${PORT}`);
      console.log(`\nAvailable demos:`);
      console.log(`- Main Demo: http://localhost:${PORT}`);
      console.log(`- Next.js: http://localhost:${PORT}/nextjs`);
      console.log(`- WordPress: http://localhost:${PORT}/wordpress`);
      console.log(`- Drupal: http://localhost:${PORT}/drupal`);
      console.log(`- Widget Examples: http://localhost:${PORT}/widget-examples`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();