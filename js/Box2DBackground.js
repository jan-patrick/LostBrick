/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DBackground (sideNum) {

var prevSideNum;    

this.img;
this.video;
this.imgsource

if(prevSideNum != sideNum && sideNum%1==0){
    if(sideNum==1){ // creating background one
        this.imgsource = "pictures/side1.jpg";
    }else if(sideNum==2){ // creating background two
        this.imgsource = "pictures/side2.jpg";
        this.mySquaresForJumping.push(new Box2DBondary(300, 300, 5, 100, 0));
        this.mySquaresForJumping.push(new Box2DBondary(400, 200, 5, 70, 0));
    }   
    prevSideNum = sideNum;
}    
} // end Box2DBackground