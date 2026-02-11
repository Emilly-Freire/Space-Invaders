let val = 0;
let btn = document.querySelector("#btn");
let id;

function add() {
    val++;
    document.querySelector("#v").textContent = val;
}

function startCounter() {
    id = setInterval(add, 1000);
}

btn.addEventListener("click", startCounter);