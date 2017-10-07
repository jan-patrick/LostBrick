/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DPlayer (sideNum) {

var w = 8;
var h = 8;    
var prevSquNum;
var gravityDirection;
var gravitypower = 0.01;

this.myPlayers;
this.playerCounter;
this.playerX;
this.playerY;
this.playDir;
this.prevDir;
this.videoPlayed;
this.playerMoved;

if(this.videoPlayed){
    if(prevSquNum != sideNum || prevSquNum != sideNum && this.playerMoved==true || this.playerMoved==true){
        if(sideNum==1){ // gravity down
            moveSquX = 740;
            moveSquY = 815;
            gravityDirection = 90;
        }else if(sideNum==2){ // gravity to the right
            moveSquX = 690;
            moveSquY = 700;
            gravityDirection = 0;
        }else if(sideNum==3){ // gravity up
            moveSquX = 720;
            moveSquY = 415;
            gravityDirection = 270;
        }else if(sideNum==4){ // gravity to the left
            moveSquX = 700;
            moveSquY = 435;
            gravityDirection = 180;
        }
        this.playerMoved = false;
        prevSquNum = sideNum;
    }

    if(this.playerX >= 1200 || this.playerY >= 950 || this.playerX <= 600 || this.playerY <= 100){
        this.playerCounter++;    
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
    } 

    if(this.myPlayers.length<=0){
        var myplayer = new Box2DBox(moveSquX, moveSquY, w, h);
        myPlayers.push(myplayer);    
    }

    // draw the playable square
    for (var i = 0; i < myPlayers.length; i++) {
        if(gravityDirection==undefined || !this.videoPlayed)gravityDirection=0;
        if(gravitypower==undefined || !this.videoPlayed)gravitypower=0;
            this.myPlayers[i].applyImpulse(gravityDirection, gravitypower);
            this.myPlayers[i].draw(ctx);
            this.playerX = myPlayers[i].miX;
            this.playerY = myPlayers[i].miY;
    }
}else{
    if(this.myTransporter.length>=0){
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
    }
    this.playerMoved = true;
}
} // end Box2DPlayer

function PlayerMovement (playDirr, sideNum) {

    var up = 270;
    var down = 90;
    var left = 180;
    var right = 0;
    var walk = 0.07;
    var jump = 0.8;

    if(sideNum==1){
        if(playDirr == "a"){
            this.myPlayers[0].applyImpulse(left, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w" && this.prevDir != playDirr){
            this.myPlayers[0].applyImpulse(up, jump);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "d"){
            this.myPlayers[0].applyImpulse(right, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "s"){
            this.myPlayers[0].applyImpulse(down, walk);
            this.myPlayers[0].draw(ctx);
        }
    }else if(sideNum==2){
        if(playDirr == "a" && this.prevDir != playDirr){
            this.myPlayers[0].applyImpulse(left, jump);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w"){
            this.myPlayers[0].applyImpulse(up, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "d"){
            this.myPlayers[0].applyImpulse(right, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "s"){
            this.myPlayers[0].applyImpulse(down, walk);
            this.myPlayers[0].draw(ctx);
        }         
    }else if(sideNum==3){
        if(playDirr == "a"){
            this.myPlayers[0].applyImpulse(left, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w"){
            this.myPlayers[0].applyImpulse(up, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "d"){
            this.myPlayers[0].applyImpulse(right, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "s" && this.prevDir != playDirr){
            this.myPlayers[0].applyImpulse(down, jump);
            this.myPlayers[0].draw(ctx);
        }
    }else if(sideNum==4){
        if(playDirr == "a"){
            this.myPlayers[0].applyImpulse(left, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w"){
            this.myPlayers[0].applyImpulse(up, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "d"  && this.prevDir != playDirr){
            this.myPlayers[0].applyImpulse(right, jump);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "s"){
            this.myPlayers[0].applyImpulse(down, walk);
            this.myPlayers[0].draw(ctx);
        }
    } 
    this.prevDir = playDirr;    
    this.playDir = "no";
}

function lastjump () {
    return 
}