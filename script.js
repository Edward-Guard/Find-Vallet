
const div = document.getElementById("container");
const btnChange = document.getElementById("change");
const btnShow = document.getElementById("show");

div.addEventListener('click', virar)
div.addEventListener('click', choice)
btnChange.addEventListener('click', iniciando)
btnShow.addEventListener('click', showAll)

const positions = [201.6,403.2,604.8,0]

function changePositions(params) {
    positions.sort(() => Math.random() - 0.5);
    let elementos = div.children
    for (let i = 0; i < elementos.length; i +=1) {
        elementos[i].style.left = `${positions[i]}px`
    }
}

function virar(e) {
    const pai = e.target.parentElement
    pai.classList.toggle('flipada')
    
}

//Dxar pronta
function showAll(e) {
    for (let i = 0; i < 4; i += 1) {
        if (div.children[i].classList.contains('flipada')) {
            div.children[i].classList.toggle('flipada')
        }
        div.children[i].classList.toggle('flipada')
    }  
}

function choice(e) {
    //const escolhido = document.querySelector('.escolhido')
    const carta = e.target.parentElement
    /*if (escolhido) {
        escolhido.classList.toggle('escolhido')
    }*/

    if (carta.id == 'paladin') {
        console.log('Você acertou');
    }
}

function iniciando() {
    showAll()
    for (let i = 0; i < 8; i++) {
        setTimeout(() => changePositions(), 1000 * i);
    }
}

//Criar container perspective -> Carta{Frente / Trás}
