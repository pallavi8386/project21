var canvas, redWall, yellowWall, greenWall, blueWall, box;
var music, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redWall = createSprite(150, 550, 100, 50);
    redWall.shapeColor = "red";

    yellowWall = createSprite(300, 550, 100, 50);
    yellowWall.shapeColor = "yellow";

    greenWall = createSprite(450, 550, 100, 50);
    greenWall.shapeColor = "green";

    blueWall = createSprite(600, 550, 100, 50);
    blueWall.shapeColor = "blue";

    //create box sprite and give velocity
    box = createSprite(round(random(20,750)), 150, 50,50);
    box.shapeColor = "white";
    box.velocityX = 5;
    box.velocityY = 8;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(redWall.isTouching(box) && box.bounceOff(redWall)){
        box.shapeColor = "red";
        music.play();
    }else if(yellowWall.isTouching(box) && box.bounceOff(yellowWall)){
        box.shapeColor = "yellow";
    }else if(greenWall.isTouching(box) && box.bounceOff(greenWall)){
        box.velocityX=0;
        box.velocityY=0;
        box.shapeColor = "green";
        music.stop();
    }else if(blueWall.isTouching(box) && box.bounceOff(blueWall)){
        box.shapeColor = "blue";
    }

    drawSprites();
}
