require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const app = express()

//Connect to database
const CONNECTION_STRING = process.env.CONNECTION_STRING
massive({ connectionString: CONNECTION_STRING }).then(db => app.set('db', db))

// Middleware import 
const bodyParser = require('body-parser')
const session = require('express-session')
const checkForSessions = require('./middleware/checkForSessions')


// Top level middle war
app.use(bodyParser.json())
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(checkForSessions)

// Controller imports
const test_controller = require('./controllers/test_controller')
const auth_controller = require('./controllers/auth_controller')


// Endpoints
//// test controller
app.get('/api/test', test_controller.testGet)

app.get('/api/properties', (req, res, next )=>{
    app.get('db').getAllProperties().then((dbResponse)=>{
        res.status(200).send(dbResponse)
    })
})

//// Auth Controller
app.post('/api/login', auth_controller.login)
app.post('/api/register', auth_controller.register)
app.post('/api/signout', auth_controller.signout)



// Set Server to Listen
const port = process.env.SERVER_PORT
app.listen(port, () => (console.log(`Jammin on port: ${port}`)))