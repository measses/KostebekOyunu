let currMoleTile;
let currPlantTile;
let score = 0;
let canCount = 3; // Başlangıçta üç can hakkı var.

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

function setMole(){
    if(canCount <= 0){
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
    if(canCount <= 0){
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
    if(canCount <= 0){
        return;
    }

    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerHTML = score.toString();
    }
    else if(this == currPlantTile){
        canCount--; // Yanlış tıklama durumunda can sayısı azaltılır.
        document.getElementById("can-count").innerHTML = canCount.toString(); // Can sayısını güncelle

        if(canCount <= 0){
            document.getElementById("score").innerHTML = "GAME OVER: " + score.toString();
            gameOver = true;
        }
    }
    
    // Oyun bittiğinde, yeniden başlatmak için setGame() fonksiyonunu çağırın
    if (gameOver) {
        setGame();
    }
}
