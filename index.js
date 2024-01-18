const express = require('express');
const app = express();
const port = 8000;
const client = require('./lib/client')

const connect = async () => {
 try {
  await client.connect()
 } catch (error) {
  console.error(error)
 }
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

connect()
