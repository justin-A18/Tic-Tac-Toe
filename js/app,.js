const board = document.querySelector('.board');
let currentPlayer = 'X';
let moves = 0;


board.addEventListener('click', function(event) {
    const cell = event.target;
    if (cell.tagName !== 'DIV' || cell.textContent !== '') {
    return;
}

    cell.textContent = currentPlayer;
    moves++;

    if (checkWin(currentPlayer)) {
        document.getElementById("resultado").innerHTML = `Haz ganado Jugador ${currentPlayer}`;
        document.getElementById("resultado").style.display = "inherit";
        document.getElementById("reset").style.display = "block";
        document.querySelector(".info-btn").style.display = "none";
        return;
    }

    if (moves === 9) {
        document.getElementById("resultado").innerHTML = "Han empatado";
        document.getElementById("resultado").style.display = "inherit";
        document.getElementById("reset").style.display = "block";
        document.querySelector(".info-btn").style.display = "none";
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

});


function checkWin(player) {
    const cells = document.querySelectorAll('.board > div');
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
];

return combinations.some(combination => {
    return combination.every(index => {
    return cells[index].textContent === player;
    });
});
}

function resetGame() {
    currentPlayer = 'X';
    moves = 0;
    Array.from(document.querySelectorAll('.board > div')).forEach(cell => (cell.textContent = ''));
    document.getElementById("resultado").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.querySelector(".info-btn").style.display = "inherit";
}

let nuevoJuego = document.getElementById("reset");
nuevoJuego.onclick = resetGame;


// modal

document.querySelector(".info-btn").addEventListener("click", modal);

function modal(){
    document.querySelector(".modal").style.display = "inherit";
}   

function cerrarModal(){
    document.querySelector(".modal").style.display = "none";
}

let btn = document.getElementById("cerrar");
btn.onclick = cerrarModal;