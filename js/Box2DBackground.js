/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DBackground (sideNum) {

var prevImg;    

this.img;
this.video;
var imgsource;

this.ctx;

if(prevImg != sideNum){
    if(sideNum%1==0){
        if(sideNum==1){ // creating background one 
            this.img = new Image();          
            this.img.src = "images/sideone.jpg";
        }else if(sideNum==2){ // creating background two
            this.img = new Image();
            this.img.src = "images/sidetwo.jpg";
        }else if(sideNum==3){ // creating background two
            this.img = new Image();
            this.img.src = "images/sidethree.jpg";
        }else if(sideNum==4){ // creating background two
            this.img = new Image();
            this.img.src = "images/sidefour.jpg";
        }     
    this.ctx.drawImage(img, 0, 0);      
    }else{
        if(sideNum == 1.5 && prevImg == 1){
            this.video.src =  "videos/onetotwo.mp4" ;
            this.video.load();
            this.video.play();
            this.sidenum = 2;
        }
    //this.ctx.drawImage(this.video, 0, 0);    
    }
    prevImg = sideNum;
}    
} // end Box2DBackground