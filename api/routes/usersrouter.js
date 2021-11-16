const express = require("express");
const UserController = require("../controllers/userscontrollers")

const app = express()
app.use(express.json())

// get all the users
app.get('/users', async (req, res) => {
    const users = await UserController.listUsers()
    res.send(users)  
})

// create a user
app.post('/createUser', async (req, res) => {
    const user = await UserController.createUser(req.body)
    res.send(user)
})

// login
app.post('/authUser', async (req, res) => {
    const response = await UserController.authUser(req.body)
    res.send(response)
})

// add direction
app.post('/addDirection', async(req, res) => {
    const response = await UserController.addDirection(req.body)
    res.send(response)
})

// add card
app.post('/addCard', async(req, res) =>{
    const response = await UserController.addCard(req.body)
    res.send(response)
})

module.exports = app