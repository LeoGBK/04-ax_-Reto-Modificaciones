const circulo = document.querySelector('div');

const texto = document.querySelector('p');

const boton = document.querySelector('button');

boton.onclick = function () {

    if (texto.style.color == 'red')
        texto.style.color = 'black';
    else
        texto.style.color = 'red';

    if (circulo.style.backgroundColor == 'yellow')
        circulo.style.backgroundColor = 'lightgreen';
    else
        circulo.style.backgroundColor = 'yellow';
}
