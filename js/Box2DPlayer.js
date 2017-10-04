/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DPlayer (sideNum) {

var w = 10;
var h = 10;    
var prevSquNum;
var gravityDirection;
var gravitypower = 0.01;

this.myPlayers;

this.playerCounter;

if(prevSquNum != sideNum){
    if(sideNum==1){ // Gravity down
        moveSquX = 20;
        moveSquY = 20;
        gravityDirection = 90;
    }else if(sideNum==2){ // gravity to the right
        moveSquX = 40;
        moveSquY = 20;
        gravityDirection = 0;
    }else if(sideNum==3){ // gravity up
        moveSquX = 60;
        moveSquY = 20;
        gravityDirection = 270;
    }else if(sideNum==4){ // gravity to the left
        moveSquX = 30;
        moveSquY = 70;
        gravityDirection = 180;
    }
    prevSquNum = sideNum;
}

if(moveSquX <= 0 || moveSquY <= 0){    
    for(var z = 0;z < this.myPlayers.length; z++){
        this.myPlayers.splice(z,1);
        this.playerCounter++;
    }
} 

if(this.myPlayers.length<=0){
    var myplayer = new Box2DBox(moveSquX, moveSquY, w, h);
    myPlayers.push(myplayer);    
}

// draw the playable square
for (var i = 0; i < myPlayers.length; i++) {
        this.myPlayers[i].applyImpulse(gravityDirection, gravitypower);
        this.myPlayers[i].draw(ctx);
}    
} // end Box2DPlayer