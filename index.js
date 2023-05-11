//import json-server

const jsonServer = require('json-server')

// create json server app
const server = jsonServer.create()

//set up for route for db.json

const router = jsonServer.router("db.json")

//return a middleware

const middleware = jsonServer.defaults()

//set up port number for server app \

const port = process.env.PORT || 3000

//use router and middleware in server app

server.use(middleware)
server.use(router) 

//to listen the server

server.listen(port,()=>{
    console.log(`Contact Server App Started as port${port}`);
})




