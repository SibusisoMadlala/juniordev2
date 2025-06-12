const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/index', (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== 'string') {
    return res.status(400).json({ error: 'Invalid input. Expecting { data: "string" }' });
  }

  const word = data.split('').sort(); 
  res.json({ word });
});

module.exports = app;
