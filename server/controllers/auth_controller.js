// TODO hook users to get from database
const users = require('../models/users');
let id = 1

module.exports={
    login: (req, res, next)=>{
        const user = users.find(user=> user.username === req.body.username && user.password === req.body.password)
        if (user){
            req.session.user.username = user.username;
            res.status(200).send(req.session.user);
        } else {
            res.status(500).send('Unauthorized user Denied')
        }
    },
    signout: (req, res, next)=>{
        req.session.destroy()
        res.status(200).send(req.session)
    },
    register:(req, res, next)=>{
        let newUser = {
            // TODO id should be created by database
            id: id,
            username: req.body.username,
            password: req.body.password
        }
        // TODO id should come from datase
        id++
        users.push(newUser)
        req.session.user.username = req.body.username
        res.status(200).send(req.session.user)
    }
}
