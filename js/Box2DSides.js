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
}else if(this.level==2){ // jumping files for level 2
    if(prevSideNum != sideNum){
        for(var z = 0;z < this.mySquaresForJumping.length; z++){
            this.mySquaresForJumping[z].removeBody();
            this.mySquaresForJumping.splice(z,1);
        }
        if(this.videoPlayed){
            if(sideNum==1){ // Creating Side One
                this.mySquaresForJumping.push(new Box2DBondary(783, 795, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(726, 782, 8, 39, 0));
                this.mySquaresForJumping.push(new Box2DBondary(734, 737, 17, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(847, 777, 17, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(828, 714, 17, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(907, 759, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(997, 714, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1073, 679, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 687, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 817, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 478, 8, 85, 0));
                this.mySquaresForJumping.push(new Box2DBondary(921, 469, 17, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(726, 617, 8, 43, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 307, 8, 108, 0));
            }else if(sideNum==2){ // Creating Side Two
                this.mySquaresForJumping.push(new Box2DBondary(1095, 622, 4, 56, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1028, 688, 61, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1113, 701, 4, 39, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1104, 670, 4, 8, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1095, 777, 4, 45, 0));
                this.mySquaresForJumping.push(new Box2DBondary(912, 817, 160, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 795, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 777, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 759, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 737, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 714, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 679, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1086, 490, 4, 74, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1104, 568, 4, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 518, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 465, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 412, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1112, 425, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1063, 500, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1028, 464, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(993, 430, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(966, 500, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(930, 535, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(904, 456, 4, 34, 0));
                this.mySquaresForJumping.push(new Box2DBondary(868, 430, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(841, 491, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(805, 527, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(779, 438, 4, 44, 0));
                this.mySquaresForJumping.push(new Box2DBondary(739, 452, 4, 22, 0));
                this.mySquaresForJumping.push(new Box2DBondary(726, 470, 9, 4, 0));
            }else if(sideNum==3){ // Creating Side Three
                this.mySquaresForJumping.push(new Box2DBondary(725, 478, 8, 84, 0));
                this.mySquaresForJumping.push(new Box2DBondary(770, 674, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 683, 9, 8, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 305, 8, 108, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 616, 8, 43, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 776, 8, 43, 0));
                this.mySquaresForJumping.push(new Box2DBondary(810, 567, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1009, 465, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(912, 518, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1072, 411, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 816, 9, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(863, 701, 12, 39, 0));
                this.mySquaresForJumping.push(new Box2DBondary(864, 424, 12, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(974, 669, 35, 8, 0));
            }else if(sideNum==4){ // Creating Side Four
                this.mySquaresForJumping.push(new Box2DBondary(712, 425, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(723, 411, 9, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(748, 397, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(783, 371, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(819, 345, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(855, 318, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(891, 290, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(926, 246, 4, 34, 0));
                this.mySquaresForJumping.push(new Box2DBondary(961, 264, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(997, 290, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1032, 318, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1068, 247, 4, 48, 0));
                this.mySquaresForJumping.push(new Box2DBondary(730, 612, 4, 48, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 518, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 567, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 465, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(774, 656, 48, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(721, 669, 13, 8, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 469, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 678, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 714, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 736, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 759, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 776, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1100, 794, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(712, 704, 4, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(730, 776, 4, 44, 0));
                this.mySquaresForJumping.push(new Box2DBondary(766, 750, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(837, 750, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(908, 750, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(980, 750, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1051, 750, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(802, 803, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(873, 803, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(944, 803, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1015, 803, 4, 17, 0));
            }

            // drawing the square borders (just needed while creating and coding)
            //for (var i = 0; i < this.mySquaresForJumping.length; i++) {
            //    this.mySquaresForJumping[i].draw(ctx);
            //}
            //make sure that we just redraw when we change the side (to the dark)
            prevSideNum = sideNum;
        }
    }
}else if(this.level==3){ // jumping files for level 2
    if(prevSideNum != sideNum){
        for(var z = 0;z < this.mySquaresForJumping.length; z++){
            this.mySquaresForJumping[z].removeBody();
            this.mySquaresForJumping.splice(z,1);
        }
        if(this.videoPlayed){
            if(sideNum==1){ // Creating Side One
                this.mySquaresForJumping.push(new Box2DBondary(770, 795, 75, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(944, 750, 52, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1108, 701, 78, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1169, 735, 17, 30, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1149, 617, 39, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1198, 555, 8, 51, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1170, 467, 17, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1108, 439, 17, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1024, 587, 53, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(917, 551, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(847, 515, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(717, 656, 17, 44, 0));
                this.mySquaresForJumping.push(new Box2DBondary(727, 560, 6, 51, 0));
                this.mySquaresForJumping.push(new Box2DBondary(743, 513, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(721, 504, 13, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(656, 481, 17, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(728, 358, 6, 70, 0));
                this.mySquaresForJumping.push(new Box2DBondary(728, 237, 6, 39, 0));
            }else if(sideNum==2){ // Creating Side Two
                this.mySquaresForJumping.push(new Box2DBondary(1139, 599, 17, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1215, 656, 17, 43, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1179, 732, 17, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 567, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 510, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 475, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 439, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 795, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 750, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 701, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(698, 617, 17, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(721, 600, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(729, 587, 4, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 550, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 514, 8, 5, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 439, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(753, 604, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(767, 520, 4, 87, 0));
                this.mySquaresForJumping.push(new Box2DBondary(785, 468, 12, 35, 0));
            }else if(sideNum==3){ // Creating Side Three
                this.mySquaresForJumping.push(new Box2DBondary(784, 630, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(685, 701, 46, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(656, 737, 17, 31, 0));
                this.mySquaresForJumping.push(new Box2DBondary(676, 617, 39, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(627, 554, 8, 52, 0));
                this.mySquaresForJumping.push(new Box2DBondary(654, 468, 17, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(734, 439, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(799, 474, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(912, 510, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(957, 567, 35, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(864, 599, 17, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1106, 793, 14, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1108, 656, 17, 44, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1097, 556, 6, 56, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1110, 503, 6, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1169, 481, 17, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1097, 358, 6, 70, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1097, 238, 6, 39, 0));               
            }else if(sideNum==4){ // Creating Side Four
                this.mySquaresForJumping.push(new Box2DBondary(739, 536, 4, 35, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 567, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 510, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 474, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(725, 439, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(686, 599, 17, 34, 0));
                this.mySquaresForJumping.push(new Box2DBondary(645, 732, 17, 36, 0));
                this.mySquaresForJumping.push(new Box2DBondary(609, 656, 17, 44, 0));
                this.mySquaresForJumping.push(new Box2DBondary(788, 554, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(832, 590, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(876, 626, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(921, 590, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(966, 554, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1010, 522, 4, 13, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1055, 563, 4, 26, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1000, 504, 88, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(876, 481, 17, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(930, 411, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(966, 376, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1001, 340, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1037, 304, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1068, 238, 4, 40, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 439, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 515, 8, 4, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 551, 8, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 700, 8, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 750, 8, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 794, 8, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1126, 617, 17, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1099, 551, 8, 3, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1103, 599, 4, 17, 0));
                this.mySquaresForJumping.push(new Box2DBondary(1096, 586, 4, 4, 0));
            }

            // drawing the square borders (just needed while creating and coding)
            //for (var i = 0; i < this.mySquaresForJumping.length; i++) {
            //   this.mySquaresForJumping[i].draw(ctx);
            //}
            //make sure that we just redraw when we change the side (to the dark)
            prevSideNum = sideNum;
        }
    }
}
} // end Box2DSide
