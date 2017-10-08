/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DBackground (sideNum) {

var prevImg;    

this.img;
this.videoonetotwo;
this.videotwotoone;
this.videotwotothree;
var imgsource;

this.ctx;
this.videoPlayed;
this.frameCounter;
this.countFrame;
this.whichVideo;

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
        if(this.whichVideo == "onetotwo"){
            this.videoonetotwo.play();
            this.ctx.drawImage(videoonetotwo, 0, 0);            
        }else if(this.whichVideo == "twotoone"){
            this.videotwotoone.play();
            this.ctx.drawImage(videotwotoone, 0, 0);
        }else if(this.whichVideo == "twotothree"){
            this.videotwotothree.play();
            this.ctx.drawImage(videotwotothree, 0, 0);  
        }else if(this.whichVideo == "threetofour"){
            this.videothreetofour.play();
            this.ctx.drawImage(videothreetofour, 0, 0);
        }else if(this.whichVideo == "fourtothree"){
            this.videofourtothree.play();
            this.ctx.drawImage(videofourtothree, 0, 0);
        }
        if(this.countFrame<= this.seconds)this.videoPlayed = true;   
    }
    prevImg = sideNum;
}    
} // end Box2DBackground