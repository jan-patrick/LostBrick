/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */


function Box2DBondary ( x,  y,  w, h, a) {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var miX,miY;

    var miWidth  = w / SCALE;
    var miHeight = h / SCALE;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 0.2;

    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_staticBody;
    this.fixDef.shape = new b2PolygonShape;
    this.fixDef.shape.SetAsBox(miWidth, miHeight);

    this.bodyDef.position.x = x/ SCALE;
    this.bodyDef.position.y = y/ SCALE;

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);
    this.Object.GetBody().SetUserData(this);

    this.Object.GetBody().SetAngle(a);
    miX = this.Object.GetBody().GetPosition().x *  SCALE;
    miY = this.Object.GetBody().GetPosition().y * SCALE;


    this.draw = function(ctx) {
        var alpha = 0.3;

        ctx.save();
        ctx.fillStyle = "rgba(51, 51, 51, " + alpha + ")";
        ctx.strokeStyle = "rgba(51, 51, 51, 0.9)";

        ctx.beginPath();
        ctx.translate(miX, miY);
        ctx.rotate(a);

        var anchoRect= miWidth*SCALE*2;
        var altoRect = miHeight*SCALE*2;

        ctx.rect(-anchoRect/2 , -altoRect/2 , anchoRect, altoRect);
        ctx.closePath();

        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    this.removeBody = function() {
        world.DestroyBody(this.Object.GetBody());
    };    

} // end Box2DBoxStatic