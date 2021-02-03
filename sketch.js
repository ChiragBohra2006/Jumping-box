var canvas;
var music;
var block1, block2, block3, block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(600, 400);

    ball = createSprite(300, 100, 25, 25);
    ball.x = Math.round(random(20, 550));

    ball.velocityX = Math.round(random(5,8));
    ball.velocityY = Math.round(random(5,8));

    block1 = createSprite(75, 380, 140, 25);
    block1.shapeColor = "orange";

    block2 = createSprite(225, 380, 140, 25);
    block2.shapeColor = "red";

    block3 = createSprite(375, 380, 140, 25);
    block3.shapeColor = "green";
    
    block4 = createSprite(525, 380, 140, 25);
    block4.shapeColor = "blue";

    topEdge = createSprite(300, 0, 600, 1);

    leftEdge = createSprite(0, 200, 1, 600);

    rightEdge = createSprite(600, 200, 1, 600);

    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));


   
   
    ball.bounceOff(topEdge);
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    
    

   

    if(ball.isTouching(block1) && ball.bounceOff(block1))
    {
        
        ball.shapeColor = "orange";
        music.play();
        
    }

    if(ball.isTouching(block2))
    {
        ball.shapeColor = "red";
        music.pause();
        ball.velocityX = 0;
        ball.velocityY = 0;
        
    }

    if(ball.isTouching(block3))
    {
        ball.shapeColor = "green";
    }

    if(ball.isTouching(block4))
    {
        ball.shapeColor = "blue";
    }
    
    ball.bounceOff(block1);
    ball.bounceOff(block3);
    ball.bounceOff(block4);

drawSprites();
 
}
