let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;
let mongodb = require("mongodb");

require('dotenv').config();

let db;

let connectionString = " mongodb+srv://new-user-01242021:NewDatabasePW@cluster0.wuaz2.mongodb.net/newDatabase-01242021?retryWrites=true&w=majority ";

mongodb.connect(connectionString, {useNewUrlParser: true}, function(err, client) {
db = client.db();

app.listen(PORT, function () {
  console.log(` The app is running on http://localhost:${PORT} `);
})
})

app.use(express.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  db.collection("newCollection-01242021").find().toArray(function(err, grabbingAllItemsFromDatabase) {
    res.send(`<!DOCTYPE html>
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
      <button class="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
      <button class="delete-me btn btn-danger btn-sm">Delete</button>
    </div>
  </li> `
  }).join("")}
        </ul>
    </div>
  </body>
  </html>`);
  })
});

app.post('/create-item', function (req, res) {
  db.collection("newCollection-01242021").insertOne({userInputText: req.body.userInput}, function() {
   res.redirect('/');
  })
});

