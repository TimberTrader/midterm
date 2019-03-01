
const accountSid = module.require('./authtoken').sid;
const authToken = module.require('./authtoken').token;
const client = require('twilio')(accountSid, authToken);

//will export as functions with submit event from cart
// 
//function clientsms(phone, function(err,phone,res) {
/*    client.messages
    .create({
       body: 'Your order will be ready in 20 minutes',
       from: '+15873179972',
       to: `${phone}`
        })
    .then(message => console.log(message.sid));  
}) */

//orderitems has to come in as a string with quantities 

//restrauntsms(orderitems, name, function(err,orderitems,name,res) {
/*    client.messages
    .create({
       body: `${orderitems}      ORDER FOR: ${name} `,
       from: '+15873179972',
       to: '+14039191295'
        })
    .then(message => console.log(message.sid));  
}) */

client.messages
  .create({
     body: 'testing',
     from: '+15873179972',
     to: '+14039191295'
   })
  .then(message => console.log(message.sid));