/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */

function Box2DRain () {

this.level;
this.myRain;
this.rainAlpha;

var gravityDirection;
var gravitypower = 0.01;
var startPointX;
var startPointY;

    if(this.itisraining){

      if(this.sideNum==1){ // gravity down
          gravityDirection = Math.random()*20+80;
      }else if(this.sideNum==2){ // gravity to the right
          gravityDirection = 0;
      }else if(this.sideNum==3){ // gravity up
          gravityDirection = Math.random() * 20+260;
      }else if(this.sideNum==4){ // gravity to the left
          gravityDirection = Math.random() * 20+170;
      }
        if (Math.random() > 0.1) {
            var myCurrentObj = new Box2DCircle(Math.random() * 1824, Math.random() * 1018, Math.random());
            this.myRain.push(myCurrentObj);
        }
        // deleting all rain out of canvas
        if(this.myRain.length>=600){
            for (var r = 0; r < this.myRain.length-200; r++) {
                    this.myRain[r].removeBody();
                    this.myRain.splice(r, 1);
            }
        }
        for (var r = 0; r < this.myRain.length; r++) {
            this.myRain[r].applyImpulse(gravityDirection, gravitypower);
            this.myRain[r].draw(ctx);
        }
        for(var r = 0; r < this.myRain.length; r++) {
            var rainXleftToBrick = this.myRain[r].miX-this.playerX;
            var rainYoverBrick = this.myRain[r].miY-this.playerY;
            if(rainXleftToBrick<=10 && rainXleftToBrick>=-10 && rainYoverBrick<=10 && rainYoverBrick>=-10){
              this.myRain[r].removeBody();
              this.myRain.splice(r, 1);
            }
        }
    }
}
