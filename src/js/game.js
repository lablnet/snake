const snakeBoard = document.getElementById("snakeboard")
const ctx = snakeBoard.getContext("2d");

let foodX, foodY, dx = 10,  dy = 0, interval = 200, level = 0, scores = 0;
const DefaultSnake = [  
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},
];
let snake = DefaultSnake;
var start = false, Sound = true;

const levels = [
    // level 1
    [
        {}
    ],
    // level 2
    [
        {x: 100, y: 100}, {x: 90, y: 100}, {x: 90, y: 100}, {x: 80, y: 100}
    ],
    // level 3
    [
        //top
        {x: 310, y: 100}, {x: 300, y: 100}, {x: 290, y: 100}, {x: 280, y: 100}, {x: 270, y: 100}, {x: 260, y: 100},   {x: 250, y: 100}, {x: 240, y: 100}, {x: 230, y: 100}, {x: 220, y: 100}, {x: 210, y: 100}, {x: 200, y: 100}, {x: 190, y: 100}, {x: 180, y: 100}, {x: 170, y: 100}, {x: 160, y: 100}, {x: 150, y: 100}, {x: 140, y: 100}, {x: 130, y: 100}, {x: 120, y: 100}, {x: 110, y: 100},   {x: 100, y: 100}, {x: 90, y: 100},

        //bottom
        {x: 310, y: 300}, {x: 300, y: 300}, {x: 290, y: 300}, {x: 280, y: 300}, {x: 270, y: 300}, {x: 260, y: 300},   {x: 250, y: 300}, {x: 240, y: 300}, {x: 230, y: 300}, {x: 220, y: 300}, {x: 210, y: 300}, {x: 200, y: 300}, {x: 190, y: 300}, {x: 180, y: 300}, {x: 170, y: 300}, {x: 160, y: 300}, {x: 150, y: 300}, {x: 140, y: 300}, {x: 130, y: 300}, {x: 120, y: 300}, {x: 110, y: 300},   {x: 100, y: 300}, {x: 90, y: 300},
    ],

    // level 4
    [
        //top
       {x: 440, y: 100}, {x: 430, y: 100}, {x: 420, y: 100}, 
        {x: 410, y: 100}, {x: 400, y: 100}, {x: 390, y: 100}, {x: 380, y: 100}, {x: 370, y: 100}, {x: 360, y: 100}, {x: 350, y: 100}, {x: 340, y: 100}, {x: 330, y: 100}, {x: 320, y: 100},  {x: 310, y: 100}, {x: 300, y: 100}, {x: 290, y: 100}, {x: 280, y: 100}, {x: 270, y: 100}, {x: 260, y: 100},   {x: 250, y: 100}, {x: 240, y: 100}, {x: 230, y: 100}, {x: 220, y: 100}, {x: 210, y: 100}, {x: 200, y: 100}, {x: 190, y: 100}, {x: 180, y: 100}, {x: 170, y: 100}, {x: 160, y: 100}, {x: 150, y: 100}, {x: 140, y: 100}, {x: 130, y: 100}, {x: 120, y: 100}, {x: 110, y: 100},   {x: 100, y: 100}, {x: 90, y: 100}, {x: 80, y: 100}, {x: 70, y: 100},   {x: 60, y: 100}, {x: 50, y: 100}, 
        // left
        {x: 50, y: 150}, {x: 50, y: 160}, {x: 50, y: 170}, {x: 50, y: 180},
        {x: 50, y: 190}, {x: 50, y: 200}, {x: 50, y: 210}, {x: 50, y: 220}, {x: 50, y: 230}, {x: 50, y: 240}, {x: 50, y: 250}, {x: 50, y: 260}, {x: 50, y: 270}, {x: 50, y: 280}, {x: 50, y: 290},  {x: 50, y: 300},
        {x: 50, y: 310}, {x: 50, y: 320}, {x: 50, y: 330},  {x: 50, y: 340}, {x: 50, y: 350},
        // right
        {x: 440, y: 1440}, {x: 440, y: 160}, {x: 440, y: 170}, {x: 440, y: 180}, {x: 440, y: 190}, {x: 440, y: 200}, {x: 440, y: 210}, {x: 440, y: 220}, {x: 440, y: 230}, {x: 440, y: 240}, {x: 440, y: 250}, {x: 440, y: 260}, {x: 440, y: 270}, {x: 440, y: 280}, {x: 440, y: 290},  {x: 440, y: 300},
        {x: 440, y: 310}, {x: 440, y: 320}, {x: 440, y: 330},  {x: 440, y: 340}, {x: 440, y: 3440},
        //bottom
        {x: 440, y: 400}, {x: 430, y: 400}, {x: 420, y: 400}, 
        {x: 410, y: 400}, {x: 400, y: 400}, {x: 390, y: 400}, {x: 380, y: 400}, {x: 370, y: 400}, {x: 360, y: 400}, {x: 350, y: 400}, {x: 340, y: 400}, {x: 330, y: 400}, {x: 320, y: 400},  {x: 310, y: 400}, {x: 300, y: 400}, {x: 290, y: 400}, {x: 280, y: 400}, {x: 270, y: 400}, {x: 260, y: 400},   {x: 250, y: 400}, {x: 240, y: 400}, {x: 230, y: 400}, {x: 220, y: 400}, {x: 210, y: 400}, {x: 200, y: 400}, {x: 190, y: 400}, {x: 180, y: 400}, {x: 170, y: 400}, {x: 160, y: 400}, {x: 150, y: 400}, {x: 140, y: 400}, {x: 130, y: 400}, {x: 120, y: 400}, {x: 110, y: 400},   {x: 100, y: 400}, {x: 90, y: 400}, {x: 80, y: 400}, {x: 70, y: 400},   {x: 60, y: 400}, {x: 50, y: 400}, 
    ],
];

// Beep, function to generate beep sound.
function beep(freq, duration){
    if (Sound) {
        audioCtx = new AudioContext();
        var oscillator = audioCtx.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.value = freq;
        oscillator.connect(audioCtx.destination);
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + duration * 0.001);
    }
}

// Game screen borad.
const gameScreenBoard = (text = "You lose, game over") => {
    drawBoard();
    start = false;
    interval = 200;
    scores = 0;
    level = 0;
    snake = DefaultSnake;
    var w = snakeboard.width
    var h = snakeboard.height
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(w/3, h/3);
    ctx.lineTo(w/3, h-h/3);
    ctx.lineTo(w-w/4, h/2);
    ctx.lineTo(w/3, h/3);
    ctx.fillStyle = 'black';
    ctx.font = "30px Arial";
    ctx.textAlign = "left";
    ctx.fillText(text, 10, 50);
    ctx.fill();
}

// level
// draw level parts.
const drawlevelPart = (levelPart) => {
    ctx.fillStyle = "black"
    ctx.strokestyle = "black"
    ctx.fillRect(levelPart.x, levelPart.y, 10, 10);  
    ctx.strokeRect(levelPart.x, levelPart.y, 10, 10);
}

// draw the levels.
const drawlevel = () => {
    if (level >= 0) {
        levels[level].forEach(drawlevelPart);
    }
}

// snake
// draw snake parts.
const drawSnakePart = (snakePart) => {
    ctx.fillStyle = "lightblue"
    ctx.strokestyle = "darkblue"
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);  
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

// draw snake.
const drawSnake = () => {
    snake.forEach(drawSnakePart);
}

// draw a border around the canvas
const drawBoard = () => {
    ctx.fillStyle = "white";
    ctx.strokestyle = "blac";
    ctx.fillRect(0, 0, snakeBoard.width, snakeBoard.height);
    ctx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height);
}

// function to declear you win.
const youWin = () => {
    gameScreenBoard("You win");
}
// move the snake
const moveSnake = () => {
    const head = {x: snake[0].x + dx, y: snake[0].y + dy};
    snake.unshift(head);
    if (snake[0].x === foodX && snake[0].y === foodY) {
        // produce the sound beep.
        beep(540, 100);
        // Generate new food location
        generateFood();

        // increase the speed.
        interval -= 15;

        scores+= 1;
        
        if (scores == 10) {
            level++
            interval = 200;
        } else if (scores == 20) {
            level++
            interval = 200;
        } else if (scores == 30) {
            level++
            interval = 200;
        }
        
        
    } else {
        snake.pop();
    }   
}

// change the direction on mouse event.
const changeDirection = (event) => {
    // Mouse keys.
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    // key code
    const keyPressed = event.keyCode;
    const goingUp = dy === -10;
    const goingDown = dy === 10;
    const goingRight = dx === 10;  
    const goingLeft = dx === -10;
    if (keyPressed === LEFT_KEY && !goingRight)
    {    
        dx = -10;
        dy = 0;  
    }

    if (keyPressed === UP_KEY && !goingDown)
    {    
        dx = 0;
        dy = -10;
    }

    if (keyPressed === RIGHT_KEY && !goingLeft)
    {    
        dx = 10;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && !goingUp)
    {    
        dx = 0;
        dy = 10;
    }
}

// determine game ended?, snake collied with wall or self?
const hasGameEnded = () => {
    // self collision.
    for (let i = 2; i < snake.length; i++)
    {
        const hasCollided = snake[i].x === snake[0].x && snake[i].y === snake[0].y
        if (hasCollided) return true;
    }

    // wall collision.
    const hitLeftWall = snake[0].x < 0;
    const hitRightWall = snake[0].x > snakeboard.width - 10;
    const hitToptWall = snake[0].y < 0;
    const hitBottomWall = snake[0].y > snakeboard.height - 10;


    // level boundries collision.
    if (level >= 0) {
        for (let i = 0; i < levels[level].length; i++) {
            if (snake[0].x == levels[level][i].x && snake[0].y == levels[level][i].y) {
                return true
            };
        }
    }

    return hitLeftWall ||  hitRightWall || hitToptWall || hitBottomWall
}

// food section.
// get random location for food.
const randomFood = (min, max) => {  
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

// generate the food.
const generateFood = () => {  
    foodX = randomFood(0, snakeboard.width - 10);
    foodY = randomFood(0, snakeboard.height - 10);
    snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == foodX && part.y == foodY;
        if (has_eaten) generateFood();
    });
}

//draw food conves.
const drawFood = () => {
    ctx.fillStyle = 'red';
    ctx.strokestyle = 'red';
    ctx.fillRect(foodX, foodY, 10, 10);
    ctx.strokeRect(foodX, foodY, 10, 10);
}

// If food collied let's generate new ones.
const foodCollied = () => {
    let collied = false;

    // level boundries collision.
    if (level >= 0) {
        for (let i = 0; i < levels[level].length; i++) {
            if (foodX == levels[level][i].x && foodY == levels[level][i].y) {
                collied = true
            };
        }
    }
    // wall collision.
    const hitLeftWall = foodX < 0;
    const hitRightWall = foodX > snakeboard.width - 10;
    const hitToptWall = foodY < 0;
    const hitBottomWall = foodY > snakeboard.height - 10;
    collied = hitLeftWall ||  hitRightWall || hitToptWall || hitBottomWall;
    if (collied) generateFood();
    return;
}


// update score on display.
const updateScores = () => {
    let score = document.getElementById("score");
    score.innerHTML = scores;
}

// update level on display.
const updateLevel = () => {
    let levelDom = document.getElementById("level");
    levelDom.innerHTML = level + 1;
}

// init game
const init = () => {
    // user lose.
    if (hasGameEnded()) {
        gameScreenBoard("You lose.");
        beep(200, 50);
        return;
    }
    // user win.
    if (scores == 40) {
        youWin();
        return;
    }
    // automatically move the snake.
    setTimeout( () => {
        drawBoard();
        drawFood();
        moveSnake();
        drawlevel();    
        drawSnake();
        foodCollied();
        init();
        updateScores();
        updateLevel();
  }, interval);
}

// game init board
const gameInitBoard = () => {
    gameScreenBoard("Click anywhere to play");
}

// event lisner to handle key events.
document.addEventListener("keydown", changeDirection);

// inital game board.
gameInitBoard();

// init
snakeboard.addEventListener("click", (event) => {
    if (start == false) {
        beep(500, 50);
        init();
        generateFood();
        start = true;
    }
});

// handling sounds.
let sound = document.getElementById("sound");
sound.addEventListener("click", () => {
    if (Sound == false) {
        Sound = true;
        sound.style.color = "green";
    } else {
        Sound = false;
        sound.style.color = "red";
    }
});
