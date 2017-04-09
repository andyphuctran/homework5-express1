var express = require('express'),
    app = express(),
    investors = require('./investors.json'),
    fs = require('fs'),
    path = require('path');

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.set('case sensitive routing', true);
app.set('x-powered-by', false);
app.disable('etag');
// app.set('env', 'production');
// console.log(app.get('env'));
// console.log(app.get('view cache'));
app.set('view cache', true);
console.log(app.get('view cache'));
app.get('/investors', function(request, response) {
    response.status(200);
    // response.set('Content-Type', 'text/html');
    response.render('investors', { title: 'Information of Investors', investors: investors });
});
app.listen(3000, '127.0.0.1', () => console.log('Server is listening on port 3000'));