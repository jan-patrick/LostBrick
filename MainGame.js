/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */
document.onkeydown=function(){keyInput()};
window.onload = onReady; // first function call

// the most important variables
var gamemode = "play";
var sideNum = 1;

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
var timeSet = false;
var playedSeconds;

// box2D world
var world;
var SCALE = 30;

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

// player
var myPlayers = [];
var playerCounter = 0;
var playerX;
var playerY;
var playerMoved = false;
var spawnpoint = 0;

// player direction
var playDir = "no";
var prevDir = "no";
var playerOnGround = true;
var jumpyTime;

// player control control variables
var lastusedone = "here";
var lastusedtwo = "could";
var lastusedthree = "be";
var lastusedfour = "your";
var lastusedfive = "advertising";
var buttonPressed = false;

// the Boundaries to jump on
var mySquaresForJumping = [];

// for background
var img;
var videomenu;
var videointro;
var videoonetotwolow;
var videoonetotwohigh;
var videotwotoone;
var videothreetofourlow;
var videothreetofourhigh;
var videoPlayed = true;
var countFrame = 0;
var seconds = 0;
var prevImg = 0;
var whichVideo = "no";

// for menu text
var menuopacity = 0.3;
var menutextgrowing = true;

// for end (result)
var resultTime = 0;
var ended = true;
var endTime;

// for intro
var introStarted = false;

// for rain
var myRain = [];
var itisraining = false;

function onReady() {
    // your inicialization code here  ----------------------------------------------
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    frameCounter = 0;
    canvas.addEventListener('mousedown', pick);

    // for testing and setting start side manuell
    if(sideNum==1){
        spawnpoint=0; // 0
    }else if(sideNum==2){
        spawnpoint=1; // 1
    }else if(sideNum==3){
        spawnpoint=4; // 4
    }else if(sideNum==4){
        spawnpoint=6; // 6
    }

    // backgroundmusic
    backgroundmusicone = document.createElement('AUDIO');
    backgroundmusicone.src="music/backgroundone.mp3";
    //backgroundmusicone.play();

    // import of all needed videos
    videointro = document.createElement('video');
    videointro.src =  "videos/intro.mp4";
    videointro.load();

    videoonetotwolow = document.createElement('video');
    videoonetotwolow.src =  "videos/sideonetotwolow.mp4";
    videoonetotwolow.load();

    videoonetotwohigh = document.createElement('video');
    videoonetotwohigh.src =  "videos/sideonetotwohigh.mp4";
    videoonetotwohigh.load();

    videotwotoone = document.createElement('video');
    videotwotoone.src =  "videos/sidetwotoone.mp4";
    videotwotoone.load();

    videotwotothree = document.createElement('video');
    videotwotothree.src =  "videos/sidetwotothree.mp4";
    videotwotothree.load();

    videothreetofourlow = document.createElement('video');
    videothreetofourlow.src =  "videos/sidethreetofourlow.mp4";
    videothreetofourlow.load();

    videothreetofourhigh = document.createElement('video');
    videothreetofourhigh.src =  "videos/sidethreetofourhigh.mp4";
    videothreetofourhigh.load();

    videofourtothree = document.createElement('video');
    videofourtothree.src =  "videos/sidefourtothree.mp4";
    videofourtothree.load();

    playerX = 500;
    playerY = 500;

    // setup world
    world = new b2World(
        new b2Vec2(0, 0)    //gravity
        ,  true              //alloww sleep
    );

    if(godmode==false){    // collision listener
    var listener = new Box2D.Dynamics.b2ContactListener;
    listener.BeginContact = function (contact) {
        var a = contact.GetFixtureA().GetBody().GetUserData();
        var b = contact.GetFixtureB().GetBody().GetUserData();
        // between the particles
        if((a instanceof Box2DBox && b instanceof Box2DBondary)||(a instanceof Box2DBondary && b instanceof Box2DBox)) {
            jumpingAllowed();
        }
    };
    world.SetContactListener(listener);
  }

    draw();
    console.log("Go Franklin, go!");
} // end onReady()


// your drawing code here ---------------------------------------------------
function draw () {
    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    seconds = new Date().getTime() / 1000;
    if(gamemode=="menu"){
        if(menuopacity<=0.3){
            menutextgrowing=true;
        }else if(menuopacity>=1){
            menutextgrowing=false;
        }
        if(menutextgrowing){
            menuopacity+=0.005;
        }else{menuopacity-=0.005;
        }
        img = new Image();
        img.src = "images/menu.jpg";
        ctx.drawImage(img, 0, 0);
        ctx.fillStyle = "rgba(255, 255, 255, " + menuopacity + ")";
        ctx.font = "normal 41px DINPro";
        ctx.fillText("press any key to start", 600, 800);
    }else if(gamemode=="intro"){
        if(!introStarted){
            countFrame = seconds+8;
            introStarted = true;
        }
        videointro.play();
        ctx.drawImage(videointro, 0, 0);
        if(countFrame-5<= seconds)itisraining = true;
        if(countFrame<= seconds)gamemode = "play";
    }else if(gamemode=="play"){
        if(!timeSet){
            playedSeconds=seconds;
            timeSet=true;
        }
        // for background
        //ctx.fillStyle="#444444"; // dark gray
        //ctx.fillRect(0, 0, canvas.width, canvas.height);

        // if square is turned around fully go to start / last page
        if(sideNum>=5){
            sideNum=1;
        }else if(sideNum<=0){
            sideNum=4;
        }
        itisraining = true;

        // for background
        Box2DBackground(sideNum);
        Box2DSide(sideNum);
        Box2DPlayer(sideNum);
        PlayerMovement(playDir, sideNum);

        if(videoPlayed==true){
            playerX = myPlayers[0].getXpos();
            playerY = myPlayers[0].getYpos();
        }
        Box2DRain();

        // change side if player reached right plattform
        if(videoPlayed == true){
            if(sideNum==1){
                if(playerX>=1121 && playerX<=1127 && playerY<=703 && playerY>=700){
                    sideNum++;
                    countFrame = seconds+2;
                    actFrame = countFrame;
                    videoPlayed = false;
                    whichVideo = "onetotwolow";
                    spawnpoint = 1;
                }else if(playerX>=1121 && playerX<=1127 && playerY<=467 && playerY>=465){
                    sideNum++;
                    countFrame = seconds+2;
                    videoPlayed = false;
                    whichVideo = "onetotwohigh";
                    spawnpoint = 3;
                }
            }else if(sideNum==2){
                if(playerX>=698 && playerX<=700 && playerY<=586 && playerY>=582){
                    sideNum--;
                    countFrame = seconds+2;
                    videoPlayed = false;
                    whichVideo = "twotoone";
                    spawnpoint = 2;
                }else if(playerX>=1122 && playerX<=1130 && playerY<=413 && playerY>=410){
                    sideNum++;
                    countFrame = seconds+2;
                    videoPlayed = false;
                    whichVideo = "twotothree";
                    spawnpoint = 4;
                }
            }else if(sideNum==3){
                if(playerX>=1123 && playerX<=1135 && playerY<=563 && playerY>=560){
                    sideNum++;
                    countFrame = seconds+2;
                    videoPlayed = false;
                    whichVideo = "threetofourlow";
                    spawnpoint = 5;
                }else if(playerX>=1123 && playerX<=1128 && playerY<=433 && playerY>=430){
                    sideNum++;
                    countFrame = seconds+2;
                    videoPlayed = false;
                    whichVideo = "threetofourhigh";
                    spawnpoint = 6;
                }
            }else if(sideNum==4){
                if(playerX>=1086 && playerX<=1090 && playerY<=166 && playerY>=157){
                    gamemode="end";
                }
            }
        }
        resultTime = seconds-playedSeconds;

        // printing text in canvas
        ctx.fillStyle = "#bbbbbb";
        ctx.font = "normal 11px DINPro";

        //ctx.fillText("Raindrops: "+ myRain.length, 10, canvas.height-165);
        //ctx.fillText("countFrame: "+ countFrame, 10, canvas.height-145);
        //ctx.fillText("time playing: "+ resultTime, 10, canvas.height-125);
        //ctx.fillText("X-Position: "+ playerX, 10, canvas.height-105);
        //ctx.fillText("Y-Position: "+ playerY, 10, canvas.height-85);
        //ctx.fillText("Side number: "+ sideNum, 10, canvas.height-65);
        //ctx.fillText("Square number: "+ playerCounter, 10, canvas.height-45);
        //ctx.fillText("current frame: "+ frameCounter, 10, canvas.height-25);
        //ctx.fillText("frame rate: " +(1000/frameTime)+ " fps", 10, canvas.height-5);

    }else if(gamemode=="end"){
        if(ended){
            endTime = seconds+=3;
            ended=false;
        }
        img = new Image();
        img.src = "images/sidefour.jpg";
        ctx.drawImage(img, 0, 0);

        Box2DSide(sideNum);
        Box2DPlayer(sideNum);

        ctx.fillStyle = "#ffffff";
        ctx.font = "normal 41px DINPro";
        ctx.fillText("time: "+ Math.round(resultTime)+" seconds", 400, canvas.height/2);
        ctx.fillText("lifes: "+ playerCounter, 400, canvas.height/2+40);
        if(endTime+27<=seconds)gamemode="menu";
    }

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
    if(gamemode=="menu"){
        switch (e.keyCode) {
            default: // if any key pressed start intro video
                gamemode="intro";
                break;
        }
    }else if(gamemode=="play" && videoPlayed==true){
        switch (e.keyCode) {
            case 65: // a
                playDir = "a";
                buttonPressed=true;
                break;
            case 87: // w
                playDir = "w";
                buttonPressed=true;
                break;
            case 68: // d
                playDir = "d";
                buttonPressed=true;
                break;
            case 83: // s
                playDir = "s";
                buttonPressed=true;
                break;
            default:
                sideNum = sideNum;
                buttonPressed=true;
                //console.log(e);
                break;
        }
    }else if(gamemode=="end" && endTime<=seconds){
        switch (e.keyCode) {
            default: // if any key pressed go to menu by reloading and refreshing the complete game / document
                window.location.reload();
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
