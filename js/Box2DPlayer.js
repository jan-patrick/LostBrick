/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DPlayer (changedX, changedY) {

var w = 10;
var h = 10;    

var myPlayers = [];

if(myPlayers.length<=0){
    var myplayer = new Box2DBox(changedX, changedY, w, h);
    myPlayers.push(myplayer);
}
if(changedX <= 0 || changedY <= 0){    
    for(var z = 0;z < myPlayers.length; z++){
        mySquaresForJumping.splice(z,1);
    }
}        
    // draw the playable square
    for (var i = 0; i < myPlayers.length; i++) {
        myPlayers[i].draw(ctx);
    }    
} // end Box2Dplayer