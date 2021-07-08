let express = require("express");
let sanitizeHTML = require("sanitize-html");
let app = express();
let PORT = process.env.PORT || 5000;
let mongodb = require("mongodb");

require('dotenv').config();

let db;
app.use(express.static("public"));

let connectionString = process.env.MONGO_FOR_EXPRESS;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
db = client.db();

app.listen(PORT, function () {
  console.log(` The app is running on http://localhost:${PORT} `);
})
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

function securityFunction(req, res, next) {
res.set("www-Authenticate", 'Basic realm="Simple To Do App"');
console.log(req.headers.authorization);
if(req.headers.authorization == "Basic bXlVc2VybmFtZTpteVBhc3N3b3Jk") {
next();
} else {
res.status(401).send("Authentication required!");
}

}

app.use(securityFunction);

app.get('/', function (req, res) {
  db.collection("itemsInSimpleToDoApp").find().toArray(function(err, grabbingAllItemsFromDatabase) {
    res.send(`
    <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple To-Do App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
      <h1 class="display-4 text-center py-1">To-Do App</h1>

      <div class="jumbotron p-3 shadow-sm">
        <form action="/create-item" method="POST">
          <div class="d-flex align-items-center">
            <input name="userInput" autofocus autocomplete="off" class="form-control mr-3" type="text" style="flex: 1;">
            <button class="btn btn-primary">Add New Item</button>
          </div>
        </form>
      </div>

      <ul class="list-group pb-5">
  ${grabbingAllItemsFromDatabase.map(function(extractingToSingleItem) {
        console.log(extractingToSingleItem);
    return ` <li class="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
    <span class="item-text">${extractingToSingleItem.userInputText}</span>
    <div>
      <button class="edit-me btn btn-secondary btn-sm mr-1" data-id="${extractingToSingleItem._id}">Edit</button>
      <button class="delete-me btn btn-danger btn-sm" data-id="${extractingToSingleItem._id}">Delete</button>
    </div>
  </li> `
  }).join("")}
        </ul>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <script src="/expressCrudScript.js"> </script>
  </body>
  </html>`);
  })
});

app.post('/create-item', function (req, res) {
  let sanitizeTexts = sanitizeHTML(req.body.userInput, {allowedTags: [], allowedAttributes: {}});
  db.collection("itemsInSimpleToDoApp").insertOne({userInputText: sanitizeTexts}, function() {
   res.redirect('/');
  })
});

app.post("/update-item", function(req, res) {
  let sanitizeTexts = sanitizeHTML(req.body.userInput, {allowedTags: [], allowedAttributes: {}});
   db.collection("itemsInSimpleToDoApp").findOneAndUpdate({_id: new mongodb.ObjectId(req.body.id)}, {$set: {userInputText: sanitizeTexts}}, function() {
  res.send("Updated!");
});
});

app.post("/delete-item", function(req, res) {
  db.collection("itemsInSimpleToDoApp").deleteOne({_id: new mongodb.ObjectId(req.body.id)}, function() {
 res.send("Deleted!");
});
});