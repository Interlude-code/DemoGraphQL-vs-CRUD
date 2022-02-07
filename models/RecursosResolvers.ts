import { RecursoModel } from "./Recurso";
import { argsToArgsConfig } from "graphql/type/definition";

const resolversRecurso = {
    Query: {
        listaRecursos: async(parent, args) => {
          const lista = await RecursoModel.find()
          return lista
        }
    },
    Mutation:{
        crearRecurso: async (parent, args) => {
            const usuarioCreado = await RecursoModel.create({
                nombre: args.nombre,
                disponible: args.disponible,
                fechaPrestamo: args.fechaPrestamo,
                areaTematica: args.areaTematica,
                tipoRecurso: args.tipoRecurso,
            })

            return usuarioCreado;
            
        }

    }
}

export {resolversRecurso}

