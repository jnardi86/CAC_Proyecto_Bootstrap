const form = document.querySelector('.form-tickets');

form.addEventListener('submit', event => {
    event.preventDefault();
    const cantidad = document.querySelector('#cantidad');
    const cant_numero = Number(cantidad.value);
    // console.log(cant_numero);
    const categoria = document.querySelector('#categoria');
    // console.log(categoria)
    const precio = 200;

    // Precio por categoria
    if (categoria.value == "1") {
        let resultado = cant_numero * (precio - (precio * 0.8));
        const precioTotal = document.querySelector('.precioTotal p');
        precioTotal.textContent += '$ ' + resultado;
    }
    else if (categoria.value == "2") {
        let resultado = cant_numero * (precio - (precio * 0.5));
        const precioTotal = document.querySelector('.precioTotal p');
        precioTotal.textContent += '$ ' + resultado;
    }
    else {
        let resultado = cant_numero * (precio - (precio * 0.15));
        const precioTotal = document.querySelector('.precioTotal p');
        precioTotal.textContent += '$ ' + resultado;
    }
});

