/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */
document.onkeydown=function(){keyInput()};
window.onload = onReady; // first function call

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
var myObjects = [];
var myBoundariesSideOne = [];
var myBoundariesSideTwo = [];
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
// for car parts
var myCar;

// Side Num
var sideNum = 1;


function onReady() {
    // your inicialization code here  ----------------------------------------------
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    frameCounter = 0;
    canvas.addEventListener('mousedown', pick);

    // setup world
    world = new b2World(
        new b2Vec2(0, 10)    //gravity
        ,  true              //allow sleep
    );

    draw();
    console.log("ready to go!");
} // end onReady()


// your drawing code here ---------------------------------------------------
function draw () {
    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    // for background
    ctx.fillStyle="#444444"; // dark gray
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    if(sideNum==1){ // Creating Side One
        if(myBoundariesSideOne.length<3){
            myBoundariesSideOne.push(new Box2DBondary(canvas.width / 2, 450, 200, 20, 0));
            myBoundariesSideOne.push(new Box2DBondary(300, 300, 100, 20, 0));
            myBoundariesSideOne.push(new Box2DBondary(200, 50, 50, 20, 0));
        }
        for (var i = 0; i < myBoundariesSideOne.length; i++) {
            myBoundariesSideOne[i].draw(ctx);
        }
    }else if(sideNum==2){ // Creating Side Two
        for(var z = 0;z < myBoundariesSideOne.length; z++){
            myBoundariesSideOne.splice(i,1);
        }
        if(myBoundariesSideTwo.length<3){
            myBoundariesSideTwo.push(new Box2DBondary(100, 50, 10, 50, 0));
            myBoundariesSideTwo.push(new Box2DBondary(300, 300, 10, 100, 0));
            myBoundariesSideTwo.push(new Box2DBondary(400, 200, 10, 70, 0));
        }   
        for (var ii = 0; ii < myBoundariesSideTwo.length; ii++) {
            myBoundariesSideTwo[ii].draw(ctx);
        }
    }
    // printing text in canvas
    ctx.fillStyle = "#bbbbbb";
    ctx.font = "normal 11px Roboto-Medium";

    ctx.fillText("Side number: "+ sideNum, 10, canvas.height-5);

    world.Step(
        1 / 60   //frame-rate
        ,  10       //velocity iterations
        ,  10       //position iterations
    );

    // frameRate calculating
    frameTime+= (thisFrameTime - frameTime) / filterStrength;
    lastLoop = thisLoop;
    var fpsOut = document.getElementById('frameRate');
    fpsOut.innerHTML = "current frame = " +frameCounter+ "   currente frame rate = "+(1000/frameTime).toFixed(1) + " fps";
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
    switch (e.keyCode) {
        case 37: // left arrow
            sideNum = 1;
            break;
        case 39: // right arrow
            sideNum = 2;
            break;
        default:
            sideNum = sideNum;
            break;    
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