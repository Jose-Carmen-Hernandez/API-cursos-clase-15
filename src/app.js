import express from "express";
import UserRouter from "./routes/curso.router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//instanciar el manejador de variables de entorno:
dotenv.config();

const app = express();
const PORT = 8080 || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/cursos", UserRouter);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// 10 Conectar a la Base de Datos:
mongoose.connect(process.env.DATABASE_URL, { dbName: "Clase-15" }).then(() => {
  console.log("Conectado a la base de datos"); //mongoose.connect es una promesa.
});
