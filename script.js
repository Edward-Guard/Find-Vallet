
const div = document.getElementById("container");
const msg = document.getElementById('result')
const score = document.getElementById('score')
const tentativas = document.getElementById('chances')

div.addEventListener('click', virar)
div.addEventListener('click', choice)
msg.addEventListener('click', iniciando)


const positions = [201.6, 403.2, 604.8, 0]
let chooice = 0;
let cont = 0
function changePositions() {
    cont += 1
    msg.innerHTML = 'Embaralhando...'
    positions.sort(() => Math.random() - 0.5);
    let elementos = div.children
    for (let i = 0; i < elementos.length; i += 1) {
        elementos[i].style.left = `${positions[i]}px`
    }
    if (cont == 8) {
        msg.innerHTML = 'Escolha uma carta.'
    }
}

function virar(e) {
    if (cont != 8) {
        e.target.preventDefault()
    }
    const pai = e.target.parentElement
    pai.classList.toggle('flipada')

}

//Dxar pronta
function showAll(e) {
    for (let i = 0; i < 4; i += 1) {
        if ( chooice != 0) {
            div.children[i].classList.remove('flipada')
        }else{
            div.children[i].classList.add('flipada')
        }
        
    }
}
let pts = 0;
let roll = 0;
function choice(e) {
    if (cont != 8) {
        e.target.preventDefault()
    }
    const carta = e.target.parentElement
    if (chooice == 0) {
        chooice +=1;
        if (carta.id == 'paladin') {
            msg.innerHTML = "Você acertou!"
            pts +=1
            score.innerHTML = `Acertos: ${pts}`
        } else {
            msg.innerHTML = "Tente de novo!"
            
        }
        setTimeout(() => showAll(),1800)
    }
    
}

function iniciando() {
    chooice = 0;
    cont = 0;
    roll +=1
    tentativas.innerHTML = `Tentativas: ${roll}`
    showAll()
    for (let i = 0; i < 8; i++) {
        setTimeout(() => changePositions(), 800 * i);
    }
}


//Criar container perspective -> Carta{Frente / Trás}
