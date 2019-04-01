var admin = require('firebase-admin');


var serviceAccount = require('../admin/service-account');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://sopaa-b37c1.firebaseio.com"
  })


    var db = admin.database();
    var ref = db.ref("users");
    
  
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });
  
