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
            this.mySquaresForJumping.push(new Box2DBondary(762, 835, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(872, 797, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(990, 757, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1095, 715, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1095, 605, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1013, 560, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1067, 520, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1116, 480, 20, 5, 0));
        }else if(sideNum==2){ // Creating Side Two
            this.mySquaresForJumping.push(new Box2DBondary(713, 703, 5, 15, 0));
            this.mySquaresForJumping.push(new Box2DBondary(753, 680, 5, 40, 0));
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