var express = require('express');
var firebase = require('firebase');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var config = {
    apiKey: "AIzaSyB6EquXRpxgd6UFz-sk_Fl93KNggDWlrCQ",
    authDomain: "toccadb.firebaseapp.com",
    databaseURL: "https://toccadb.firebaseio.com",
    projectId: "toccadb",
    storageBucket: "toccadb.appspot.com",
    messagingSenderId: "584603990003"
};
firebase.initializeApp(config);

app.get('/api/data/', function(req, res){
    
    var paginationinputs = req.body.pagination;
    var page_size = paginationinputs.size;
    var db = firebase.database()
          .ref("/")
          .orderByChild("id")
          .startAt(5)
          .limitToFirst(page_size)
          .once('value')
          .then(function(snapshot){
              res.json(snapshot.val());
          })
    
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

var server = app.listen(3000, function() {
 console.log("Server listening on port 3000");
});
