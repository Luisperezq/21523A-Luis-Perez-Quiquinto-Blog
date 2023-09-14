const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./database');

sequelize.authenticate()
.then(() => console.log("Conexión a Base de datos Exitosa"))
.catch( err => console.log('Error al conectar BD: ', err))


require('ejs');
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use( express.static(path.join(__dirname, 'public')) )

app.set('view engine', 'ejs')

app.use(require('./routes/blog.routes'));

app.listen(port, () => console.log(`Servidor en http://localhost:${port}`))