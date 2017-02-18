var moment = require('moment');
var request = require('request');

require('dotenv').load();
var logger = require('morgan');
var Grant = require('grant-express');
var config = require('./config.json');

var session = require('express-session');
var pgDriver = require('connect-pg-simple')(session);

var app = require('express')();

var serverConnectionString = process.env.DATABASE_URL + "?ssl=true";

app.use(logger('dev'));
app.use(session({
    store: new pgDriver({
        conString: serverConnectionString
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 30 * 24 * 60 * 60 * 1000} // 30 days
}));

async function getHoursWorkedFromTimely(token) {

}

var grant = new Grant(config[process.env.NODE_ENV || 'development']);

console.log(serverConnectionString);

app.use(grant);

app.get('/timely_callback', function (req, res) {
    req.session.timely = req.session.grant.response.access_token;
    var destination = req.session.return;
    delete req.session.return;

    if (destination != null) {
        res.redirect(destination);
    }
});

app.get('/hours', function (req, res) {

    if (req.session.timely == null) {
        req.session.return = '/hours';
        res.redirect('/connect/timely');
    }

    var token = req.session.timely;

    var start = moment().startOf('month');
    var end = moment().endOf('month');

    var options = {
        "url": "https://api.timelyapp.com/1.0/512361/reports",
        "method": "POST",
        "json": true,
        "auth": {
            "bearer": token
        }
        ,
        "body": {
            "estimated": false
        }
    };

    console.log("token : " + token);

    request(options, function (err, response, body) {
        if (err) {
            console.error("request failed : " + err);
            res.send("error : " + err);
            return;
        }

        var total = 0;

        console.log(Object.keys(body));
        console.log("is array " + Array.isArray(body));

        res.send(JSON.stringify(body));
        return;

        if (body.length < 1) {
            res.send("error data is not valid : " + JSON.stringify(body));
            return;
        }

        body[0].projects.forEach(function (project) {
            console.log(Object.keys(project));
            console.log(project.project.name + " : " + project.logged_duration.formatted);
            total += project.logged_duration.total_minutes;
        });

        res.send(JSON.stringify({"minutes": total}));
    });
});

app.listen(3000, function () {
    console.log('Express server listening on port ' + 3000)
});
