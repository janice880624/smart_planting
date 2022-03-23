var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smart-planting-ddad1-default-rtdb.firebaseio.com"
});

database.on('value', function(snapshot) {
    console.log(snapshot.val());
});