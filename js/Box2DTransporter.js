/**
 * Created by franklinhc on 28/3/17.
 */
function Box2DTransporter ( x,  y) {
    var miX,miY,myAngle;
    var miWidht  = 180 / SCALE/2;
    var miHeight = 10 / SCALE/2;
    var r=30;

    var   b2Vec2 = Box2D.Common.Math.b2Vec2

    this.b2Vec2 = Box2D.Common.Math.b2Vec2
        , b2BodyDef = Box2D.Dynamics.b2BodyDef
        , b2Body = Box2D.Dynamics.b2Body
        , b2FixtureDef = Box2D.Dynamics.b2FixtureDef
        , b2Fixture = Box2D.Dynamics.b2Fixture
        , b2World = Box2D.Dynamics.b2World
        , b2MassData = Box2D.Collision.Shapes.b2MassData
        , b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape
        , b2CircleShape = Box2D.Collision.Shapes.b2CircleShape
        , b2DebugDraw = Box2D.Dynamics.b2DebugDraw
    ;

    // making body
    this.bodyDef = new b2BodyDef;
    //this.bodyDef.type = b2Body.b2_dynamicBody;
    this.bodyDef.type = b2Body.b2_kinematicBody;
    this.bodyDef.position.x = x/ SCALE + miWidht;
    this.bodyDef.position.y = y/ SCALE + miHeight;

    // making the box
    this.fixDef = new b2FixtureDef;
    this.fixDef.shape = new b2PolygonShape;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2;
    this.fixDef.shape.SetAsBox(miWidht, miHeight);


    // making one triangle
    this.fixDef3 = new b2FixtureDef;
    this.fixDef3.density = 1.0;
    this.fixDef3.friction = 0.5;
    this.fixDef3.restitution = 0.2;
    this.fixDef3.shape = new b2PolygonShape;
    this.points3 = [{x: -1, y: 0}, {x: -3, y: 0}, {x: -3, y: -3}];
    for (var i = 0; i < this.points3.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points3[i].x, this.points3[i].y);
        this.points3[i] = vec;
    }
    this.fixDef3.shape.SetAsArray(this.points3, this.points3.length);

    // making the other triangle
    this.fixDef4 = new b2FixtureDef;
    this.fixDef4.density = 1.0;
    this.fixDef4.friction = 0.5;
    this.fixDef4.restitution = 0.2;
    this.fixDef4.shape = new b2PolygonShape;
    //this.points = [{x: 1, y: 0}, {x: 3, y: 0}, {x: 3, y: 3}];
    this.points = [{x: 1, y: 0}, {x: 3, y: -3}, {x: 3, y: 0}];
    for (var i = 0; i < this.points.length; i++) {
        var vec = new b2Vec2();
        vec.Set(this.points[i].x, this.points[i].y);
        this.points[i] = vec;
    }
    this.fixDef4.shape.SetAsArray(this.points, this.points.length);



    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().CreateFixture(this.fixDef3);
    this.Object.GetBody().CreateFixture(this.fixDef4);

    // set an angualr velocity
    //var miAV = Math.random() * -Math.PI;
    //this.Object.GetBody().SetAngularVelocity(miAV);


    this.update = function() {
        miX = this.Object.GetBody().GetPosition().x *  SCALE;
        miY = this.Object.GetBody().GetPosition().y * SCALE;
        myAngle = this.Object.GetBody().GetAngle();
        //console.log("miX = " + miX + "   miY = " + miY + "    myAngle = "+ myAngle);
        //console.log("myAngle = "+ myAngle);
    };

    this.draw = function(ctx) {
        this.update();
        var alpha = 0.3;
        ctx.fillStyle = "rgba(151, 151, 255, " + alpha + ")";
        ctx.strokeStyle = "rgba(151, 151, 255, 0.9)";

        //drawing rect
        ctx.save();
        ctx.translate(miX, miY);
        ctx.rotate(myAngle);
        ctx.beginPath();

        var anchoRect= miWidht*SCALE*2;
        var altoRect = miHeight*SCALE*2;
        ctx.rect(-anchoRect/2 , -altoRect/2 , anchoRect, altoRect);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //drawing triangle
        ctx.beginPath();
        ctx.moveTo((this.points[0].x*SCALE), (this.points[0].y*SCALE));
        for (var i = 1; i < this.points.length; i++) {
            ctx.lineTo((this.points[i].x*SCALE), (this.points[i].y*SCALE));
        }
        ctx.lineTo(this.points[0].x*SCALE, this.points[0].y*SCALE );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        //drawing 2nd triangle
        ctx.beginPath();
        ctx.moveTo((this.points3[0].x*SCALE), (this.points3[0].y*SCALE));
        for (var i = 1; i < this.points3.length; i++) {
            ctx.lineTo((this.points3[i].x*SCALE), (this.points3[i].y*SCALE));
        }
        ctx.lineTo(this.points3[0].x*SCALE, this.points3[0].y*SCALE );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();


        //drawing center point
        ctx.fillStyle = "rgba(251, 100, 0, " + alpha + ")";
        ctx.strokeStyle = "rgba(251, 100, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(0 , 0 , 3 , 0, Math.PI * 2, true);
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



    this.done = function() {
        //console.log("miX = "+ miX +"   miY = "+ miY + "  canvas.height = " +canvas.height + "   altoRect = " + altoRect + "   anchoRect = " + anchoRect);
        if (miY > canvas.height + altoRect || miX < -anchoRect || miX > canvas.width +anchoRect ) {
            world.DestroyBody(this.Box.GetBody());
            return true;
        }
        return false;
    };
}