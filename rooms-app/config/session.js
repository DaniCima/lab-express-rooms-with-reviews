const session = require("express-session");
const MongoStore = require("connect-mongo");
// since we are going to USE this middleware in the app.js,
// let's export it and have it receive a parameter
module.exports = (app) => {
  app.use(
    session({
      secret: process.env.SESS_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // 24h
      },
      store: new MongoStore({
        mongoUrl: "mongodb://0.0.0.0/rooms-app",
        ttl: 1000 * 60 * 60 * 24, // 60sec * 60min * 24h => 1 day
      }),
    })
  );
};
