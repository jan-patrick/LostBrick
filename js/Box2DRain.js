/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DRain (sideNum) {

this.myRain;

  if (Math.random() > 0.8) {
      var myZs = Math.random() * 5+2;
      var myXs = Math.random() * 1824;
      var myCurrentObj = new Box2DCircle(myXs, -10, myZs);
      this.myRain.push(myCurrentObj);
  }

  for (var i = 0; i < this.myRain.length; i++) {
      this.myRain[i].applyImpulse(90, 0.01);
      this.myRain[i].draw(ctx);
      if (this.myRain[i].done()) {
          this.myRain.splice(i, 1);
      }
  }
}
