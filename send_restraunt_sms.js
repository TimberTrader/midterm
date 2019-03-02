
const accountSid = module.require('./authtoken').sid;
const authToken = module.require('./authtoken').token;
const client = require('twilio')(accountSid, authToken);

module.exports = function restrauntsms(orderitems, name, number) {
    client.messages
    .create({
       body: `${orderitems}  
                    ORDER FOR: ${name}
                    NUMBER:  ${number} `,
       from: '+15873179972',
       to: '+14039191295'
        })
    .then(message => console.log(message.sid)); 
    };