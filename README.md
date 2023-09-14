<h1 align="center"> Proyecto Integrador Final </h1>

Argentina Programa 4.0 - EPICA SAPEM - Full Stack Tramo 2

Utilizando Node.js con Express y Sequelize para interactuar con una base de datos MySQL y EJS con HTML, CSS y Boostrap.

## Guía de Instalación y Ejecución

Siga estos pasos para ejecutar el proyecto en su máquina local:

1. **Clonar el repositorio o descarga el ZIP.**

2. **Instalar las dependencias con el siguiente comando:**
```
   npm i
```

3. **Configurar la base de datos MySQL:** 

   Cree una base de datos llamada `proyectodb` 

4. **Cree y agrege los siguientes datos en el archivo .env :**
```
 PORT=
 URI_DB=
 ```
5. **Crear la tabla de la base de datos para los posteos con el nombre "publicaciones" con los siguientes datos para las columnas:**
   
 ```
   publicaciones / utf8_general_ci
   id = int
   titulo = varchar 255
   descripcion = text
   url_imagen = varchar 255
   fecha = date   
```
6. **Ejecute el comando "npm run dev"**

7. **Acceda al enlace mostrado en la Terminal**