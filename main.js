let boton = document.querySelector('#dameContenido')

let contenido = document.getElementById('ingresar-contenido');

function dameDatos() {
    fetch(' https://randomuser.me/api/')
        .then(data => data.json())
        .then(impri => {
          console.log(impri);
        contenido.innerHTML = `
        <img class="imagen" src="${impri.results[0].picture.medium}" alt=""> 
        <p>Nombre: ${impri.results[0].name.first}</p> 
        
        
        `
        })
}