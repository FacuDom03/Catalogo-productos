document.addEventListener('DOMContentLoaded', () => {
  //Función para actualizar el contador en el menú
  function actualizarContador() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []
    const contador = document.getElementById('contador')
    if (contador) {
      contador.textContent = `(${carrito.length})`
    }
  }

  // Seleccionar todos los botones que agregan al carrito
  const botones = document.querySelectorAll('.producto__boton')

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const nombre = boton.dataset.nombre
      const precio = parseFloat(boton.dataset.precio)
      const imagen = boton.dataset.imagen || '' // opcional

      if (!nombre || isNaN(precio)) return

      const producto = { nombre, precio, imagen }
      const carrito = JSON.parse(localStorage.getItem('carrito')) || []
      carrito.push(producto)
      localStorage.setItem('carrito', JSON.stringify(carrito))

      alert(`${nombre} fue agregado al carrito.`)
      actualizarContador()
    })
  })

  //Siempre actualizar el contador al cargar la página
  actualizarContador()
})