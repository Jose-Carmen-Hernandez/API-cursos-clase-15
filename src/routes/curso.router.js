import { Router } from "express";
import { CursoModel } from "../model/curso.model.js";

const app = Router();

//obtener todos los cursos existentes:
app.get("/", async (req, res) => {
  const cursos = await CursoModel.find();
  res.status(200).json({ message: "Todo correcto", payload: cursos });
});

app.post("/", async (req, res) => {
  try {
    const { nombre, alumnos, notas, profesor, comision, clases, estado } =
      req.body; //llega la info desde la peticion en formato de objeto.json.
    const cursoCreado = await CursoModel.create({
      nombre,
      alumnos,
      notas,
      profesor,
      comision,
      clases,
      estado,
    });

    res.status(201).json({ message: "Curso agregado", payload: cursoCreado });
  } catch (error) {
    if (error.code === 11000) {
      //codigo de error para duplicados en MongoDB
      res.status(409).json({ message: "El nombre de curso ya existe" });
    } else {
      res.status(500).json({ message: "Error interno del servidor" });
    }
  }
});

//obtener un curso por nombre:
app.get("/:nombre", async (req, res) => {
  try {
    const { nombre } = req.params;
    const curso = await CursoModel.findOne({ nombre });

    if (!curso) {
      res.status(404).json({ message: "Curso no encontrado" });
    } else {
      res.status(200).json({ message: "Curso encontrado", payload: curso });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del Servidor" });
  }
});

//buscar un curso por comision:
app.get("/comision/:comision", async (req, res) => {
  try {
    const { comision } = req.params;
    const curso = await CursoModel.findOne({ comision });
    if (!curso) {
      res.status(404).json({ message: "Curso no encontrado" });
    } else {
      res.status(200).json({ message: "Curso encontrado", payload: curso });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del Servidor" });
  }
});

//buscar cursos por numero de clases:
app.get("/clases/:clases", async (req, res) => {
  try {
    const { clases } = req.params;
    const curso = await CursoModel.find({ clases });
    if (!curso) {
      res.status(404).json({ message: "Curso no encontrado" });
    } else {
      res.status(200).json({ message: "Curso encontrado", payload: curso });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del Servidor" });
  }
});

//buscar curso por comision
app.get("/comision/:comision", async (req, res) => {
  try {
    const { comision } = req.params;
    const curso = await CursoModel.findOne({ comision });
    if (!curso) {
      res.status(404).json({ message: "Curso no encontrado" });
    } else {
      res.status(200).json({ message: "Curso encontrado", payload: curso });
    }
  } catch (error) {
    res.status(500).json({ message: "Error del Servidor" });
  }
});

//actualizar un registro de usuario por id:
app.put("/:id", async (req, res) => {
  try {
    const cursoModificado = req.body;
    const id = req.params.id;
    const courseUpdated = await CursoModel.findByIdAndUpdate(
      id,
      {
        ...cursoModificado,
      },
      { new: true }
    );
    console.log(courseUpdated); //debuggear en la consola del proyecto

    res
      .status(200)
      .json({ message: "curso actualizado", payload: courseUpdated });
  } catch (error) {
    res.status(400).json({ message: "Error al modificar curso" });
  }
});

//metodo para eliminar un curso:
app.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const courseDeleted = await CursoModel.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "curso eliminado", payload: courseDeleted });
  } catch (error) {
    res.status(400).json({ message: "Error al eliminar curso" });
  }
});

export default app;
