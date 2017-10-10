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

this.level;
this.ctx;
this.videoPlayed;
this.frameCounter;
this.countFrame;
this.whichVideo;

if(this.level==1){
    if(prevImg != sideNum){
        if(this.videoPlayed){ // show background image
            this.img = new Image();
            if(sideNum==1){ // creating background one
                this.img.src = "level1/images/sideone.jpg";
            }else if(sideNum==2){ // creating background two
                this.img.src = "level1/images/sidetwo.jpg";
            }else if(sideNum==3){ // creating background three
                this.img.src = "level1/images/sidethree.jpg";
            }else if(sideNum==4){ // creating background four
                this.img.src = "level1/images/sidefour.jpg";
            }
        this.ctx.drawImage(img, 0, 0);
        }else{ // show video transition
            if(this.whichVideo == "onetotwolow"){
                this.videoonetotwolow.play();
                this.ctx.drawImage(videoonetotwolow, 0, 0);
            }else if(this.whichVideo == "onetotwohigh"){
                this.videoonetotwohigh.play();
                this.ctx.drawImage(videoonetotwohigh, 0, 0);
            }else if(this.whichVideo == "twotoone"){
                this.videotwotoone.play();
                this.ctx.drawImage(videotwotoone, 0, 0);
            }else if(this.whichVideo == "twotothree"){
                this.videotwotothree.play();
                this.ctx.drawImage(videotwotothree, 0, 0);
            }else if(this.whichVideo == "threetofourlow"){
                this.videothreetofourlow.play();
                this.ctx.drawImage(videothreetofourlow, 0, 0);
            }else if(this.whichVideo == "threetofourhigh"){
                this.videothreetofourhigh.play();
                this.ctx.drawImage(videothreetofourhigh, 0, 0);
            }else if(this.whichVideo == "fourtothree"){
                this.videofourtothree.play();
                this.ctx.drawImage(videofourtothree, 0, 0);
            }
            if(this.countFrame<= this.seconds)this.videoPlayed = true;
        }
        prevImg = sideNum;
    }
}else if(this.level==2){
      if(prevImg != sideNum){
          if(this.videoPlayed){ // show background image
              this.img = new Image();
              if(sideNum==1){ // creating background one
                  this.img.src = "level2/images/side1.jpg";
              }else if(sideNum==2){ // creating background two
                  this.img.src = "level2/images/side2.jpg";
              }else if(sideNum==3){ // creating background three
                  this.img.src = "level2/images/side3.jpg";
              }else if(sideNum==4){ // creating background four
                  this.img.src = "level2/images/side4.jpg";
              }
          }
      }        
}
} // end Box2DBackground
