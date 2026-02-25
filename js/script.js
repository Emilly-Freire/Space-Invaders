let hora = 0;
let minuto = 0;
let segundo = 0;
let id;
let posicao = 0;
let posicaoMissil = 0;
let img1 = document.getElementById("nave");
let img2 = document.getElementById("missil");
let img3 = document.getElementById("missil2");
let atirando = false;
let intervaloTiro = null;
let numero = 1;

//movimento da nave
document.addEventListener("keydown", function(evento) {
    if((evento.key === "ArrowLeft" || evento.key === "a") && posicao > -980) {
        posicao -= 10;
        console.log(posicao);
    }else if((evento.key === "ArrowRight" || evento.key === "d") && posicao < 860) {
        posicao += 10;
    }

    img1.style.transform = `translateX(${posicao}px)`;
    img2.style.transform = `translateX(${posicao}px)`;
    img3.style.transform = `translateX(${posicao}px)`;

});

//atirar misseis
document.addEventListener("keydown", function(atira) {
    
    if(atira.key === " " && !atirando) {
        atirando = true;
        posicaoMissil = 0;

        intervaloTiro = setInterval(function() {
            posicaoMissil -= 6;

            if(numero === 1) {
                img2.style.transform = `translate(${posicao}px, ${posicaoMissil}px)`;
            } else {
                img3.style.transform = `translate(${posicao}px, ${posicaoMissil}px)`;
            }

            if(posicaoMissil < -850) {
                clearInterval(intervaloTiro);
                atirando = false;

                numero = (numero === 1) ? 2 : 1;
            }
        })
        

    }
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

//pausar
document.addEventListener("keydown", function(pare) {
    if(pare.key === "Escape") {
        clearInterval(id);
    }
});

//continuar
document.addEventListener("keydown", function(continua) {
    if(continua.key === "p") {
        comecaContar();
    }
});

btn.addEventListener("click", startCounter);