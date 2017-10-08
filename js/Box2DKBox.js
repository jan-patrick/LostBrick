/**
 * Created by Jan Schneider on 9/21/17 .
 */

function Box2DKBox ( x,  y,  w, h) {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var miX,miY,myAngle;

    var miWidht  = w / SCALE;
    var miHeight = h / SCALE;
    var anchoRect= miWidht*SCALE*2;
    var altoRect = miHeight*SCALE*2;

    this.myColors = [200, 100, 0];
    this.preven = 0;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2;

    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_kinematicBody;
    this.fixDef.shape = new b2PolygonShape;
    this.fixDef.shape.SetAsBox(miWidht, miHeight);

    this.bodyDef.position.x = x/ SCALE;
    this.bodyDef.position.y = y/ SCALE;

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().SetUserData(this);

    //var miAV = Math.random() * Math.PI/10;
    //this.Object.GetBody().SetAngularVelocity(miAV);


    this.update = function() {
        miX = this.Object.GetBody().GetPosition().x *  SCALE;
        miY = this.Object.GetBody().GetPosition().y * SCALE;
        myAngle = this.Object.GetBody().GetAngle();
    };

    this.draw = function(ctx) {
        this.update();
        var alpha = 0.5;

        ctx.save();
        ctx.fillStyle = "rgba(131, 131, 131," + alpha + ")";
        ctx.strokeStyle = "rgba(131, 131, 131," + alpha + ")";

        ctx.beginPath();
        ctx.translate(miX, miY);
        ctx.rotate(myAngle);

        ctx.rect(-anchoRect/2 , -altoRect/2 , anchoRect, altoRect);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };


    this.setLocation = function (xA,yA) {
        var posAhora = new b2Vec2(xA / SCALE, yA / SCALE);
        this.Object.GetBody().SetPosition(posAhora);
    };

    this.SetAngularVelocity = function (a) {
        this.Object.GetBody().SetAngularVelocity(a);
    };

    this.SetLinearVelocity = function (vec) {
        this.Object.GetBody().SetLinearVelocity(vec);
    };

    this.colorchange = function (){
        for(var i = 0; i < 3; i++){
            myColors = myColors.slice(i);  
            myColors.push(Math.floor(Math.random() * 250));   
        }    
    }

    this.changeLocation = function (xA,yA) {
        var posAhora = new b2Vec2(xA / SCALE, yA / SCALE);
        this.Object.GetBody().SetPosition(posAhora);
    };

    this.done = function() {
        world.DestroyBody(this.Object.GetBody());
    };
}

