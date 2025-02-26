// Storing in "circulo" the element in <div> tag (circle).
const circulo = document.querySelector('div');

// Storing in "texto" the element in <p> tag.
const texto = document.querySelector('p');

// Storing in "boton" the element in <button> tag.
const boton = document.querySelector('button');

// This onclick event triggers a function that executes conditions to change values styles.
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
