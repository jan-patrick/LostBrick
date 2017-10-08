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
            this.mySquaresForJumping.push(new Box2DBondary(762, 836, 40, 5, 0));
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
            this.mySquaresForJumping.push(new Box2DBondary(713, 590, 5, 15, 0));
            this.mySquaresForJumping.push(new Box2DBondary(795, 590, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(755, 525, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(737, 479, 50, 4, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1095, 440, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1140, 375, 5, 40, 0));
        }else if(sideNum==3){ // Creating Side Three
            this.mySquaresForJumping.push(new Box2DBondary(713, 398, 25, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(775, 356, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(795, 438, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(822, 475, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(874, 458, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(918, 499, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1048, 499, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1118, 548, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(988, 357, 40, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1064, 397, 20, 5, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1116, 418, 20, 5, 0));
        }else if(sideNum==4){ // Creating Side Four
            this.mySquaresForJumping.push(new Box2DBondary(684, 433, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(697, 548, 10, 4, 0));
            this.mySquaresForJumping.push(new Box2DBondary(699, 418, 8, 4, 0));
            this.mySquaresForJumping.push(new Box2DBondary(724, 403, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(790, 441, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(830, 398, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(871, 356, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(952, 364, 5, 21, 0));
            this.mySquaresForJumping.push(new Box2DBondary(987, 415, 4, 21, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1020, 370, 4, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(912, 318, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(912, 264, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(953, 219, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(994, 268, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1034, 227, 5, 20, 0));
            this.mySquaresForJumping.push(new Box2DBondary(1075, 181, 5, 28, 0));
        }

        // drawing the square borders (just needed while creating and coding)
        //for (var i = 0; i < this.mySquaresForJumping.length; i++) {
        //    this.mySquaresForJumping[i].draw(ctx);
        //}
        //make sure that we just redraw when we change the side (to the dark)
        prevSideNum = sideNum;
    }
}
} // end Box2DSide
