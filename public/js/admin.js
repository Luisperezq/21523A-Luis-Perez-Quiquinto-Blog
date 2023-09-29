const formGuardar = document.querySelector("#form-guardar")


formGuardar.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.querySelector('#titulo-post').value;
    const descripcion = document.querySelector('#detalle-post').value;
    const url_imagen = document.querySelector('#url-img').value;
    const fecha = document.querySelector('#fecha').value;
    const firma_autor = document.querySelector('#firma_autor').value;

    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ titulo, descripcion, url_imagen, fecha, firma_autor})
    })
    const data = await response.json();

    alert(data.msg);
    location.href = "/"

})