const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function (req, res) {
  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  console.log(req)
  var sum = num1 / (num2 * num2);
  //   res.status(200).send({ sum });
  res.send("Your BMI is " + sum);
});

app.listen(port, function () {
  console.log("server listening on port " + port + "...");
});
