const fs = require('fs');
const colors = require('colors');

const cronFunction = () => {
    const currentTime = new Date().toLocaleString();
    console.log(currentTime.bgRed);
    const message = `Cron job ran at: ${currentTime}\n`;
    fs.appendFile('cron.txt', message, (err) => {
        if (err) throw err;
        console.log('Data appended to cron.txt'.bgBlue);
    });
}

module.exports = cronFunction;
