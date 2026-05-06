let contadorDeProductos = 0;                                // Contador numérico
let botonesAgregar = document.querySelectorAll('.order-btn'); // Todos los botones
let mensajeToast = document.getElementById('toast');        // Elemento del toast
let spanContador = document.getElementById('cart-count');   // Span que muestra el número

function agregarProducto() {
    // 1. Incrementar el contador
    contadorDeProductos = contadorDeProductos + 1;
    
    // 2. Actualizar el texto del span
    spanContador.textContent = contadorDeProductos;
    
    // 3. Mostrar el toast
    mensajeToast.classList.add('show');
    
    // 4. Ocultar el toast después de 3 segundos
    setTimeout(function() {
        mensajeToast.classList.remove('show');
    }, 3000);
}
for (let i = 0; i < botonesAgregar.length; i++) {
    botonesAgregar[i].addEventListener('click', agregarProducto);
}