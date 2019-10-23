
var express = require('express')
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


// thiet lap router
app.use('/user', require('./router/UserRouter.js'));


app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});
// run server
var num_port = 8888;
var port = process.env.port || num_port;
var server = app.listen(port, () => {
    console.log("Link server: " + require("ip").address() + ":" + port);
    console.log("Running server!!!");
})