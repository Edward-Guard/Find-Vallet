const div = document.getElementById("container");
const btnChange = document.getElementById("change");

div.addEventListener('click', virar)
btnChange.addEventListener('click', iniciando)

const positions = [201.6,403.2,604.8,0]

function changePositions(params) {
    positions.sort(() => Math.random() - 0.5);
    let elementos = div.children
    for (let i = 0; i < elementos.length; i +=1) {
        console.log(elementos[i]);
        elementos[i].style.left = `${positions[i]}px`
    }
}

function iniciando() {
    for (let i = 0; i < 8; i++) {
        setTimeout(() => changePositions(), 1000 * i);
    }
}

function virar(e) {
    e.target.classList.toggle('flipada');
}

//Criar container perspective -> Carta{Frente / Trás}
