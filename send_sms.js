
const accountSid = module.require('./authtoken').sid;
const authToken = module.require('./authtoken').token;
const client = require('twilio')(accountSid, authToken);

//will export as functions with submit event from cart
// 


module.exports = function clientsms(phone) {
   client.messages
    .create({
       body: 'Your order will be ready in 20 minutes',
       from: '+15873179972',
       to: `${phone}`
        })
    .then(message => console.log(message.sid));  
      }