require('dotenv').config();
const fastify = require('fastify')({ logger: true });
const mongoose = require('mongoose');
// const routes = require('./routes');
const connectDb = require('./config/db');
connectDb();

const start=async()=> {
    try{
        await fastify.listen({port:3000,host:'0.0.0.0'});
        // await fastify.register(routes);
        fastify.log.info(`Server is running on http://localhost:3000`);

    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();