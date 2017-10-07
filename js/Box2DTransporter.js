/**
 * Created by franklinhc on 28/3/17.
 */
function Box2DTransporter (x, y) {
    
    this.transporterX = x;
    this.transporterY = y;
    this.myTransporter;
    this.sideNum;

    for(var t = 0;t < this.myTransporter.length; t++){
        this.myTransporter[t].removeBody();
        this.myPlayers.splice(t,1);
    }        

        this.myTransporter = new Box2Dbasket (this.transporterX*0.951, this.transporterY*0.832);
        this.myTransporter.draw(ctx);
        //this.myTransporter.setLocation(this.transporterX*0.951, y*0.832);
        //this.myTransporter.SetAngularVelocity(0);
    if(!this.videoPlayed){
        for(var t = 0;t < this.myTransporter.length; t++){
            this.myTransporter[t].removeBody();
            this.myTransporter.splice(t,1);
        }
    }
}