var express = require('express');
var session = require('express-session');
var logger = require('morgan');
var Grant = require('grant-express');

var app = express();
var grant = new Grant(require('./config.json'));

app.use(logger('dev'));
app.use(session({secret: 'ffffffffff90501960cb3b29615931aabf74201b'}));
app.use(grant);

app.get('/timely_callback', function (req, res) {
    console.log(req.query);
    res.end(JSON.stringify(req.query, null, 2))
});

app.listen(3000, function () {
    console.log('Express server listening on port ' + 3000)
});
