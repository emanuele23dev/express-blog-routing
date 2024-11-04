const express = require("express");
const app = express();
const port = 3000;
const host = "http://127.0.0.1";


app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`);
});


app.get("/", (req, res) => {
  res.send("Express Blog Routing");
});

