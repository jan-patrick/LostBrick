/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DSide (sideNum) {

var prevSideNum;    

this.mySquaresForJumping;

if(prevSideNum != sideNum){
    for(var z = 0;z < this.mySquaresForJumping.length; z++){
        this.mySquaresForJumping[z].removeBody();
        this.mySquaresForJumping.splice(z,1);
    }
    if(this.videoPlayed){ 
        if(sideNum==1){ // Creating Side One
            this.mySquaresForJumping.push(new Box2DBondary(910, 845, 190, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1085, 805, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(980, 785, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(865, 765, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(745, 745, 20, 5, 0));
        }else if(sideNum==2){ // Creating Side Two
            this.mySquaresForJumping.push(new Box2DBondary(1200, 845, 5, 50, 0));
            this.mySquaresForJumping.push(new Box2DBondary(300, 300, 5, 100, 0));
            this.mySquaresForJumping.push(new Box2DBondary(400, 200, 5, 70, 0));
        }else if(sideNum==3){ // Creating Side Three
            this.mySquaresForJumping.push(new Box2DBondary(120, 50, 30, 10, 0));
            this.mySquaresForJumping.push(new Box2DBondary(300, 300, 200, 10, 0));
            this.mySquaresForJumping.push(new Box2DBondary(400, 200, 100, 10, 0));   
        }else if(sideNum==4){ // Creating Side Four
            this.mySquaresForJumping.push(new Box2DBondary(200, 400, 10, 100, 0));
            this.mySquaresForJumping.push(new Box2DBondary(100, 300, 10, 40, 0));
            this.mySquaresForJumping.push(new Box2DBondary(400, 200, 10, 70, 0));  
        }    
        
        // drawing the square borders (just needed while creating and coding)
        for (var i = 0; i < this.mySquaresForJumping.length; i++) {
            this.mySquaresForJumping[i].draw(ctx);
        }
        //make sure that we just redraw when we change the side (to the dark)
        prevSideNum = sideNum;
    }
}    
} // end Box2DSide