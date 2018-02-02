require('dotenv').config()
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const app = express()

//Connect to database
const CONNECTION_STRING = process.env.CONNECTION_STRING
massive({ connectionString: CONNECTION_STRING }).then(db => app.set('db', db))

// Top level middle war
app.use(bodyParser.json())

// Controller imports
const test_controller = require('./controllers/test_controller')

// Middleware

// Endpoints
//// test controller
app.get('/api/test', test_controller.testGet)

app.get('/api/properties', (req, res, next )=>{
    app.get('db').getAllProperties().then((dbResponse)=>{
        res.status(200).send(dbResponse)
    })
})



// Set Server to Listen
const port = process.env.SERVER_PORT
app.listen(port, () => (console.log(`Jammin on port: ${port}`)))