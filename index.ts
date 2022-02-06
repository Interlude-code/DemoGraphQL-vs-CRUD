import express from "express"
import dotenv from 'dotenv';
import db from "./db/db";
import { RecursoModel } from "./models/Recurso";



const app = express()
db()

dotenv.config({ path: '.env' });
const port= process.env.PORT;




app.use(express.json())

const libros = [{
    nombre:"el sebas",
    apellido:"cabrera"
    },{
    nombre:"catalina",
    apellido:"alvarez"
    }
]

app.get('/', (req, res) => {
  res.send('Hello World! que pasa pelaos')
})

app.get('/libros', (req, res) => {
    res.json(libros)
  })
app.post('/',async(request,response)=>{
  const recurso = new RecursoModel({
    nombre: request.body.nombre,
    disponible: request.body.disponible,
    fechaPrestamo: request.body.fechaPrestamo,
    areaTematica: request.body.areaTematica,
    tipoRecurso: request.body.tipoRecurso,
  })
  await  recurso.save()
  .then(() => {
    response.sendStatus(201)
  }).catch(err => {
    console.error(err)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
