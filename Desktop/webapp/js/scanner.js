var users = [300]
var database = []
var userDetails = {
    username: "knoxba",
    password: "theking123" 
}

/*var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Authentication");
    dbo.collection("credentials").findOne({}, function (err, result) {
        if (err) throw err;
        console.log(result.name);
        db.close();
    });
});*/

function focusBadgeScanner() {
  document.getElementById('authorization').focus(); // https://www.geeksforgeeks.org/javascript-focus/
}

function badgeScan() {
  if (event.keyCode === 13) { 
    var authenticate = document.getElementById('scanner').value;
      //if (window.users.includes(parseInt(authenticate, 10))){ // USE FOR BADGE NOs. ONLY
      if (authenticate == userDetails.password) {
          document.getElementById('scanner').value = "";
          document.getElementById('invalid_entry').style.display = 'none';
          document.getElementById('valid_entry').style.display = 'block';
          window.location.replace("C:\\Users\\knoxb\\Desktop\\webapp\\main.html") 
    } else { 
          document.getElementById('scanner').value = ""; 
          document.getElementById('valid_entry').style.display = 'none';
          document.getElementById('invalid_entry').style.display = 'block';
    };
  };

};
