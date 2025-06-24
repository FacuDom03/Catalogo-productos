document.addEventListener('DOMContentLoaded', () => {
  const catalogo = document.getElementById('catalogo')

  const productos = [
    { nombre: 'VueJS', precio: 25, imagen: 'img/1.jpg' },
    { nombre: 'AngularJS', precio: 25, imagen: 'img/2.jpg' },
    { nombre: 'ReactJS', precio: 25, imagen: 'img/3.jpg' },
    { nombre: 'Redux', precio: 25, imagen: 'img/4.jpg' },
    { nombre: 'Node.js', precio: 25, imagen: 'img/5.jpg' },
    { nombre: 'SASS', precio: 25, imagen: 'img/6.jpg' },
    { nombre: 'HTML5', precio: 25, imagen: 'img/7.jpg' },
    { nombre: 'Github', precio: 25, imagen: 'img/8.jpg' },
    { nombre: 'BulmaCSS', precio: 25, imagen: 'img/9.jpg' },
    { nombre: 'TypeScript', precio: 25, imagen: 'img/10.jpg' },
    { nombre: 'Drupal', precio: 25, imagen: 'img/11.jpg' },
    { nombre: 'JavaScript', precio: 25, imagen: 'img/12.jpg' },
    { nombre: 'GraphQL', precio: 25, imagen: 'img/13.jpg' },
    { nombre: 'WordPress', precio: 25, imagen: 'img/14.jpg' }
  ]

  productos.forEach(prod => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
      <a href="producto.html?nombre=${prod.nombre}&precio=${prod.precio}&imagen=${prod.imagen}">
        <img class="producto__imagen" src="${prod.imagen}" alt="Imagen ${prod.nombre}">
        <div class="producto__informacion">
          <p class="producto__nombre">${prod.nombre}</p>
          <p class="producto__precio">$${prod.precio}</p>
        </div>
      </a>
      <button 
        class="producto__boton" 
        data-nombre="${prod.nombre}" 
        data-precio="${prod.precio}" 
        data-imagen="${prod.imagen}">
        Agregar al carrito
      </button>

    `
    catalogo.appendChild(div)
  })
})
