const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
var MongoDBStore = require('connect-mongodb-session')(session);
var store = new MongoDBStore({
  uri: 'mongodb+srv://admin:Sh@@0103852494@cluster0.uhx36.mongodb.net/posts-app',
  collection: 'mySessions'
});
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store
}))
app.use(flash()) 
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// Get routes
app.use(require('./routes/register.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/profile.routes'));
app.use(require('./routes/home.routes'))
app.use(require('./routes/accountSetting.routes'))



app.get('/', (req, res) => {
    res.send('Hello');
});

mongoose.connect('mongodb+srv://admin:Sh@@0103852494@cluster0.uhx36.mongodb.net/posts-app',{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
  console.log('connected')
})
app.listen(process.env.PORT ||port, () => {
    console.log('App listening on port 3000!');
});
