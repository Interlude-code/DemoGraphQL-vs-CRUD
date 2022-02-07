import express from "express"
import dotenv from 'dotenv';
import db from "./db/db";
import { RecursoModel } from "./models/Recurso";
import { ApolloServer } from 'apollo-server-express';
import { types } from "./graphql/types";
import { resolvers } from "./graphql/resolvers";

dotenv.config({ path: '.env' });
const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});


const app = express()
db()
app.use(express.json())

// const port= process.env.PORT;
// const libros = [{
//     nombre:"el sebas",
//     apellido:"cabrera"
//     },{
//     nombre:"catalina",
//     apellido:"alvarez"
//     }
// ]

// app.get('/', (req, res) => {
//   res.send('Hello World! que pasa pelaos')
// })

// app.get('/libros', (req, res) => {
//     res.json(libros)
//   })
// app.post('/',async(request,response)=>{
//   const recurso = new RecursoModel({
//     nombre: request.body.nombre,
//     disponible: request.body.disponible,
//     fechaPrestamo: request.body.fechaPrestamo,
//     areaTematica: request.body.areaTematica,
//     tipoRecurso: request.body.tipoRecurso,
//   })
//   await  recurso.save()
//   .then(() => {
//     response.sendStatus(201)
//   }).catch(err => {
//     console.error(err)
//   })
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.listen({ port: process.env.PORT || 5001 }, async () => {
  await db();
  await server.start();

  server.applyMiddleware({ app });

  console.log('servidor listo');
});
