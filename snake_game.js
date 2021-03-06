
// GAME_PIXEL_COUNT is the pixels on horizontal or vertical axis of the game board (SQUARE).


const GAME_PIXEL_COUNT = 40;
const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);


let totalFoodAte = 0;
let totalDistanceTravelled = 0;


const gameContainer = document.getElementById("gameContainer");




const createGameBoardPixels = () => {
  
  for (let i = 1; i <= SQUARE_OF_GAME_PIXEL_COUNT; ++i) {
    gameContainer.innerHTML = `${gameContainer.innerHTML} <div class="gameBoardPixel" id="pixel${i}"></div>`;
  }
};


const gameBoardPixels = document.getElementsByClassName("gameBoardPixel");



let currentFoodPostion = 0;
const createFood = () => {
  
  gameBoardPixels[currentFoodPostion].classList.remove("food");
  

  
  currentFoodPostion = Math.random();

  currentFoodPostion = Math.floor(
    currentFoodPostion * SQUARE_OF_GAME_PIXEL_COUNT
  );
  gameBoardPixels[currentFoodPostion].classList.add("food");

};


let currentFoodPostion2 = 0;
const createFood2 = () => {
  
  gameBoardPixels[currentFoodPostion2].classList.remove("food2");
  

  
  currentFoodPostion2 = Math.random();

  currentFoodPostion2 = Math.floor(
    currentFoodPostion2 * SQUARE_OF_GAME_PIXEL_COUNT
  );
  gameBoardPixels[currentFoodPostion2].classList.add("food2");

};

let currentFoodPostion3 = 0;
const createFood3 = () => {
  
  gameBoardPixels[currentFoodPostion3].classList.remove("food3");
  

 
  currentFoodPostion3 = Math.random();

  currentFoodPostion3 = Math.floor(
    currentFoodPostion3 * SQUARE_OF_GAME_PIXEL_COUNT
  );
  gameBoardPixels[currentFoodPostion3].classList.add("food3");

};


let currentFoodPostion4 = 0;
const createFood4 = () => {
  
  gameBoardPixels[currentFoodPostion4].classList.remove("food4");
  

 
  currentFoodPostion4 = Math.random();

  currentFoodPostion4 = Math.floor(
    currentFoodPostion4 * SQUARE_OF_GAME_PIXEL_COUNT
  );
  gameBoardPixels[currentFoodPostion4].classList.add("food4");

};





/// THE SNAKE:


const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;


let snakeCurrentDirection = RIGHT_DIR;

const changeDirection = newDirectionCode => {
  // Change the direction of the snake
  if (newDirectionCode == snakeCurrentDirection) return;

  if (newDirectionCode == LEFT_DIR && snakeCurrentDirection != RIGHT_DIR) {
    snakeCurrentDirection = newDirectionCode;
  } else if (newDirectionCode == UP_DIR && snakeCurrentDirection != DOWN_DIR) {
    snakeCurrentDirection = newDirectionCode;
  } else if (
    newDirectionCode == RIGHT_DIR &&
    snakeCurrentDirection != LEFT_DIR
  ) {
    snakeCurrentDirection = newDirectionCode;
  } else if (newDirectionCode == DOWN_DIR && snakeCurrentDirection != UP_DIR) {
    snakeCurrentDirection = newDirectionCode;
  }
};


let currentSnakeHeadPosition = SQUARE_OF_GAME_PIXEL_COUNT / 2;


let snakeLength = 1000;


const moveSnake = () => {
  switch (snakeCurrentDirection) {
    case LEFT_DIR:
      --currentSnakeHeadPosition;
      const isSnakeHeadAtLastGameBoardPixelTowardsLeft =
        currentSnakeHeadPosition % GAME_PIXEL_COUNT == GAME_PIXEL_COUNT - 1 ||
        currentSnakeHeadPosition < 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsLeft) {
        currentSnakeHeadPosition = currentSnakeHeadPosition + GAME_PIXEL_COUNT;
      }
      break;
    case UP_DIR:
      currentSnakeHeadPosition = currentSnakeHeadPosition - GAME_PIXEL_COUNT;
      const isSnakeHeadAtLastGameBoardPixelTowardsUp =
        currentSnakeHeadPosition < 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsUp) {
        currentSnakeHeadPosition =
          currentSnakeHeadPosition + SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;
    case RIGHT_DIR:
      ++currentSnakeHeadPosition;
      const isSnakeHeadAtLastGameBoardPixelTowardsRight =
        currentSnakeHeadPosition % GAME_PIXEL_COUNT == 0;
      if (isSnakeHeadAtLastGameBoardPixelTowardsRight) {
        currentSnakeHeadPosition = currentSnakeHeadPosition - GAME_PIXEL_COUNT;
      }
      break;
    case DOWN_DIR:
      currentSnakeHeadPosition = currentSnakeHeadPosition + GAME_PIXEL_COUNT;
      const isSnakeHeadAtLastGameBoardPixelTowardsDown =
        currentSnakeHeadPosition > SQUARE_OF_GAME_PIXEL_COUNT - 1;
      if (isSnakeHeadAtLastGameBoardPixelTowardsDown) {
        currentSnakeHeadPosition =
          currentSnakeHeadPosition - SQUARE_OF_GAME_PIXEL_COUNT;
      }
      break;
    default:
      break;
  }

  
    

  let nextSnakeHeadPixel = gameBoardPixels[currentSnakeHeadPosition];

  // Kill snake if it bites itself:
  if (nextSnakeHeadPixel.classList.contains("snakeBodyPixel")) {
  
    clearInterval(moveSnakeInterval);
    if (
      !alert(
        `You have ate ${totalFoodAte} food`
        
      )
     
    )

        window.location.reload();
      
  
}
  
  nextSnakeHeadPixel.classList.add("snakeBodyPixel");

  setTimeout(() => {
    nextSnakeHeadPixel.classList.remove("snakeBodyPixel");
  }, snakeLength);

  
  totalDistanceTravelled++;
  
  
  


/////////////////



  if (currentSnakeHeadPosition == currentFoodPostion) {
    
    
    totalFoodAte++;
    
    
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;

    
    
    snakeLength = snakeLength + 100;
    
    createFood();
  }

  if (currentSnakeHeadPosition == currentFoodPostion2) {
    
    
    totalFoodAte++;
    
    
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;

   
    
    snakeLength = snakeLength + 100;
    var moveSnakeInterval = setInterval(moveSnake, 400);

    createFood2();
  }


  if (currentSnakeHeadPosition == currentFoodPostion3) {
    
    
    totalFoodAte++;
    
    
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;

    
    
    snakeLength = snakeLength - 300;
    

    createFood3();
  }

  if (currentSnakeHeadPosition == currentFoodPostion4) {
    
    
    totalFoodAte++;
    
    
    document.getElementById("pointsEarned").innerHTML = totalFoodAte;

    snakeLength = snakeLength + 100;

    var moveSnakeInterval = clearInterval(moveSnake);
    
    createFood4();

  }


};











    
 createGameBoardPixels();

 createFood();
 createFood2();
 createFood3();
 createFood4();
 


 var moveSnakeInterval = setInterval(moveSnake, 80);

 
 addEventListener("keydown", e => changeDirection(e.keyCode));
    
 document.getElementById("start").addEventListener("click", startGame())
    

 //createFood();
 //createFood2();
 //createFood3();
 //createFood4();

 

