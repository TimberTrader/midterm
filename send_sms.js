
const accountSid = module.require('./authtoken').sid;
const authToken = module.require('./authtoken').token;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'testing',
     from: '+15873179972',
     to: '+14039191295'
   })
  .then(message => console.log(message.sid));