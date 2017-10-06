/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DBackground (sideNum) {

var prevImg;    

this.img;
this.videoonetotwo;
var imgsource;

this.ctx;
this.videoPlayed;
this.frameCounter;
this.countFrame;

if(prevImg != sideNum){
    if(this.videoPlayed){ // show background image
        this.img = new Image(); 
        if(sideNum==1){ // creating background one                     
            this.img.src = "images/sideone.jpg";
        }else if(sideNum==2){ // creating background two
            this.img.src = "images/sidetwo.jpg";
        }else if(sideNum==3){ // creating background three
            this.img.src = "images/sidethree.jpg";
        }else if(sideNum==4){ // creating background four
            this.img.src = "images/sidefour.jpg";
        }     
    this.ctx.drawImage(img, 0, 0);      
    }else{ // show video transition       
        if(sideNum == 2){
            this.videoonetotwo.play();
            this.ctx.drawImage(videoonetotwo, 0, 0);  
            if(this.countFrame<= this.seconds)this.videoPlayed = true;
        }
    //this.ctx.drawImage(this.video, 0, 0);    
    }
    prevImg = sideNum;
}    
} // end Box2DBackground