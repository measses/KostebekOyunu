let currMoleTile;
let currPlantTile;
let score = 0;
let lives = 3; // Yeni değişken
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    for (let i = 0; i < 9; i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

document.getElementById("restart-btn").addEventListener("click", function() {
    resetGame();
});

function resetGame() {
    let board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }

    score = 0;
    lives = 3; // Yeni satır
    gameOver = false;
    document.getElementById("score").innerHTML = score.toString();

    // Kalpleri yenile
    document.getElementById("health1").src = "health.png";
    document.getElementById("health2").src = "health.png";
    document.getElementById("health3").src = "health.png";

    setGame();
}

function setMole(){
    if(gameOver){
        return;
    }

    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currPlantTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num)
    currMoleTile.appendChild(mole)
}

function setPlant(){
    if(gameOver){
        return;
    }

    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "./piranha-plant.png";

    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }

    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    }
    else if(this == currPlantTile){
        lives--; // Canları azalt
        if (lives == 0) {
            document.getElementById("score").innerHTML = "GAME OVER: " + score.toString();
            gameOver = true;
        } else {
            // Kalpleri güncelle
            let heartId = "health" + lives;
            document.getElementById(heartId).src = "health-2.png";
        }
    }

    // Kalan canlara göre kalp resimlerini güncelle
    if (lives == 2) {
        document.getElementById("health3").src = "health.png";
    } else if (lives == 1) {
        document.getElementById("health2").src = "health.png";
    } else if (lives == 0) {
        document.getElementById("health1").src = "health.png";
    }
    function hideHeart(){
    if (lives == 2) {
        document.getElementById("health3").src = "health.png";
    } else if (lives == 1) {
        document.getElementById("health2").src = "health.png";
    } else if (lives == 0) {
        document.getElementById("health1").src = "health.png";
    }
}

function hideHeart(){
    if (lives == 2) {
        document.getElementById("health3").src = "health.png";
    } else if (lives == 1) {
        document.getElementById("health2").src = "health.png";
    } else if (lives == 0) {
        document.getElementById("health1").src = "health.png";
    }
}











}

