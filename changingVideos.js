/**
 * Created by franklinhc on 9/12/15.
 */
window.onload = onReady; // first function call

// mouse position any time
var mouseX, mouseY;

var frameCounter;
var canvas;
var ctx;
// for frame rate
var filterStrength = 20;
var frameTime = 0, lastLoop = new Date, thisLoop;

// for video
var videoScreen ;
var isFirstVideo = false;
var isChangingVideo = true;



function onReady() {
    // your inicialization code here  ----------------------------------------------
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    frameCounter = 0;
    canvas.addEventListener('mousemove', pick);

    videoScreen = document.createElement('video');
    //document.body.appendChild(videoScreen);
    document.onkeypress=function(){changeVideo()};
    upDateVideo ();


    draw();
    console.log("ready to gooo!");
} // end onReady()


function upDateVideo () {
    if (isChangingVideo) {
        if (isFirstVideo)
            loadVideo("videos/onetotwo.mp4");
        else
            loadVideo("videos/onetotwo.mp4");
    }
    isChangingVideo = false;
}


function loadVideo(id) {
    videoScreen.src =  id ;
    videoScreen.load();
    videoScreen.play();
    console.log("dentro de loadVideo, video actual =" + id );
}

function changeVideo() {
    isChangingVideo = true;
    isFirstVideo = !isFirstVideo;
    //console.log("dentro de changeVideo, queVideo = "  + queVideo);
}





// your drawing code here ---------------------------------------------------
function draw () {
    var thisFrameTime = (thisLoop=new Date) - lastLoop;
    // for background
    ctx.fillStyle="#444444"; // dark gray
    //ctx.fillRect(0, 0, canvas.width, canvas.height);


    ctx.drawImage(videoScreen, 0, 0);

    upDateVideo();


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