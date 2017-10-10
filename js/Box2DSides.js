/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DSide (sideNum) {

var prevSideNum;

this.level;
this.mySquaresForJumping;

if(this.level==1){
    if(prevSideNum != sideNum){
        for(var z = 0;z < this.mySquaresForJumping.length; z++){
            this.mySquaresForJumping[z].removeBody();
            this.mySquaresForJumping.splice(z,1);
        }
        if(this.videoPlayed){
            if(sideNum==1){ // Creating Side One
                this.mySquaresForJumping.push(new Box2DBondary(762, 836, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(872, 795, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(990, 756, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1095, 715, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1095, 603, 40, 5, 0));
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
                this.mySquaresForJumping.push(new Box2DBondary(697, 714, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(697, 600, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1126, 398, 10, 3, 0));
            }else if(sideNum==3){ // Creating Side Three
                this.mySquaresForJumping.push(new Box2DBondary(713, 398, 25, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(775, 356, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(770, 438, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(822, 479, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(888, 458, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(918, 499, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1003, 499, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1057, 530, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1118, 548, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(988, 357, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1064, 397, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1116, 418, 20, 5, 0));
            }else if(sideNum==4){ // Creating Side Four
                this.mySquaresForJumping.push(new Box2DBondary(684, 433, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(697, 548, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(699, 418, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(724, 402, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(799, 330, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(830, 398, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(871, 356, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(952, 364, 5, 21, 0));
                this.mySquaresForJumping.push(new Box2DBondary(994, 415, 4, 21, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1035, 350, 4, 20, 0));
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
}else if(this.level==2){
    if(prevSideNum != sideNum){
        for(var z = 0;z < this.mySquaresForJumping.length; z++){
            this.mySquaresForJumping[z].removeBody();
            this.mySquaresForJumping.splice(z,1);
        }
        if(this.videoPlayed){
            if(sideNum==1){ // Creating Side One
                this.mySquaresForJumping.push(new Box2DBondary(762, 826, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(872, 795, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(990, 756, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1095, 715, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1095, 603, 40, 5, 0));
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
                this.mySquaresForJumping.push(new Box2DBondary(697, 714, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(697, 600, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1126, 398, 10, 3, 0));
            }else if(sideNum==3){ // Creating Side Three
                this.mySquaresForJumping.push(new Box2DBondary(713, 398, 25, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(775, 356, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(770, 438, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(822, 479, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(888, 458, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(918, 499, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1003, 499, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1057, 530, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1118, 548, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(988, 357, 40, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1064, 397, 20, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1116, 418, 20, 5, 0));
            }else if(sideNum==4){ // Creating Side Four
                this.mySquaresForJumping.push(new Box2DBondary(684, 433, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(697, 548, 10, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(699, 418, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(724, 402, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(764, 366, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(799, 330, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(830, 398, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(871, 356, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(952, 364, 5, 21, 0));
                this.mySquaresForJumping.push(new Box2DBondary(994, 415, 4, 21, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1035, 350, 4, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(912, 318, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(912, 264, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(953, 219, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(994, 268, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1034, 227, 5, 20, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1075, 181, 5, 28, 0));
            }

            // drawing the square borders (just needed while creating and coding)
            for (var i = 0; i < this.mySquaresForJumping.length; i++) {
                this.mySquaresForJumping[i].draw(ctx);
            }
            //make sure that we just redraw when we change the side (to the dark)
            prevSideNum = sideNum;
        }
    }
}
} // end Box2DSide
