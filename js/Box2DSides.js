/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DSide (sideNum) {

var prevSideNum;    

var myBoundariesSideOne = [];
var myBoundariesSideTwo = [];
var myBoundariesSideThree = [];
var myBoundariesSideFour = [];    

if(prevSideNum != sideNum){
    for(var z = 0;z < myBoundariesSideOne.length; z++){
        myBoundariesSideOne.splice(z,1);
    }
    for(var zz = 0;zz < myBoundariesSideTwo.length; zz++){
        myBoundariesSideTwo.splice(zz,1);
    }
    for(var zzz = 0;zzz < myBoundariesSideThree.length; zzz++){
        myBoundariesSideThree.splice(zzz,1);
    }
    for(var zzzz = 0;zzzz < myBoundariesSideFour.length; zzzz++){
        myBoundariesSideFour.splice(zzzz,1);
    }    

    if(sideNum==1){ // Creating Side One
        if(myBoundariesSideOne.length<3){
            myBoundariesSideOne.push(new Box2DBondary(300, 450, 200, 20, 0));
            myBoundariesSideOne.push(new Box2DBondary(300, 300, 100, 20, 0));
            myBoundariesSideOne.push(new Box2DBondary(200, 50, 50, 20, 0));
        }
        for (var i = 0; i < myBoundariesSideOne.length; i++) {
            myBoundariesSideOne[i].draw(ctx);
        }
    }else if(sideNum==2){ // Creating Side Two
        if(myBoundariesSideTwo.length<3){
            myBoundariesSideTwo.push(new Box2DBondary(100, 50, 10, 50, 0));
            myBoundariesSideTwo.push(new Box2DBondary(300, 300, 10, 100, 0));
            myBoundariesSideTwo.push(new Box2DBondary(400, 200, 10, 70, 0));
        }   
        for (var ii = 0; ii < myBoundariesSideTwo.length; ii++) {
            myBoundariesSideTwo[ii].draw(ctx);
        }
    }else if(sideNum==3){ // Creating Side Three
        if(myBoundariesSideThree.length<3){
            myBoundariesSideThree.push(new Box2DBondary(120, 50, 30, 10, 0));
            myBoundariesSideThree.push(new Box2DBondary(300, 300, 200, 10, 0));
            myBoundariesSideThree.push(new Box2DBondary(400, 200, 100, 10, 0));
        }   
        for (var ii = 0; ii < myBoundariesSideThree.length; ii++) {
            myBoundariesSideThree[ii].draw(ctx);
        }
    }else if(sideNum==4){ // Creating Side Four
        if(myBoundariesSideFour.length<3){
            myBoundariesSideFour.push(new Box2DBondary(200, 400, 10, 100, 0));
            myBoundariesSideFour.push(new Box2DBondary(100, 300, 10, 40, 0));
            myBoundariesSideFour.push(new Box2DBondary(400, 200, 10, 70, 0));
        }   
        for (var ii = 0; ii < myBoundariesSideFour.length; ii++) {
            myBoundariesSideFour[ii].draw(ctx);
        }
    }
    prevSideNum = sideNum;
}    
} // end Box2DSide