const obtenerPublicacion = async (id) => {
    const response = await fetch(`/api/publicacion/${id}`)
    const data = await response.json()
    return data;
}

const formEditar = document.querySelector("#form-editar")

const id = formEditar.dataset.id

document.addEventListener('DOMContentLoaded', async () => {
    const publicacion = await obtenerPublicacion(id);

    const titulo = document.querySelector('#titulo-post')
    const descripcion = document.querySelector('#detalle-post')
    const url_imagen = document.querySelector('#url-img')
    const fecha = document.querySelector('#fecha')
    const imgPreview = document.querySelector('#img-preview')



    titulo.value = publicacion.titulo;
    descripcion.value = publicacion.descripcion;
    url_imagen.value = publicacion.url_imagen;
    fecha.value = new Date(publicacion.fecha).toISOString().split('T')[0];
    imgPreview.src = publicacion.url_imagen;
    firma_autor.value = firma_autor.descripcion;

})

formEditar.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;
    const firma_autor = document.querySelector('#firma_autor').value;

    const response = await fetch(`/api/publicacion/${id}`, {
        method: 'put',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imagen, fecha})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})