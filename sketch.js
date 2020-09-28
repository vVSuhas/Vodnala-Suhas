var ball,img,paddle;
function preload() {
ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200, 200)
  paddle = createSprite(25,200)
  ball.addImage(ballImage);
  paddle.addImage(paddleImage)
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  ball.velocityX = 9
  ball.velocityY = -9
  

  /* give the ball an initial velocity of 9 in the X direction */
  edges = createEdgeSprites();

}

function draw() {
  background(205,153,0);
  ball.bounceOff(edges)
  ball.bounceOff(paddle)
   paddle.y = mouseY
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

