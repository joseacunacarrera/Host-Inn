const express = require("express")
const clienteRouter = require("./clientesrouter")

class Routes
{
    app
    constructor()
    {
        this.app = express()
        this.app.use(express.json())
        this.routes()
    }

    routes()
    {
        this.app.use("/cliente", clienteRouter) 
    }
}

module.exports = new Routes().app;