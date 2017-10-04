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
    if(sideNum==1){ // Creating Side One
        this.mySquaresForJumping.push(new Box2DBondary(300, 450, 200, 20, 0));
        this.mySquaresForJumping.push(new Box2DBondary(300, 300, 100, 20, 0));
        this.mySquaresForJumping.push(new Box2DBondary(200, 50, 50, 20, 0));
    }else if(sideNum==2){ // Creating Side Two
        this.mySquaresForJumping.push(new Box2DBondary(100, 50, 10, 50, 0));
        this.mySquaresForJumping.push(new Box2DBondary(300, 300, 10, 100, 0));
        this.mySquaresForJumping.push(new Box2DBondary(400, 200, 10, 70, 0));
    }else if(sideNum==3){ // Creating Side Three
        this.mySquaresForJumping.push(new Box2DBondary(120, 50, 30, 10, 0));
        this.mySquaresForJumping.push(new Box2DBondary(300, 300, 200, 10, 0));
        this.mySquaresForJumping.push(new Box2DBondary(400, 200, 100, 10, 0));   
    }else if(sideNum==4){ // Creating Side Four
        this.mySquaresForJumping.push(new Box2DBondary(200, 400, 10, 100, 0));
        this.mySquaresForJumping.push(new Box2DBondary(100, 300, 10, 40, 0));
        this.mySquaresForJumping.push(new Box2DBondary(400, 200, 10, 70, 0));  
    }    
    
    // drawing the square borders
    for (var i = 0; i < this.mySquaresForJumping.length; i++) {
        this.mySquaresForJumping[i].draw(ctx);
    }

    //make sure that we just redraw when we change the side (to the dark)
    prevSideNum = sideNum;
}    
} // end Box2DSide