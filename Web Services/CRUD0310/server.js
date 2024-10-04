const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

app.get('/', (req, res) => {
  return res.json({message: 'Welcome!'});
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});