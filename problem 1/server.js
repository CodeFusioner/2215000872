const express = require('express');
const app = express();
const PORT = 3000;
const { getTopUsers, getPostsByType } = require('./utils');

app.get('/users', (req, res) => {
  const topUsers = getTopUsers();
  res.json(topUsers);
});

app.get('/posts', (req, res) => {
  const { type } = req.query;
  if (!type || (type !== 'popular' && type !== 'latest')) {
    return res.status(400).json({ error: 'Invalid or missing type parameter' });
  }

  const posts = getPostsByType(type);
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
