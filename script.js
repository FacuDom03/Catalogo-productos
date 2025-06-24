document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.producto__boton')

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const nombre = boton.dataset.nombre
      const precio = parseFloat(boton.dataset.precio)

      const producto = { nombre, precio }

      // Traer el carrito actual o iniciar uno nuevo
      const carrito = JSON.parse(localStorage.getItem('carrito')) || []

      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))

      alert(`${nombre} fue agregado al carrito.`)
    })
  })
})
