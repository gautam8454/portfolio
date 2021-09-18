const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 3000
// const port = process.env.PORT || 80;
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const { profile } = require('console')
mongoose.connect('mongodb://localhost:27017/portfolio', {useNewUrlParser: true, useUnifiedTopology: true});

const portfolioSchema = new mongoose.Schema({
  name: String,
  email: String,
  sub: String,
  message: String,
});

const portfolio = mongoose.model('portfolio', portfolioSchema);

app.use('/static', express.static('static'))
app.use(express.urlencoded())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
  res.statuscode = 200
});

app.post('/', (req, res)=>{
  const mydata = new portfolio(req.body)
  mydata.save().then(()=>{
      res.send("This Items will save to the Database")
  }).catch(()=>{
      res.send("This Items was not save to the Database")
  })
})

  app.listen(port, ()=>{
    console.log(` portfolio Website is started successfully on port http://localhost:${port}`);
});