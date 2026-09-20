import express from 'express';
import sum from './sum.js';

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


app.get('/home', (req, res) => {
  res.json({ message: 'Welcome to the root!' });
});

app.get('/getsum/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const result = sum(Number(a), Number(b));
  res.json({ result });
});