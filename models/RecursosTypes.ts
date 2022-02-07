import { gql } from 'apollo-server-express';


const recursosTypes = gql`

type recurso{
    nombre: String!
    disponible: Boolean!
    fechaPrestamo: String!
    areaTematica: AreaTematica!
    tipoRecurso: TipoRecurso!
}
type Query{
    listaRecursos: [recurso]
}

type Mutation{
    crearRecurso(
    nombre: String!
    disponible: Boolean!
    fechaPrestamo: String!
    areaTematica: AreaTematica!
    tipoRecurso: TipoRecurso!

    ):recurso
}
`;

export {recursosTypes}