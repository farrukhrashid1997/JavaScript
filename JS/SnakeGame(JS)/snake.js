const CANVAS_BORDER_COLOUR = 'black'
const CANVAS_BACKGROUND_COLOUR = 'white' 
const FOOD_COLOUR = 'red';
const FOOD_BORDER_COLOUR = "darkred";

const gameCanvas = document.getElementById("gameCanvas")
const ctx = gameCanvas.getContext("2d")

const GAME_SPEED = 100;

let dx = 10;
let dy = 0;

let foodX; 
let foodY;

let score = 0;

let snake = [{x: 150, y:150}, {x:140, y:150}, {x:130, y:150}, {x:120, y:150}, {x:110, y:150}]

createFood();

main();

document.addEventListener("keydown", changeDirection)

function main() {
    setTimeout(function onTick(){
        if (didGameEnd()){
            return
        }
        else{
        clearCanvas();
        drawFood();
        drawSnake();
        advanceSnake();
        main()}
    }, GAME_SPEED)
}


function drawSnakePart(snakePart){
    ctx.fillStyle = 'lightgreen';
    ctx.strokestyle = 'darkgreen';
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function changeDirection(event){
    const LEFT_KEY = 37
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;

    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;
    const goingLeft = dx === -10;
    
    if(keyPressed==LEFT_KEY && !goingRight){
        dx = -10;
        dy = 0;
    }

    if(keyPressed==RIGHT_KEY && !goingLeft){
        dx = 10;
        dy = 0;
    }

    if(keyPressed==UP_KEY && !goingDown){
        dx = 0;
        dy = -10;
    }

    if(keyPressed==DOWN_KEY && !goingUp){
        dx = 0;
        dy = 10;
    }
    }


function clearCanvas(){
    ctx.fillStyle = CANVAS_BACKGROUND_COLOUR;
    ctx.strokestyle = CANVAS_BORDER_COLOUR;
    ctx.fillRect(0,0, gameCanvas.width, gameCanvas.height);
    ctx.strokeRect(0,0, gameCanvas.width, gameCanvas.height);
}

function drawFood() {
    ctx.fillStyle = FOOD_COLOUR;
    ctx.strokestyle = FOOD_BORDER_COLOUR;
    ctx.fillRect (foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

function advanceSnake(){
    const head = {x:snake[0].x + dx, y:snake[0].y + dy};
    const didEatFood = snake[0].x === foodX && snake[0].y === foodY;
    if (didEatFood){
        score += 10;
        document.getElementById("score").innerHTML = " Score: " + score;
        createFood();
    }
    else {
        snake.pop()
    }
    snake.unshift(head);

}

function randomTen(min, max){
    return Math.round((Math.random() * (max-min) + min) / 10)*10 ;}

function createFood(){
    foodX = randomTen(0, gameCanvas.width - 10); 
    foodY = randomTen(0, gameCanvas.height -10);
    snake.forEach(function isFoodOnSnake(part){
    const foodIsOnSnake = part.x == foodX && part.y == foodY;
    if (foodIsOnSnake) createFood(); 
});
}

function didGameEnd(){
    for (let i = 4; i< snake.length; i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true
        }
        }

        const hitLeftwall = snake[0].x < 0;
        const hitRightWall = snake[0].x > gameCanvas.width - 10;
        const hitUpperWall  = snake[0].y < 0;
        const hitLowerWall = snake[0].y > gameCanvas.height - 10;


        return hitLeftwall || hitRightWall || hitUpperWall || hitLowerWall
    }


