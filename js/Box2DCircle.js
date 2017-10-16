/**
 * Created by Roman Kuhn, Marcus Schoch, Jan Schneider on 3/10/17.
 */

function Box2DCircle ( x,  y,  r) {
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2Vec2 = Box2D.Common.Math.b2Vec2;

    var rainAlpha;

    this.miX = 0;
    this.miY = 0;

    this.fixDef = new b2FixtureDef;
    this.fixDef.density = 0;
    this.fixDef.friction = 0.0001;
    this.fixDef.restitution = 0.2;
    this.bodyDef = new b2BodyDef;
    this.bodyDef.type = b2Body.b2_dynamicBody;
    this.fixDef.shape = new b2CircleShape(r/ SCALE);
    this.bodyDef.position.x = x/ SCALE;
    this.bodyDef.position.y = y/ SCALE;

    this.Object = world.CreateBody(this.bodyDef).CreateFixture(this.fixDef);

    if(rainAlpha==undefined){
      rainAlpha=0.002;
    }

    this.update = function() {
        this.miX = this.Object.GetBody().GetPosition().x * SCALE;
        this.miY = this.Object.GetBody().GetPosition().y * SCALE;
        //console.log("miX = " + miX + "   miY = " + miY);
        if(rainAlpha<=0.5){
          rainAlpha+=0.001;
        }else{
          rainAlpha-=0.001;
        }
    };

    this.getRainAlpha = function() {
        return this.Object.rainAlpha;
    };

    this.applyImpulse = function(degrees, power) {
        this.Object.GetBody().ApplyImpulse(
            new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power, Math.sin(degrees * (Math.PI / 180)) * power),
            this.Object.GetBody().GetWorldCenter());
    };

    this.draw = function(ctx) {
        this.update();
        ctx.fillStyle = "rgba(10, 100, 255, " + rainAlpha + ")";
        ctx.strokeStyle = "rgba(10, 100, 255, " + rainAlpha + ")";
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
        if (rainAlpha>=0.9) {
            this.deleteRain = true;
            world.DestroyBody(this.Object.GetBody());
        }
    };
}  // end Box2DCircle
