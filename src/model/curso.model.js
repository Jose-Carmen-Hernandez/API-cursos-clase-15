import { Schema, model } from "mongoose";

//instanciar esquema:
const cursoSchema = new Schema({
  nombre: {
    type: String,
    //hacer que el nombre sea unico:
    unique: true,
  },
  alumnos: Number,
  notas: String,
  profesor: String,
  comision: Number,
  clases: Number,
  estado: Boolean,
});

//instanciar modelo (recibe el nombre de la coleccion y el esquema)
export const CursoModel = model("Cursos", cursoSchema);
