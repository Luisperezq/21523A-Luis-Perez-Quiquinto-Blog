const { Router } = require('express');
const router = Router()
const {
    actualizarPublicacion,
    crearPublicacion,
    eliminarPublicacion,
    obtenerPublicaciones,
    obtenerPublicacion
} = require('../controllers/blog.controllers');


router.get('/', (req, res) => {
    res.render('home')
})

router.get('/admin', (req, res)=> {
    res.render('admin')
})

router.get('/admin/:id', (req, res)=> {
    res.render('editar', { id: req.params.id })
})

router.post('/publicacion', crearPublicacion);

router.get('/publicaciones', obtenerPublicaciones);

router.get('/publicacion/:id', obtenerPublicacion)

router.put('/publicacion/:id', actualizarPublicacion);

router.delete('/publicacion/:id', eliminarPublicacion);

module.exports = router;