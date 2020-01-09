const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')
const recruitService = require('./services/user')

// const cors = require('cors')

const app = express()

// import passport
// const passport = require('passport')

// use the strategy
// app.use(passport.initialize())
// app.use(cors())

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// import config of passport
// require('./config/passport/passport')

db.sequelize.sync({ alter: true }).then(() => {
  recruitService(app, db);

  app.listen(8080, () => console.log("Server is running on port 8080"))
})