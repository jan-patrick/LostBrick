/**
 * Created by franklinhc on 28/3/17.
 */
function Box2DTransporter (x, y) {
    
    this.transporterX = x;
    this.transporterY = y;
    this.myTransporter;
    this.sideNum;

    if(this.videoPlayed==false){  

            if(this.myTransporter.length<=0)this.myTransporter = new Box2DKBox (this.transporterX, this.transporterY, 8, 8);
            for(var t = 0;t < this.myTransporter.length; t++){
                this.myTransporter[t].draw(ctx);
            }
            
    }else{
        for(var t = 0;t < this.myTransporter.length; t++){
            this.myTransporter[t].removeBody();
            this.myTransporter.splice(t,1);
        }
    }
}

function deleteTransporter (){
    for(var t = 0;t < this.myTransporter.length; t++){
        this.myTransporter[t].removeBody();
        this.myTransporter.splice(t,1);
    }
}

function driveTransporter(frameCounter){
    if(this.actFrame<=frameCounter)transporterDrive++;
}

function setMyTransporterLoc () {
    this.myTransporter.setLocation(this.transporterX*0.95-this.transporterDrive, this.transporterY*0.82);
}