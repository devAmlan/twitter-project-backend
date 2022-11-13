const express = require('express')
const passport = require('passport')
const session = require('express-session');
const mongoose = require('mongoose')
const cors = require('cors')
const route = require('./routes/authRoute')
const dataRoute = require('./routes/dataRoute')
const PORT = 3600
const app = express()
require('dotenv').config()

app.get('/', (req, res) => {
    res.status(200).send({
        message: "Hello from the server"
    })
})


app.use(session({ secret: 'whatever', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "http://localhost:3000", 
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true 
    })
);

const db = require('./config/dbKey').MongoURI
mongoose.connect(db, { useNewUrlParser: true })
    .then(console.log('Connected successfully'))
    .catch(err => { console.log(err) })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route)
app.use(dataRoute)
app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`)
})