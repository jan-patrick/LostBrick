/**
 * Created by franklinhc on 9/5/15.
 */

function Box2DCircle ( x,  y,  r) {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;

    this.miX = 0;
    this.miY = 0;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 1.0;
    this.fixDef.friction = 0.5;
    this.fixDef.restitution = 1;
    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_dynamicBody;
    this.fixDef.shape = new b2CircleShape(r/ SCALE);
    this.bodyDef.position.x = x/ SCALE;
    this.bodyDef.position.y = y/ SCALE;

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);

    this.update = function() {
        this.miX = this.Object.GetBody().GetPosition().x * SCALE;
        this.miY = this.Object.GetBody().GetPosition().y * SCALE;
        //console.log("miX = " + miX + "   miY = " + miY);
    };

    this.applyImpulse = function(degrees, power) {
        this.Object.GetBody().ApplyImpulse(
            new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power, Math.sin(degrees * (Math.PI / 180)) * power),
            this.Object.GetBody().GetWorldCenter());
    };

    this.draw = function(ctx) {
        this.update();
        var alpha = 0.3;
        ctx.fillStyle = "rgba(51, 190, 0, " + alpha + ")";
        ctx.strokeStyle = "rgba(51, 190, 0, 0.9)";
        ctx.beginPath();
        ctx.arc(this.miX , this.miY , r , 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    this.contains = function (mousePVec) {
        return (this.fixDef.shape.TestPoint(this.Object.GetBody().GetTransform(), mousePVec)) ;
    };

    this.removeBody = function() {
        world.DestroyBody(this.Object.GetBody());
    };

    this.done = function() {
        //console.log("miX = "+ miX +"   miY = "+ miY);
        if (this.miY > canvas.height + r || this.miX < -r || this.miX > canvas.width + r ) {
        //if (miY > canvas.height + r) {
            world.DestroyBody(this.Object.GetBody());
            return true;
        }
        return false;
    };
}  // end Box2DCircle




