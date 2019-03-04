"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));
app.use('/images', express.static(__dirname + '/public/images'));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// twilio incoming sms route
app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('Your order is 20 minutes away from GitBytes');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

// Home page
app.get("/", (req, res) => {
  res.render("index");
});

//Button from home page to menu page
app.get("/gitbytes", (req, res) => {
  knex('menus')
  .select('*')
  .from('menus')
  .then(menus => {
    const templateVars = {
      menus
    };
    res.render("gitbytes", templateVars);
  })
  .catch((err) => { console.log( err); throw err })
  // .finally(() => {knex.destroy();})
});

//GET for submitting an order and rendering a confirmation template***
app.get("/confirmation", (req, res) => {
  res.render("confirmation")
 // res.redirect('/')
});
app.get("/orderstatus", (req, res) => {
  res.render("orderstatus")
 // res.redirect('/')
});
app.post("/confirmation", (req, res) => {
  res.redirect("orderstatus")
 // res.redirect('/')
});


app.post("/gitbytes", (req, res) => {
 //import {clientsms, restrauntsms} from './send_sms';
//let clientsms = module.require(senclientsms)

//clientsms(req.body.phone)
  console.log(req.body.name)
  console.log(req.body.phone)
  console.log(req.body.smsStr)
  let clientsms = require('./send_sms')
  let restrauntsms = require('./send_restraunt_sms')
  clientsms(req.body.phone)
  restrauntsms(req.body.smsStr, req.body.name, req.body.phone)
  
  res.redirect("/confirmation")

});
/*

app.post("/gitbytes", (req, res) => {
  res.render("gitbytes")
});

*/

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
