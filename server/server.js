const express = require('express');
const app = express();
const api = require('./routes/index');
const port = 3001
app.use('/api', api);

const bodyParser = require('body-parser')
const mongoose = require('mongoose') // 몽구스를 이용해서 몽고디비랑 연동
const mongoURI = "mongodb+srv://yoons0717:dbsal903*@boilerplate.ijw7o.mongodb.net/myColor?retryWrites=true&w=majority"
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}))
// application/json
app.use(bodyParser.json())

//
// mongoose.connect(mongoURI, {
//   useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex: true, useFindAndModify:false
// }).then(() => console.log('MongoDB Connected...'))
// .catch(err => console.log(err))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
