/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */
document.onkeydown=function(){keyInput()};
window.onload = onReady; // first function call

// the most important variables
var level = 2; // 1 = heart; 2 = mind
var gamemode = "end";
var sideNum = 1;

// if muted (true) music does not play
var mute = false;

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
var deadCounted = false;
var playerX;
var playerY;
var playerMoved = false;
var spawnpoint = 0;
var spawnpointSet = true;

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

var timelastusedone = 0;
var timelastusedtwo = 333;
var timelastusedthree = 2020;
var timelastusedfour = 73525;
var timelastusedfive = 5948373;

// the Boundaries to jump on
var mySquaresForJumping = [];

// for background
var img;
var started = false;
var videointroeasy;
var videoonetotwolow;
var videoonetotwohigh;
var videotwotoone;
var videothreetofourlow;
var videothreetofourhigh;

var videointrohard;
var video12;
var video23;
var video34
var video14;
var video41;
var video43;
var video32;
var video21;
var videohardend;
var videohardendtomenu;

var videoPlayed = true;
var countFrame = 0;
var seconds = 0;
var prevImg = 0;
var whichVideo = "no";

// for menu text
var menuopacityleft = 0.6;
var menuopacityright = 0.6;
var menutextgrowing = true;

// for end (result)
var resultTime = 0;
var ended = true;
var endTime;
var endvideoplayed = 0;
var endtomenu = true;
var endtomenushown = true;
var endtomenutime = 0

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

    // backgroundmusic easy
    backgroundmusicone = document.createElement('AUDIO');
    backgroundmusicone.src="level1/music/backgroundone.mp3";

    // import of all needed videos easy
    videointroeasy = document.createElement('video');
    videointroeasy.src =  "level1/videos/intro.mp4";
    videointroeasy.load();

    videoonetotwolow = document.createElement('video');
    videoonetotwolow.src =  "level1/videos/sideonetotwolow.mp4";
    videoonetotwolow.load();

    videoonetotwohigh = document.createElement('video');
    videoonetotwohigh.src =  "level1/videos/sideonetotwohigh.mp4";
    videoonetotwohigh.load();

    videotwotoone = document.createElement('video');
    videotwotoone.src =  "level1/videos/sidetwotoone.mp4";
    videotwotoone.load();

    videotwotothree = document.createElement('video');
    videotwotothree.src =  "level1/videos/sidetwotothree.mp4";
    videotwotothree.load();

    videothreetofourlow = document.createElement('video');
    videothreetofourlow.src =  "level1/videos/sidethreetofourlow.mp4";
    videothreetofourlow.load();

    videothreetofourhigh = document.createElement('video');
    videothreetofourhigh.src =  "level1/videos/sidethreetofourhigh.mp4";
    videothreetofourhigh.load();

    videofourtothree = document.createElement('video');
    videofourtothree.src =  "level1/videos/sidefourtothree.mp4";
    videofourtothree.load();

    // backgroundmusic hard
    backgroundmusictwo = document.createElement('AUDIO');
    backgroundmusictwo.src="level2/music/backgroundone.mp3";

    // import of all needed videos hard
    videointrohard = document.createElement('video');
    videointrohard.src =  "level2/videos/intro.mp4";
    videointrohard.load();

    video12 = document.createElement('video');
    video12.src =  "level2/videos/side1-2.mp4";
    video12.load();

    video23 = document.createElement('video');
    video23.src =  "level2/videos/side2-3.mp4";
    video23.load();

    video34 = document.createElement('video');
    video34.src =  "level2/videos/side3-4.mp4";
    video34.load();

    video41 = document.createElement('video');
    video41.src =  "level2/videos/side4-1.mp4";
    video41.load();

    video14 = document.createElement('video');
    video14.src =  "level2/videos/side1-4.mp4";
    video14.load();

    video43 = document.createElement('video');
    video43.src =  "level2/videos/side4-3.mp4";
    video43.load();

    video32 = document.createElement('video');
    video32.src =  "level2/videos/side3-2.mp4";
    video32.load();

    video21 = document.createElement('video');
    video21.src =  "level2/videos/side2-1.mp4";
    video21.load();

    videohardend = document.createElement('video');
    videohardend.src =  "level2/videos/end.mp4";
    videohardend.load();

    videohardendtomenu = document.createElement('video');
    videohardendtomenu.src =  "level2/videos/endtomenu.mp4";
    videohardendtomenu.load();

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

    // setting player position for onload
    if(!started){
        if(level==1){
            if(!mute)backgroundmusicone.play();
            if(sideNum==1){
                spawnpoint=0; // 0
            }else if(sideNum==2){
                spawnpoint=1; // 1
            }else if(sideNum==3){
                spawnpoint=4; // 4
            }else if(sideNum==4){
                spawnpoint=6; // 6
            }
        }else if(level==2){
            if(!mute)backgroundmusictwo.play();
            if(sideNum==1){
                spawnpoint=0; // 0
            }else if(sideNum==2){
                spawnpoint=1; // 1
            }else if(sideNum==3){
                spawnpoint=2; // 2
            }else if(sideNum==4){
                spawnpoint=3; // 3
            }
        }
        started=true;
    }

    if(gamemode=="menu"){
        if(menuopacityleft<=0.3){
            menutextgrowing=true;
        }else if(menuopacityleft>=0.9){
            menutextgrowing=false;
        }
        if(menutextgrowing){
            menuopacityleft+=0.005;
            menuopacityright-=0.005;
        }else{
            menuopacityleft-=0.005;
            menuopacityright+=0.005;
        }
        img = new Image();
        img.src = "mainimages/menu.jpg";
        ctx.drawImage(img, 0, 0);
        ctx.font = "normal 41px DINPro";
        ctx.fillStyle = "rgba(255, 255, 255, " + menuopacityleft + ")";
        ctx.fillText("press left to play with your will", 205, 850);
        ctx.fillStyle = "rgba(255, 255, 255, " + menuopacityright + ")";
        ctx.fillText("press right to play with your mind", 1055, 850);
    }else if(gamemode=="intro"){
        if(!introStarted){
            if(level==1){
                countFrame = seconds+8;
            }else if(level==2){
                countFrame = seconds+9;
            }
            introStarted = true;
        }
        if(level==1){
        videointroeasy.play();
        ctx.drawImage(videointroeasy, 0, 0);
        }else if(level==2){
        videointrohard.play();
        ctx.drawImage(videointrohard, 0, 0);
        }
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
            if(level==1){
                if(sideNum==1){ // on easy level
                    if(playerX>=1121 && playerX<=1127 && playerY<=703 && playerY>=700){
                        sideNum++;
                        countFrame = seconds+2;
                        actFrame = countFrame;
                        videoPlayed = false;
                        whichVideo = "onetotwolow";
                        spawnpoint = 1;
                        resetUsedVariables();
                    }else if(playerX>=1121 && playerX<=1127 && playerY<=467 && playerY>=465){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "onetotwohigh";
                        spawnpoint = 3;
                        resetUsedVariables();
                    }
                }else if(sideNum==2){
                    if(playerX>=698 && playerX<=700 && playerY<=586 && playerY>=582){
                        sideNum--;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "twotoone";
                        spawnpoint = 2;
                        resetUsedVariables();
                    }else if(playerX>=1122 && playerX<=1130 && playerY<=413 && playerY>=410){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "twotothree";
                        spawnpoint = 4;
                        resetUsedVariables();
                    }
                }else if(sideNum==3){
                    if(playerX>=1123 && playerX<=1135 && playerY<=563 && playerY>=560){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "threetofourlow";
                        spawnpoint = 5;
                        resetUsedVariables();
                    }else if(playerX>=1123 && playerX<=1128 && playerY<=433 && playerY>=430){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "threetofourhigh";
                        spawnpoint = 6;
                        resetUsedVariables();
                    }
                }else if(sideNum==4){
                    if(playerX>=1086 && playerX<=1090 && playerY<=166 && playerY>=157){
                        gamemode="end";
                    }
                }
            }else if(level==2){ // on hard level
                if(sideNum==1){
                    if(playerX>=1098 && playerX<=1105 && playerY<=667 && playerY>=664){
                        sideNum++;
                        countFrame = seconds+2;
                        actFrame = countFrame;
                        videoPlayed = false;
                        whichVideo = "onetotwo";
                        spawnpoint = 1;
                        resetUsedVariables();
                    }else if(playerX>=723 && playerX<=729 && playerY<=725 && playerY>=722){
                        sideNum=4;
                        countFrame = seconds+2;
                        actFrame = countFrame;
                        videoPlayed = false;
                        whichVideo = "onetofour";
                        spawnpoint = 5;
                        resetUsedVariables();
                    }
                }else if(sideNum==2){
                    if(playerX>=1097 && playerX<=1102 && playerY<=690 && playerY>=685){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "twotothree";
                        spawnpoint = 2;
                        resetUsedVariables();
                    }else if(playerX>=723 && playerX<=729 && playerY<=460 && playerY>=455){
                        sideNum--;
                        countFrame = seconds+2;
                        actFrame = countFrame;
                        videoPlayed = false;
                        whichVideo = "twotoone";
                        spawnpoint = 4;
                        resetUsedVariables();
                    }
                }else if(sideNum==3){
                    if(playerX>=1095 && playerX<=1102 && playerY<=425 && playerY>=423){
                        sideNum++;
                        countFrame = seconds+2;
                        videoPlayed = false;
                        whichVideo = "threetofour";
                        spawnpoint = 3;
                        resetUsedVariables();
                    }
                }else if(sideNum==4){
                    if(playerX>=1078 && playerX<=1082 && playerY<=211 && playerY>=200){
                        gamemode="end";
                    }else if(playerX>=722 && playerX<=726 && playerY<=687 && playerY>=684){
                        sideNum--;
                        countFrame = seconds+2;
                        actFrame = countFrame;
                        videoPlayed = false;
                        whichVideo = "fourtothree";
                        spawnpoint = 6;
                        resetUsedVariables();
                    }
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
            endTime = seconds+5;
            endvideoplayed=seconds;
            ended=false;
        }
        if(level==1){
            img = new Image();
            img.src = "level1/images/end.jpg";
            ctx.drawImage(img, 0, 0);

            ctx.fillStyle = "#ffffff";
            ctx.font = "normal 41px DINPro";
            ctx.fillText("time: "+ Math.round(resultTime)+" seconds", 200, canvas.height/2);
            ctx.fillText("lifes: "+ playerCounter, 200, canvas.height/2+60);

            if(endTime+25<=seconds)window.location.reload();
        }else if(level==2){
            if(endvideoplayed+5>=seconds){
              videohardend.play();
              ctx.drawImage(videohardend, 0, 0);
            }else if(endTime+30>=seconds){
                img = new Image();
                img.src = "level2/images/end.jpg";
                ctx.drawImage(img, 0, 0);

                ctx.fillStyle = "#444444";
                ctx.font = "normal 41px DINPro";
                ctx.fillText("time: "+ Math.round(resultTime)+" seconds", 1190, 375);
                ctx.fillText("lifes: "+ playerCounter, 1190, 440);
            }else{
                if(endtomenu){
                    endtomenutime=seconds;
                    endtomenu=false;
                }
                if(endtomenutime+1>=seconds){
                    videohardendtomenu.play();
                    ctx.drawImage(videohardendtomenu, 0, 0);
                }else{
                    img = new Image();
                    img.src = "mainimages/menu.jpg";
                    ctx.drawImage(img, 0, 0);
                    window.location.reload();
                }
            }
        }
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
    if(gamemode=="menu"){
        switch (e.keyCode) {
            case 37: // left arrow
                level = 1;
                gamemode="intro";
                break;
            case 39: // right arrow
                level = 2;
                gamemode="intro";
                break;
            default: // if any key pressed start intro video
                //console.log(e);
                break;
        }
    }else if(gamemode=="play" && videoPlayed==true){
        switch (e.keyCode) {
            case 37: // left arrow
                playDir = "a";
                buttonPressed=true;
                break;
            case 38: // arrow up
                playDir = "w";
                buttonPressed=true;
                break;
            case 39: // right arrow
                playDir = "d";
                buttonPressed=true;
                break;
            case 40: // arrow down
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
                if(level==1){
                window.location.reload();
                }else if(level==2){
                  endTime = 10;
                }
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
