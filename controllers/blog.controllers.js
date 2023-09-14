const ctrl = {}
const Publicaciones = require('../models/Publicaciones');

ctrl.crearPublicacion = async (req, res) => {
    try {
        const publicacion = await Publicaciones.create(req.body);
        res.send({
            msg: "Publicación creada con éxito",
            publicacion
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Error al crear nueva publicación"
        })
    }

}

ctrl.obtenerPublicaciones = async (req, res) => {
    const publicaciones = await Publicaciones.findAll();
    res.json(publicaciones)
}

ctrl.actualizarPublicacion = async (req, res) => {
    const { id } = req.params;

    const publicacion = await Publicaciones.findByPk(id)
    publicacion.set(req.body)

    await publicacion.save()

    res.json({
        msg: "Publicación actualizada correctamente"
    })
};

ctrl.eliminarPublicacion = async (req, res) => {
    const { id } = req.params;

    await Publicaciones.destroy({
        where: {
            id
        }
    });

    res.json({
        msg: "Publicación eliminada correctamente"
    })

}

ctrl.obtenerPublicacion = async (req, res) => {
    const publicacion = await Publicaciones.findByPk(req.params.id)
    return publicacion;
}



module.exports = ctrl;