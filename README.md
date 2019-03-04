# gitBytes - Midterm Project

gitBytes is a simple food pick-up ordering application for our clients who prefer a quick and convenient alternative option to start their day. gitBytes number one ficticious coffee shop "Coffee < br /> && Donuts" allows our clients to simply launch the app via their mobile device and place their order whilst on the subway train or morning commute to the office. 

Why is gitBytes better than our competitors? 

This means no more waiting in line ups, the ability to select your order and upon submission of your order we will respond to you within seconds to confirm the coffee shop has received your order via SMS.  

## Project Description 

Food Pick-up Ordering
A food ordering experience for a single restaurant. Hungry clients of this fictitious restaurant can visit its website, select one or more dishes and place an order for pick-up. They will receive a notification when their order is ready.

The restaurant and client both need to be notified since this app serves as an intermediary.

When an order is placed the restaurant receives the order via SMS. The restaurant can then specify how long it will take to fulfill it. Once they provide this information, the website updates for the client and also notifies them via SMS.

You can use a modern telecomm API service such as Twilio to implement SMS communication from the website to the client and restaurant.

## Getting Started

1. Create the .env by using .env.example as a reference: cp .env.example .env
2. Update the .env file with your correct local information
3. Install dependencies: npm i
4. Fix to binaries for sass: npm rebuild node-sass
5. Run migrations: npm run knex migrate:latest
* Check the migrations folder to see what gets created in the DB
6. Run the seed: npm run knex seed:run
* Check the seeds file to see what gets seeded in the DB
7. Run the server: npm run local
8. Visit http://localhost:8080/

## Dependencies

* Body-parser: 1.15.2
* Dotenv: 2.0.0
* EJS: 2.4.1
* Express: 4.13.4
* Knex: 0.11.7 
* Knex-logger: 0.1.0
* Morgan: 1.7.0
* Node-sass-middleware: 0.9.8
* Pg: 6.0.2
* Twilio: 3.28.1

#devDependencies
* Nodemon 1.9.2

## Final Product

![Homepage](midterm/public/images/home.jpg)
![Order](midterm/public/images/order.jpg)
![Confirmation](midterm/public/images/confirm.jpg)

## Collaborative Authoring (Alphabetic Order)

[Brayden Halliday](https://github.com/BraydenHalliday)

[Jatinder Chima](https://github.com/jatinderchima)

[Tim Bowes](https://github.com/TimberTrader)