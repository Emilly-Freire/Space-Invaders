let hora = 0;
let minuto = 0;
let segundo = 0;
let id;
let posicao = 0;
let img = document.getElementById("nave");

//movimento da nave
document.addEventListener("keydown", function(evento) {
    if(evento.key === "ArrowRight") {
        posicao += 10;
    } 

    if(evento.key === "ArrowLeft") {
        posicao -= 10;
    }

    img.style.transform = `translateX(${posicao}px)`;
});

//temporizador
function tempo() {
    let h = hora < 10 ? "0" + hora : hora;
    let m = minuto < 10 ? "0" + minuto : minuto;
    let s = segundo < 10 ? "0" + segundo : segundo;

    document.querySelector("#v").textContent = h + ":" + m + ":" + s;
}

function add() {
    segundo++;

    if(segundo === 60) {
        segundo = 0;
        minuto++;
    }

    if(minuto === 60) {
        minuto = 0;
        hora++;
    }

    tempo();
}

function comecaContar() {
    id = setInterval(add, 1000);
}


btn.addEventListener("click", startCounter);

//pausar
document.addEventListener("keydown", function(pare) {
    if(pare.key === "Escape") {
        clearInterval(id);
    }
});