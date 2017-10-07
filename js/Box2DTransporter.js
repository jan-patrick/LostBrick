/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */
function Box2DTransporter () {
    
    this.transporterX = this.playerX;
    this.transporterY = this.playerY;
    this.myTransporter;
    this.sideNum;

    if(this.videoPlayed){
        if(this.myTransporter.length>0){
            for(var t = 0;t < this.myTransporter.length; t++){
                this.myTransporter[t].removeBody();
                this.myTransporter.splice(t,1);
            }
        }  
    }else{
        if(this.myTransporter.length<=0)this.myTransporter = new Box2DKBox (this.transporterX, this.transporterY, 9, 9);
            myTransporter.draw(ctx);
            myTransporter.setLocation(this.transporterX-this.transporterDrive, this.transporterY);        
    }
}

function deleteTransporter (){
    if(this.myTransporter.length>0){
        for(var t = 0;t < this.myTransporter.length; t++){
            this.myTransporter[t].removeBody();
            this.myTransporter.splice(t,1);
        }
    }
}

function driveTransporter(){
    if(sideNum==2){   //moveSquX = 690; moveSquY = 700;
        if(this.actFrame<=this.countFrame && this.transporterDrive<=this.playerX-690){
            this.transporterDrive+=3.5; 
        }     
    }
}        

function setMyTransporterLoc () {
    this.myTransporter.setLocation(this.transporterX*0.95-this.transporterDrive, this.transporterY*0.82);
}