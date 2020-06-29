const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "Hey folks" });

  server.listen(4000, () => {
    console.log("Server started on port 4000");
  });
});
