var express = require("express");
var nodemailer = require("nodemailer");

var app = express();
var mailService = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "example@gmail.com",
    pass: "contra",
  },
});

// app.use(express.static("public"));
app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({}));

app.get("/", function (req, res) {
  res.sendFile("public/index.html", { root: __dirname });
});

app.route("/api/form").post((req, res) => {
  res.status(200).send("OK");
});

var server = app.listen(3000, () => {
  console.log(
    "App listening on port http://localhost:" + server.address().port
  );
});
