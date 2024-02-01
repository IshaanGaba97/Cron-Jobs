const express = require('express');
const router = require('./routes/authRouter');
const cronFunction = require('./cronJobs/cronJob');
const cron = require('node-cron');
const dotenv = require('dotenv');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

dotenv.config();

cron.schedule('* * * * *', () => {
  cronFunction();
});

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});
