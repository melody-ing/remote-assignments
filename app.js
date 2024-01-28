const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("sum.html"));

app.get("/", (req, res) => {
  res.send("<h1>Hello, My Server!</h1>");
});

app.get("/getData", (req, res) => {
  const number = req.query.number;
  if (!number) {
    return res.send(`Lack of Parameter`);
  } else if (!(number % 1 === 0 && number > 0)) {
    return res.send(`Wrong Parameter`);
  } else {
    return res.send(`${result(Number(number))}`);
  }
});

function result(num) {
  let total = 0;
  for (let i = num; i > 0; i--) {
    total = total + i;
  }
  return total;
}

app.listen(3000, () =>
  console.log("The application is running on localhost:3000!")
);
