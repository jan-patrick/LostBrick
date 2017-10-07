/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */

function Box2Dbasket ( x,  y) {
    var miX,miY,myAngle;
    var miWidht  = 70 / 60;
    var miHeight = 250 / 60;
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
        this.bodyDef.type = b2Body.b2_kinematicBody;
        this.bodyDef.position.x = x/ SCALE + miWidht;
        this.bodyDef.position.y = y/ SCALE + miHeight;

    // making the center
        this.fixDef = new b2FixtureDef;
        this.fixDef.shape = new b2CircleShape (0.000000001/SCALE);
        this.fixDef.density = 0;
        this.fixDef.friction = 0;
        this.fixDef.restitution = 0;

    // making the top cover
        this.fixDef4 = new b2FixtureDef;
        this.fixDef4.density = 1.0;
        this.fixDef4.friction = 0.5;
        this.fixDef4.restitution = 0.2;
        this.fixDef4.shape = new b2PolygonShape;
        this.points = [{x: -0.5, y: -0.1}, {x: 0.5, y: -0.1}, {x: 0.4, y: 0}, {x: -0.4, y: 0}, ];
        for (var i = 0; i < this.points.length; i++) {
            var vec = new b2Vec2();
            vec.Set(this.points[i].x, this.points[i].y);
            this.points[i] = vec;
        }
        this.fixDef4.shape.SetAsArray(this.points, this.points.length);

    // making the right side
        this.fixDef5 = new b2FixtureDef;
        this.fixDef5.density = 1.0;
        this.fixDef5.friction = 0.5;
        this.fixDef5.restitution = 0.2;
        this.fixDef5.shape = new b2PolygonShape;
        this.points5 = [{x: 0.4, y: 0}, {x: 0.5, y: -0.1}, {x: 0.5, y: 0.9}, {x: 0.4, y: 0.8}];
        for (var i = 0; i < this.points5.length; i++) {
            var vec = new b2Vec2();
            vec.Set(this.points5[i].x, this.points5[i].y);
            this.points5[i] = vec;
        }
        this.fixDef5.shape.SetAsArray(this.points5, this.points5.length);

    // making the bottom cover
        this.fixDef6 = new b2FixtureDef;
        this.fixDef6.density = 1.0;
        this.fixDef6.friction = 0.5;
        this.fixDef6.restitution = 0.2;
        this.fixDef6.shape = new b2PolygonShape;
        this.points6 = [{x: -0.5, y: 0.9}, {x: -0.4, y: 0.8}, {x: 0.4, y: 0.8}, {x: 0.5, y: 0.9}];
        for (var i = 0; i < this.points6.length; i++) {
            var vec = new b2Vec2();
            vec.Set(this.points6[i].x, this.points6[i].y);
            this.points6[i] = vec;
        }
        this.fixDef6.shape.SetAsArray(this.points6, this.points6.length);

    // making the left side
         this.fixDef7 = new b2FixtureDef;
         this.fixDef7.density = 1.0;
         this.fixDef7.friction = 0.5;
         this.fixDef7.restitution = 0.2;
         this.fixDef7.shape = new b2PolygonShape;
         this.points7 = [{x: -0.5, y: -0.1}, {x: -0.4, y: 0}, {x: -0.4, y: 0.8}, {x: -0.5, y: 0.9}];
         for (var i = 0; i < this.points7.length; i++) {
             var vec = new b2Vec2();
             vec.Set(this.points7[i].x, this.points7[i].y);
             this.points7[i] = vec;
         }
         this.fixDef7.shape.SetAsArray(this.points7, this.points7.length);



    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().CreateFixture(this.fixDef4);
    this.Object.GetBody().CreateFixture(this.fixDef5);
    this.Object.GetBody().CreateFixture(this.fixDef6);
    this.Object.GetBody().CreateFixture(this.fixDef7);


    this.update = function() {
        miX = this.Object.GetBody().GetPosition().x *  SCALE;
        miY = this.Object.GetBody().GetPosition().y * SCALE;
        myAngle = this.Object.GetBody().GetAngle();
        //console.log("miX = " + miX + "   miY = " + miY + "    myAngle = "+ myAngle);
        //console.log("myAngle = "+ myAngle);
    };

    this.draw = function(ctx) {
        this.update();
        var alpha = 1;
        ctx.fillStyle = "rgba(141, 141, 141, " + alpha + ")";
        ctx.strokeStyle = "rgba(141, 141, 141, " + alpha + ")";

        //drawing rect
        ctx.save();
        ctx.translate(miX, miY);
        ctx.rotate(myAngle);

         //drawing top cover
            ctx.beginPath();
            ctx.moveTo((this.points[0].x*SCALE), (this.points[0].y*SCALE));
            for (var i = 1; i < this.points.length; i++) {
                ctx.lineTo((this.points[i].x*SCALE), (this.points[i].y*SCALE));
            }
            ctx.lineTo(this.points[0].x*SCALE, this.points[0].y*SCALE );
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

        //drawing bottom right side
             ctx.beginPath();
             ctx.moveTo((this.points5[0].x*SCALE), (this.points5[0].y*SCALE));
             for (var i = 1; i < this.points5.length; i++) {
                 ctx.lineTo((this.points5[i].x*SCALE), (this.points5[i].y*SCALE));
             }
             ctx.lineTo(this.points5[0].x*SCALE, this.points5[0].y*SCALE );
             ctx.closePath();
             ctx.fill();
             ctx.stroke();

        //drawing bottom cover
             ctx.beginPath();
             ctx.moveTo((this.points6[0].x*SCALE), (this.points6[0].y*SCALE));
             for (var i = 1; i < this.points6.length; i++) {
                 ctx.lineTo((this.points6[i].x*SCALE), (this.points6[i].y*SCALE));
             }
             ctx.lineTo(this.points6[0].x*SCALE, this.points6[0].y*SCALE );
             ctx.closePath();
             ctx.fill();
             ctx.stroke();

        //drawing bottom left side
             ctx.beginPath();
             ctx.moveTo((this.points7[0].x*SCALE), (this.points7[0].y*SCALE));
             for (var i = 1; i < this.points7.length; i++) {
                 ctx.lineTo((this.points7[i].x*SCALE), (this.points7[i].y*SCALE));
             }
             ctx.lineTo(this.points7[0].x*SCALE, this.points7[0].y*SCALE );
             ctx.closePath();
             ctx.fill();
             ctx.stroke();


        /*drawing center point
        ctx.fillStyle = "rgba(251, 100, 0, " + alpha + ")";
        ctx.strokeStyle = "rgba(251, 100, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(0 , 0 , 3 , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();*/




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

    this.removeBody = function() {
        world.DestroyBody(this.Box.GetBody());
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