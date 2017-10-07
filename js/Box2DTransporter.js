/**
 * Created by franklinhc on 28/3/17.
 */
function Box2DTransporter () {
    
    this.playerX;
    this.playerY;
    this.myTransporter;
    
    this.myTransporter = new Box2Dbasket (200, 200);
    
    this.myTransporter.draw(ctx);
    //this.myTransporter.setLocation(this.playerX, this.playerY-100);
    //this.myTransporter.SetAngularVelocity(0);
}