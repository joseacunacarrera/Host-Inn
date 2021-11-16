const express = require("express");
const ClienteController = require("../controllers/clientecontroller")

const app = express()
app.use(express.json())

// get all the clients
app.get('/list', async (req, res) => {
    const users = await ClienteController.listClientes()
    res.send(users)  
})

// create a client
app.post('/crearCliente', async (req, res) => {
    const user = await ClienteController.createCliente(req.body)
    res.send(user)
})

// login
app.post('/authCliente', async (req, res) => {
    const response = await ClienteController.authCliente(req.body)
    res.send(response)
})

// add card
app.post('/addCard', async(req, res) =>{
    const response = await ClienteController.addCard(req.body)
    res.send(response)
})

module.exports = app