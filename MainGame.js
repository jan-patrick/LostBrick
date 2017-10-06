/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */
document.onkeydown=function(){keyInput()};
window.onload = onReady; // first function call

// test mode
var godmode = false;

// mouse position any time
var mouseX, mouseY;

var frameCounter;
var canvas;
var ctx;
// for frame rate
var filterStrength = 20;
var frameTime = 0, lastLoop = new Date, thisLoop;

// box2D world
var world;
var SCALE = 30;

// for animations


// box2D variables
var   b2Vec2 = Box2D.Common.Math.b2Vec2
    , b2BodyDef = Box2D.Dynamics.b2BodyDef
    , b2Body = Box2D.Dynamics.b2Body
    , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
    , b2Fixture = Box2D.Dynamics.b2Fixture
    , b2World = Box2D.Dynamics.b2World
    , b2MassData = Box2D.Collision.Shapes.b2MassData
    , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
    , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
    , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    , revoluteJointDef =  Box2D.Dynamics.Joints.b2RevoluteJointDef
    ;

// Side Num
var sideNum = 1;

// player
var myPlayers = [];
var playerCounter = 0;
var playerX;
var playerY;
// player direction
var playDir = "no";
var prevDir = "no";

// the Boundaries to jump on
var mySquaresForJumping = [];

// for background
var img;
var videoonetotwo;
var videotwotoone;
var videoPlayed = true;
var countFrame = 0;
var seconds = 0;
var prevImg = 0;
var whichVideo = "no";

function onReady() {
    // your inicialization code here  ----------------------------------------------
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    frameCounter = 0;
    canvas.addEventListener('mousedown', pick);

    // backgroundmusic
    backgroundmusicone = document.createElement('AUDIO');
    backgroundmusicone.src="music/backgroundone.mp3";
    //backgroundmusicone.play();

    // import of all needed videos
    videoonetotwo = document.createElement('video');
    videoonetotwo.src =  "videos/sideonetotwo.mp4";
    videoonetotwo.load();

    videotwotoone = document.createElement('video');
    videotwotoone.src =  "videos/sidetwotoone.mp4";
    videotwotoone.load();

    playerX = 500;
    playerY = 500;

    // setup world
    world = new b2World(
        new b2Vec2(0, 0)    //gravity
        ,  true              //allow sleep
    );

    draw();
    console.log("Go Franklin, go!");
} // end onReady()


// your drawing code here ---------------------------------------------------
function draw () {
    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    seconds = new Date().getTime() / 1000;
    // for background
    //ctx.fillStyle="#444444"; // dark gray
    //ctx.fillRect(0, 0, canvas.width, canvas.height);

    // if square is turned around fully go to start / last page
    if(sideNum>=5){
        sideNum=1;
    }else if(sideNum<=0){
        sideNum=4;
    }

    // for background
    Box2DBackground(sideNum);
    Box2DSide(sideNum);
    Box2DPlayer(sideNum);
    PlayerMovement(playDir, sideNum); 
    
    playerX = myPlayers[0].getXpos();
    playerY = myPlayers[0].getYpos();

    // change side if player reached right plattform
    if(videoPlayed == true){
        if(sideNum==1){
            if(playerX>=1123 && playerX<=1127 && playerY<=703 && playerY>=700){
                sideNum++;
                countFrame = seconds+2;
                videoPlayed = false;
                whichVideo = "onetotwo";
            }
        }else if(sideNum==2){
            if(playerX>=698 && playerX<=700 && playerY<=586 && playerY>=582){
                sideNum--;
                countFrame = seconds+2;
                videoPlayed = false;
                whichVideo = "twotoone";
            }
        }    
    }

    // printing text in canvas
    ctx.fillStyle = "#bbbbbb";
    ctx.font = "normal 11px Roboto-Medium";

    ctx.fillText("countFrame: "+ countFrame, 10, canvas.height-145);
    ctx.fillText("Seconds: "+ seconds, 10, canvas.height-125);
    ctx.fillText("X-Position: "+ playerX, 10, canvas.height-105);
    ctx.fillText("Y-Position: "+ playerY, 10, canvas.height-85);
    ctx.fillText("Side number: "+ sideNum, 10, canvas.height-65);
    ctx.fillText("Square number: "+ playerCounter, 10, canvas.height-45);
    ctx.fillText("current frame: "+ frameCounter, 10, canvas.height-25);
    ctx.fillText("frame rate: " +(1000/frameTime)+ " fps", 10, canvas.height-5);

    world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );

    // frameRate calculating
    frameTime+= (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;
    //var fpsOut = document.getElementById('frameRate');
    //fpsOut.innerHTML = "current frame = " +frameCounter+ "   currente frame rate = "+(1000/frameTime).toFixed(1) + " fps";
    frameCounter += 1;
    requestAnimFrame(draw);
}



// for events  ---------------------------------------------------
function pick(event) {
    mouseX = event.layerX;
    mouseY = event.layerY;
    //console.log("mouse x = " + mouseX + "   mouse y = " + mouseY);
}

// changeing the Sides
function keyInput(e) {
    e = e || window.event;
    if(godmode){
        switch (e.keyCode) {
            case 37: // left arrow
                sideNum--;
                break;
            case 39: // right arrow
                sideNum++;
                countFrame = seconds+2;
                videoPlayed = false;
                break;
        }
    }
    if(videoPlayed==true){    
        switch (e.keyCode) {            
            case 65: // a
                playDir = "a";
                break;
            case 87: // w
                playDir = "w";
                break;
            case 68: // d
                playDir = "d";
                break;
            case 83: // s
                playDir = "s";
                break;                        
            default:
                sideNum = sideNum;
                //console.log(e);
                break;    
        }
    }    
}

// for animation request  ---------------------------------------------------
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
        };
})();