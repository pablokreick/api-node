import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/character', (req, res) => {
  res.json({
    name: 'Axl',
    class: 'Rogue',
    level: 7
  });
});

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});