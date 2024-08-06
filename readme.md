#Crear y configurar una API REST
#Conectarse a Mongo DB (BBDD llamada cursos)
#Crear un modelo de datos para los cursos en la BBDD con la sig. estructura:

-nombre: String
-alumnos: ?? (Number)
-notas: ?? (String)
-profesor: String
-comision: Number
-cantidad de clases: Number
-estado: Boolean

#Consultas POSTMAN/INSOMNIA
-Realizar los endpoints (CRUD)
-Insertar 3 cursos
-Buscar un curso por nombre
-Buscar por comision
-Buscar por cantidad de clases
-buscar por estado

PASOS A SEGUIR:

1. Crear un proyecto en Node.js (npm init -y)
2. Instalar las dependencias necesarias (express, nodemon, mongoose)
3. Configurar package.json
4. Crear el archivo de entrada (app.js) tambien conocido como 'inputtype'
5. Crear src con las carpetas necesarias (model, routes)
6. Crear el servidor en app.js [const app = express, app.listen(8080, ()=> {}...)]
7. Configurar middlewares (json, url encoded,)
8. Conectar a Mongo (este paso es prioritario y se debe probar desde el principio) Para ello se requiere el string de conexion de Mongo Atlas para probar que se enlaza la app a la BBDD
9. Crear la ruta del endpoint (/api/cursos) en app.js
10. Crear los endpoints necesarios de un CRUD
11. Crear el modelo de datos en src/model/cursos.model.js, crear el Schema (estructura del documento) y la coleccion a manipular: model("cursos", cursoSchema). 'cursos' es la coleccion.
12. Utilizar el modelo creado en los distintos endpoints y ejecutar las consultas requeridas:
    -UserModel.find(),
    -UserModel.create(),
    -UserModel.findByIdAndUpdate(),
    -UserModel.findByIdAndDelete(), etc.

13. Probar los endpoints con POSTMAN o INSOMNIA
