const models = require('../repositories/data')
const { createHmac } = require('crypto');

class ClienteController
{ 
    secret 
    
    constructor(){
        this.secret = 'ckjecareq'
    }

    // encrypt 
    encrypt(newSecret, text)
    {
        const hash = createHmac('sha256', newSecret)
               .update(text)
               .digest('hex');
        return hash
    }

    // get all users
    listClientes()
    {
        return models.Cliente.findAll()
    }

    // create account
    async createCliente(body)
    {
        console.log(body.contrasenna)
        const password = body.contrasenna
        const userSecret = body.nombreUsuario + this.secret 
        const hash = createHmac('sha256', userSecret)
               .update(password)
               .digest('hex');
        body.contrasenna = hash
        // create user
        const cliente = await models.Cliente.create(body) 
        console.log(cliente)
        return cliente
    }

    // login
    async authCliente(body)
    {
        // users password
        const password = body.contrasenna
        // create usersecrete
        const userSecret = body.nombreUsuario + this.secret
        // hash the incoming password 
        const hash = createHmac('sha256', userSecret)
               .update(password)
               .digest('hex');
        // get the user password that match the incoming username 
        const cliente = await models.Cliente.findOne({where: {nombreUsuario: body.nombreUsuario}})
        // if it matches the hashed incoming password, the password is correct
        if(hash == cliente.contrasenna)
        {
            console.log(cliente)
            return cliente
        }
        else
        {
            return 'No se ha podido autenticar correctamente.'
        }
    }

    // add card info
    async addCard(body)
    {
        // create a new card associated w/ the user
        const card = await models.Tarjeta.create(body)
        return card
    }
}

module.exports = new ClienteController()