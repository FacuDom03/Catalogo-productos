document.addEventListener('DOMContentLoaded', () => {
  // Actualiza el contador de productos en el nav
  function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const contador = document.getElementById('contador')
    if (contador) {
      contador.textContent = `(${carrito.length})`
    }
  }

  // Asigna funcionalidad al botón si está presente
  const boton = document.querySelector('.producto__boton')
  if (boton) {
    boton.addEventListener('click', () => {
      const nombre = boton.dataset.nombre
      const precio = parseFloat(boton.dataset.precio)

      if (!nombre || isNaN(precio)) return

      const producto = { nombre, precio }
      const carrito = JSON.parse(localStorage.getItem('carrito')) || []
      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))

      alert(`${nombre} fue agregado al carrito.`)
      actualizarContador()
    })
  }

  // Llamada global
  actualizarContador()
})
