/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DPlayer (sideNum) {

var w = 10;
var h = 10;    
var prevSquNum;

this.myPlayers;

this.playerCounter;

if(prevSquNum != sideNum){
    if(sideNum==1){
        moveSquX = 20;
        moveSquY = 20;
    }else if(sideNum==2){
        moveSquX = 40;
        moveSquY = 20;
    }else if(sideNum==3){
        moveSquX = 60;
        moveSquY = 20;
    }else if(sideNum==4){
        moveSquX = 30;
        moveSquY = 70;
    }
    prevSquNum = sideNum;
}

if(moveSquX <= 0 || moveSquY <= 0){    
    for(var z = 0;z < this.myPlayers.length; z++){
        this.myPlayers.splice(z,1);
        this.playerCounter++;
    }
} 

while(this.myPlayers.length<=0){
    var myplayer = new Box2DBox(moveSquX, moveSquY, w, h);
    myPlayers.push(myplayer);
    this.playerCounter++;
    
}

// draw the playable square
for (var i = 0; i < myPlayers.length; i++) {
        this.myPlayers[i].draw(ctx);
}    
} // end Box2DPlayer