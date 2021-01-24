let express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Input Grabbing - Refresher</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>

  <body>
    <div class="container">
      <div>
        <h1 id="textDisplay"> User Input </h1>
        <br />
        <h4> What word most people say when picking up a phone call? </h4>
        <form action="/testPage" id="inputForm" method="POST">
          <input name="inputField" id="inputField" class="text-muted" placeholder="Type your response here." /> <button class="btn btn-info p-1" id="displayButton"> Submit </button>
          <p class="m-0 mt-4"> Your input will be displayed in a different URL. </p>
          <ol id="itemLists">
          </ol>
        </form>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

  </body>

  </html>`);
});

app.post('/testPage', function (req, res) {
  console.log("The user entered: ", req.body.inputField);
  if (req.body.inputField) {
    if (req.body.inputField.toLowerCase() == "hello") {
      res.send("You entered correct answer.");
    } else {
      res.send("That is wrong answer.");
    };
  }
});

app.listen(PORT, function () {
  console.log(` The app is running on http://localhost:${PORT} `);
})