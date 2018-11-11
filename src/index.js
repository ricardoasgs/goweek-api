const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server, { pingTimeout: 30000 });

const routes = require("./routes");

mongoose.connect(
  "mongodb://goweek:goweek123@ds157383.mlab.com:57383/goweek-api",
  { useNewUrlParser: true }
);

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3003, () => {
  console.log("Server starte on port 3003");
});
