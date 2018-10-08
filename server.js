const express = require('express');
const path = require('path');
const app = express();

app.use(express.static( __dirname + '/./public/dist/public' ));

app.listen(8000, () => {
  console.log('LISTENING TO PORT 8000')
})

app.all("*", (req,res) => {
  res.sendFile(__dirname + "/./public/dist/public/index.html")
});
