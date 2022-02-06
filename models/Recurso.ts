import { Schema, model } from 'mongoose';
import {AreaTematica,TipoRecurso} from './enums'

interface Recurso {
    nombre: string,
    disponible: Boolean,
    fechaPrestamo: string,
    areaTematica: AreaTematica,
    tipoRecurso: TipoRecurso,
}

const RecursoSchema  = new Schema<Recurso>({
    nombre: {
        type: String,
        required: true,
    },
    disponible:{
        type: Boolean,
        default: true,
    },
    fechaPrestamo:{
        type: String
    },
    areaTematica:{
        type: String,
        enum : AreaTematica,
        required: true
    },
    tipoRecurso:{
        type: String,
        enum : TipoRecurso,
        required: true
    },

})

const RecursoModel = model("Recurso", RecursoSchema);

export {RecursoModel};



