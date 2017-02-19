'use strict'

require('dotenv').load()

const Sessions = require('express-session')
const PGSessions = require('connect-pg-simple')(Sessions)
const Grant = require('grant-express')
const environment = process.env.NODE_ENV || 'development'
const grant = new Grant(require('./config.json')[environment])

var database = require('pg-connection-string').parse(process.env.DATABASE_URL + '?ssl=true')
const pg = require('pg')

const app = require('express')()

app.use(Sessions({
  store: new PGSessions({
    pg: pg,
    conString: process.env.DATABASE_URL + '?ssl=true'
  }),
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: 30 * 24 * 60 * 60 * 1000} // 30 days
}))
app.use(grant)
app.use(require('morgan')('dev'))

console.log('Creating table...')

console.log()

const client = new pg.Client(database)
client.connect(function (error) {
  if (error) {
    console.log('error connecting to database ' + JSON.stringify(error))
  }

  client.query('create table if not exists public.tokens ("token" text, primary key ("token"));', function (error, result) {
    if (error) {
      console.log('error creating table ' + JSON.stringify(error))
    } else {
      console.log('Created table...')
    }
  })
})

// Timely
require('./routes/timely.js')(app, client)

app.listen(process.env.PORT, function (error) {
  if (error) {
    console.log('Error setting up express app : ' + JSON.stringify(error))
  } else {
    console.log('Listening...')
  }
})
