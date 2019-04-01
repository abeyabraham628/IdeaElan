
var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override')
var cors = require('cors');



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

var serviceAccount = require('./service-account.json');
var admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sopaa-b37c1.firebaseio.com"
  })


app.post('/createUser', function(req, res) {
  //res.send(req);
  res.send(req)
  res.json('tony')
  /*admin.auth().createUser({
    email: 'abey.abraham@mca.christuniversity.in',
    password: '123456',
    
  })
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      res.send(JSON.stringify(userRecord.uid));
     
    })
    .catch(function(error) {
      res.send(error);
    });*/
  
  
    
    
});

server.listen(3000);


   
  
