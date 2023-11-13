function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.teclado button'); // Adjust the selector to match your HTML structure

for (let contador = 0; contador < listaDeTeclas.length; contador++) 
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.id; // Assuming your audio elements have IDs like "som_frente"
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    };

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };