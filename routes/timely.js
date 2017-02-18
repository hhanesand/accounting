/**
 * Created by hakonhanesand on 2/18/17.
 */

const request = require('request')

module.exports = function (app, database) {
  'use strict'

  app.get('/timely_callback', function (req, res) {
    database.query('insert into tokens values ("' + req.query.access_token + '")')
    res.end()
  })

  app.get('/hours', function (req, res) {
    if (req.session.timely == null) {
      req.session.return = '/hours'
      res.redirect('/connect/timely')
    }

    const options = {
      'url': 'https://api.timelyapp.com/1.0/512361/reports',
      'method': 'POST',
      'json': true,
      'auth': {
        'bearer': req.session.timely
      },
      'body': {
        'estimated': false
      }
    }

    request(options, function (err, response, body) {
      if (err) {
        console.error('request failed : ' + err)
        res.send('error : ' + err)
        return
      }

      res.end(JSON.stringify({'minutes': body[0].logged_duration.total_minutes}))
    })
  })
}

