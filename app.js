const express = require("express");

const app = express();
app.use(express.static("public"));
app.use(express.json())

const postRouter = require('./routers/posts.js')

const port = 3000;
const host = "http://127.0.0.1";


app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`);
});


app.get("/", (req, res) => {
  res.send("Express Blog Routing");
});

app.use('/posts', postRouter)
