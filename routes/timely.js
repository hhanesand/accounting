/**
 * Created by hakonhanesand on 2/18/17.
 */

const request = require('request')

module.exports = function (app, database) {
  'use strict'

  app.get('/timely_callback', function (req, res) {
    database.query('insert into public.tokens("token") values(\'' + req.query.access_token + '\');', function (error, result) {
      if (error) {
        console.log(JSON.stringify(error))
      } else {
        res.end(JSON.stringify(result))
      }
    })
  })

  app.get('/hours', function (req, res) {
    database.query('select * from public.tokens limit 1;').then(function (result) {
      const token = result.rows[0].token

      const options = {
        'url': 'https://api.timelyapp.com/1.0/512361/reports',
        'method': 'POST',
        'json': true,
        'auth': {
          'bearer': token
        },
        'body': {
          'estimated': false
        }
      }

      request(options, function (err, response, body) {
        if (err) {
          res.end(JSON.stringify(err))
        }

        res.end(JSON.stringify({'minutes': body[0].logged_duration.total_minutes}))
      })
    }, function (error) {
      res.end(JSON.stringify(error))
    })
  })
}

