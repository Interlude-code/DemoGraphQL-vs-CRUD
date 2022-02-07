import { gql } from "apollo-server-express";

const enumsTypes = gql`

enum  AreaTematica {
    CIENCIAS 
    NATURALEZA 
    HISTORIA 
    GEOGRAFIA
    MATEMATICAS 
    FISICA
    TECNOLOGIA
    MUSICA
    DEPORTE
    INFANTIL
}
enum  TipoRecurso {
    LIBRO
    REVISTA
    FICHA
    PELICULA
    DOCUMENTAL
    PERIODICO
}
`

export {enumsTypes}