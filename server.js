const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');   
const cron = require('node-cron');
const authenticateToken = require('./middlewares/authenticate');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;  

dotenv.config();

const secretKey = process.env.SECRET_KEY;

app.get('/secure-endpoint', authenticateToken, (req, res) => {
  res.json({ message: 'Success! You have access to the secure endpoint.', user: req.user });
});

app.get('/generate-token', (req, res) => {
  const user = { username: 'Ishaan' };
  const token = jwt.sign(user, secretKey);
  res.json({ token });
});


function cronFunction() {
    const currentTime = new Date().toLocaleString();
    console.log(currentTime);
    const message = `Cron job ran at: ${currentTime}\n`;
    fs.appendFile('cron.txt', message, (err) => {
      if (err) throw err;
      console.log('Data appended to cron.txt');
    });
  }
  
  cron.schedule('* * * * *', () => {
    cronFunction();
    console.log('Cron job executed.');
  });

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
