/**
 * Created by franklinhc on 28/3/17.
 */
function Box2DTransporter ( x,  y) {
    
    this.playerX;
    this.playerY;
    this.myTransporter;
    
    this.myTransporter = new Box2Dbasket (x, y);
    
    this.myTransporter.draw(ctx);
    //this.myTransporter.setLocation(x, y);
    //this.myTransporter.SetAngularVelocity(0);
}