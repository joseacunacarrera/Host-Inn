const express = require("express")
const Routes = require("./routes/routes")

class App
{
    constructor()
    {
        this.express = express()
        this.routes()
    }

    routes()
    {
        this.express.use(express.json())

        this.express.use("/api", Routes)  

        this.express.use('*', (req,res) => {
            console.log(req.originalUrl)
            console.log(req.body)
            res.send("Request invalido");
        });
    }
}

module.exports = App;