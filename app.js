var cron = require('node-cron');

cron.schedule('1-20 * * * * *', () => {
  console.log('running a task every minute');
});