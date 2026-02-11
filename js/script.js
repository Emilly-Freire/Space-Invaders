let val = 0;
let id;

function add() {
    val++;
    document.querySelector("#v").textContent = val;
}

function startCounter() {
    id = setInterval(add, 1000);
}
