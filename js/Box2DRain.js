/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */

function Box2DRain () {

this.myRain;
var gravityDirection;
var gravitypower = 0.01;
var startPointX;
var startPointY;
if(this.gamemode=="play"){
  if(this.sideNum==1){ // gravity down
      startPointX = Math.random() * 1824;
      startPointY = -5;
      gravityDirection = 90;
  }else if(this.sideNum==2){ // gravity to the right
      startPointX = -5;
      startPointY = Math.random() * 1018;
      gravityDirection = 0;
  }else if(this.sideNum==3){ // gravity up
      startPointX = Math.random() * 1824;
      startPointY = 1023;
      gravityDirection = 270;
  }else if(this.sideNum==4){ // gravity to the left
      startPointX = 1829;
      startPointY = Math.random() * 1018;
      gravityDirection = 180;
  }

    if (Math.random() > 0.2) {
        var myZs = Math.random();
        var myCurrentObj = new Box2DCircle(startPointX, startPointY, myZs);
        this.myRain.push(myCurrentObj);
    }

    for (var r = 0; r < this.myRain.length; r++) {
        this.myRain[r].applyImpulse(gravityDirection, gravitypower);
        this.myRain[r].draw(ctx);
        if (this.myRain[r].miX <= -10 || this.myRain[r].miX >= 1829 || this.myRain[r].miY <= -10 || this.myRain[r].miY >= 1023){
        //if(this.myRain[r].done()){
            this.myRain[r].removeBody();
            this.myRain.splice(i, 1);
        }
    }
  }
}
