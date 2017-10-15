/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DPlayer (sideNum) {

if(this.level==1){
    var w = 9;
    var h = 9;
}else if(this.level==2){
    var w = 8;
    var h = 8;
}else if(this.level==3){
    var w = 8;
    var h = 8;
}
var prevSquNum;
var gravityDirection;
var gravitypower = 0.1;

this.level;
this.myPlayers;
this.playerCounter;
this.playerX;
this.playerY;
this.playDir;
this.prevDir;
this.videoPlayed;
this.playerMoved;
this.spawnpoint;

if(this.level==1){
    if(prevSquNum != sideNum || prevSquNum != sideNum && this.playerMoved==true || this.playerMoved==true){
        if(sideNum==1 && this.spawnpoint == 0){ // gravity down
            moveSquX = 754;
            moveSquY = 822;
            gravityDirection = 90;
        }else if(sideNum==1 && this.spawnpoint == 2){ // gravity to the right
            moveSquX = 1125;
            moveSquY = 590;
            gravityDirection = 90;
        }else if(sideNum==2 && this.spawnpoint == 1){ // gravity to the right
            moveSquX = 700;
            moveSquY = 700;
            gravityDirection = 0;
        }else if(sideNum==2 && this.spawnpoint == 3){ // gravity to the right
            moveSquX = 700;
            moveSquY = 464;
            gravityDirection = 0;
        }else if(sideNum==3 && this.spawnpoint == 4){ // gravity up
            moveSquX = 700;
            moveSquY = 412;
            gravityDirection = 270;
        }else if(sideNum==4 && this.spawnpoint == 5){ // gravity to the left
            moveSquX = 700;
            moveSquY = 562;
            gravityDirection = 180;
        }else if(sideNum==4 && this.spawnpoint == 6){ // gravity to the left
            moveSquX = 700;
            moveSquY = 432;
            gravityDirection = 180;
        }
        this.playerMoved = false;
        prevSquNum = sideNum;
    }

    if(this.videoPlayed){
        if(this.playerX >= 1200 || this.playerY >= 950 || this.playerX <= 600 || this.playerY <= 100){
            if(sideNum==4 && this.spawnpoint==5){
                this.sideNum--;
                this.countFrame = seconds+2;
                this.videoPlayed = false;
                this.whichVideo = "fourtothree";
                this.spawnpoint = 4;
        }
        resetUsedVariables();
        if(!this.deadCounted){
            this.playerCounter++;
            this.deadCounted = true;
        }
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
    }
    this.deadCounted = false;

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
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
        this.playerMoved = true;
    }
}else if(this.level==2){
    if(prevSquNum != sideNum || prevSquNum != sideNum && this.playerMoved==true || this.playerMoved==true){
        if(sideNum==1 && this.spawnpoint == 0){ // gravity down
            moveSquX = 774;
            moveSquY = 784;
            gravityDirection = 90;
        }else if(sideNum==1 && this.spawnpoint == 4){ // gravity down
            moveSquX = 921;
            moveSquY = 455;
            gravityDirection = 90;
        }else if(sideNum==2 && this.spawnpoint == 1){ // gravity to the right
            moveSquX = 722;
            moveSquY = 665;
            gravityDirection = 0;
        }else if(sideNum==3 && this.spawnpoint == 2){ // gravity to the right
            moveSquX = 770;
            moveSquY = 688;
            gravityDirection = 270;
        }else if(sideNum==3 && this.spawnpoint == 6){ // gravity to the right
            moveSquX = 974;
            moveSquY = 685;
            gravityDirection = 270;
        }else if(sideNum==4 && this.spawnpoint == 3){ // gravity to the right
            moveSquX = 725;
            moveSquY = 415;
            gravityDirection = 180;
        }else if(sideNum==4 && this.spawnpoint == 5){ // gravity to the right
            moveSquX = 1080;
            moveSquY = 720;
            gravityDirection = 180;
        }
        this.playerMoved = false;
        prevSquNum = sideNum;
    }

    if(this.videoPlayed){
        if(this.playerX >= 1200 || this.playerY >= 950 || this.playerX <= 600 || this.playerY <= 100){
        resetUsedVariables();
        if(!this.deadCounted){
            this.playerCounter++;
            this.deadCounted = true;
        }
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
    }
    this.deadCounted = false;

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
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
        this.playerMoved = true;
    }
}else if(this.level==3){
    if(prevSquNum != sideNum || prevSquNum != sideNum && this.playerMoved==true || this.playerMoved==true){
        if(sideNum==1 && this.spawnpoint == 0){ // gravity down
            moveSquX = 774;
            moveSquY = 784;
            gravityDirection = 90;
        }else if(sideNum==1 && this.spawnpoint == 4){ // gravity down
            moveSquX = 1129;
            moveSquY = 594;
            gravityDirection = 90;
        }else if(sideNum==2 && this.spawnpoint == 1){ // gravity to the right
            moveSquX = 1175;
            moveSquY = 690;
            gravityDirection = 0;
        }else if(sideNum==2 && this.spawnpoint == 5){ // gravity to the right
            moveSquX = 695;
            moveSquY = 600;
            gravityDirection = 0;
        }else if(sideNum==2 && this.spawnpoint == 7){ // gravity to the right
            moveSquX = 723;
            moveSquY = 450;
            gravityDirection = 0;
        }else if(sideNum==2 && this.spawnpoint == 8){ // gravity to the right
            moveSquX = 1190;
            moveSquY = 630;
            gravityDirection = 0;
        }else if(sideNum==3 && this.spawnpoint == 2){ // gravity to the right
            moveSquX = 655;
            moveSquY = 694;
            gravityDirection = 270;
        }else if(sideNum==4 && this.spawnpoint == 3){ // gravity to the right
            moveSquX = 670;
            moveSquY = 714;
            gravityDirection = 180;
        }else if(sideNum==4 && this.spawnpoint == 6){ // gravity to the right
            moveSquX = 1100;
            moveSquY = 491;
            gravityDirection = 180;
        }
        this.playerMoved = false;
        prevSquNum = sideNum;
    }

    if(this.videoPlayed){
        if(this.playerX >= 1200 || this.playerY >= 950 || this.playerX <= 600 || this.playerY <= 100){
        resetUsedVariables();
        if(!this.deadCounted){
            this.playerCounter++;
            this.deadCounted = true;
        }
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
    }
    this.deadCounted = false;

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
        for(var z = 0;z < this.myPlayers.length; z++){
            this.myPlayers[z].removeBody();
            this.myPlayers.splice(z,1);
        }
        this.playerMoved = true;
    }
}
} // end Box2DPlayer

function PlayerMovement (playDirr, sideNum) {

    var up = 270;
    var down = 90;
    var left = 180;
    var right = 0;
    var walk = 1;
    var jump = 3;
    var doIt = true;

    var transferonetotwo;
    var transfertwotothree;
    var transferthreetofour;
    var transferfourtofive;

    this.playerOnGround;
    this.lastusedone;
    this.lastusedtwo;
    this.lastusedthree;
    this.lastusedfour;
    this.lastusedfive;

    this.timelastusedone;
    this.timelastusedtwo;
    this.timelastusedthree;
    this.timelastusedfour;
    this.timelastusedfive;

    if(this.lastusedfive==playDirr && this.lastusedfour==playDirr && this.lastusedthree==playDirr && this.lastusedtwo==playDirr && this.lastusedone==playDirr && this.timelastusedthree+0.6>=this.seconds ||  this.timelastusedthree+0.6>=this.seconds){
      doIt=false;
    }else{
      doIt=true;
    }

    if(sideNum==1 && doIt){
        if(playDirr == "a"){
            this.myPlayers[0].applyImpulse(left, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w" && playerOnGround){
            this.myPlayers[0].applyImpulse(up, jump);
            this.myPlayers[0].draw(ctx);
            if(this.godmode==false)this.playerOnGround=false;
        }else if(playDirr == "d"){
            this.myPlayers[0].applyImpulse(right, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "s"){
            this.myPlayers[0].applyImpulse(down, walk);
            this.myPlayers[0].draw(ctx);
        }
    }else if(sideNum==2){
        if(playDirr == "a" && playerOnGround){
            this.myPlayers[0].applyImpulse(left, jump);
            this.myPlayers[0].draw(ctx);
            if(this.godmode==false)this.playerOnGround=false;
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
        }else if(playDirr == "s" && playerOnGround){
            this.myPlayers[0].applyImpulse(down, jump);
            this.myPlayers[0].draw(ctx);
            if(this.godmode==false)this.playerOnGround=false;
        }
    }else if(sideNum==4){
        if(playDirr == "a"){
            this.myPlayers[0].applyImpulse(left, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "w"){
            this.myPlayers[0].applyImpulse(up, walk);
            this.myPlayers[0].draw(ctx);
        }else if(playDirr == "d"  && playerOnGround){
            this.myPlayers[0].applyImpulse(right, jump);
            this.myPlayers[0].draw(ctx);
            if(this.godmode==false)this.playerOnGround=false;
        }else if(playDirr == "s"){
            this.myPlayers[0].applyImpulse(down, walk);
            this.myPlayers[0].draw(ctx);
        }
    }

    if(this.buttonPressed){
    this.lastusedfive = this.lastusedfour;
    this.lastusedfour = this.lastusedthree;
    this.lastusedthree = this.lastusedtwo;
    this.lastusedtwo = this.lastusedone;
    this.lastusedone = playDirr;

    this.timelastusedfive = this.timelastusedfour;
    this.timelastusedfour = this.timelastusedthree;
    this.timelastusedthree = this.timelastusedtwo;
    this.timelastusedtwo = this.timelastusedone;
    this.timelastusedone = this.seconds;

    this.buttonPressed = false;

    this.prevDir = playDirr;
    this.playDir = "no";
    }
}

function jumpingAllowed() {
  if(this.godmode==false){
      if(this.jumpyTime+1<=this.seconds){
          playerOnGround=true;
          this.jumpyTime=this.seconds;
      }else if(this.jumpyTime==undefined){
          playerOnGround=true;
          this.jumpyTime=this.seconds;
      }
  }else{
    playerOnGround = true;
  }
}

function resetUsedVariables() {
  this.lastusedfive = "here";
  this.lastusedtwo = "could";
  this.lastusedthree = "be";
  this.lastusedfour = "your";
  this.lastusedfive = "advertising";

  this.timelastusedfive = 0;
  this.timelastusedtwo = 20;
  this.timelastusedthree = 59;
  this.timelastusedfour = 69;
  this.timelastusedfive = 72;
}
