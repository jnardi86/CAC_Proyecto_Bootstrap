const form = document.querySelector('.form-tickets');


// *************Precio por Categoria******************//
form.addEventListener('submit', event => {
    event.preventDefault();
    //Limpiar el total a pagar
    document.querySelector('.precioTotal').textContent = "Total a pagar:";

    const cantidad = document.querySelector('#cantidad');
    const cant_numero = Number(cantidad.value);
    // console.log(cant_numero);
    const categoria = document.querySelector('#categoria');
    // console.log(categoria)
    const precio = 200;

    //Calculo descuento por categoria y lo agrego al contenido del span Precio Total
    if (categoria.value == "1") {
        // let resultado = cant_numero * (precio - (precio * 0.8));
        let resultado = cant_numero * (precio * 0.2);
        const precioTotal = document.querySelector('.precioTotal');
        precioTotal.textContent += '$ ' + resultado;
    }
    else if (categoria.value == "2") {
        // let resultado = cant_numero * (precio - (precio * 0.5));
        let resultado = cant_numero * (precio * 0.5);
        const precioTotal = document.querySelector('.precioTotal');
        precioTotal.textContent += '$ ' + resultado;
    }
    else {
        // let resultado = cant_numero * (precio - (precio * 0.15));
        let resultado = cant_numero * (precio * 0.85);
        const precioTotal = document.querySelector('.precioTotal');
        precioTotal.textContent += '$ ' + resultado;
    }
});

// *************Borrar Total******************//
const borrarTotal = document.querySelector('#borrarTotal');
borrarTotal.addEventListener('click', event => {
    document.querySelector('.precioTotal').textContent = "Total a pagar:";
});

