const express = require('express');
const session = require('express-session');

const baseApiRouter = require('./api-router');
const configureMiddleware = require('./configure-middleware');

const server = express();

const sessionConfig = {
  name: 'monkey', // default w/o cookie name is sid  attackers will know however, attackers will know it's express middleware...so change the name. 
  secret: 'keep it secret, keep it safe!', // when we move to production we'll set up an environ. variable
  cookie: {
    maxAge: 1000 * 30, //the seesion and cookie will be valid for 30 secs then it'll expire
    secure: false, // during dev it's okay to have it false b/c we won't be setting up https, but should be true in production
    httpOnly: true, // always set to true so cookies can't be accessed via javascript. 
  },
  resave: false, // 
  saveUninitialized: false // GDPR compliance laws against setting cookies automatically. must ask the users. this will be changed dynamically base on whether or not the user agrees. 
};


configureMiddleware(server);
server.use(session(sessionConfig));
server.use('/api', baseApiRouter)

module.exports = server;


