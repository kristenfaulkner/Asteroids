(function(root){
    
    Function.prototype.inherits = function(superclass) {
        function Surrogate () {};
        Surrogate.prototype = superclass.prototype;
        this.prototype = new Surrogate();
    };
    
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    var MovingObject = Asteroids.MovingObject = function MovingObject(pos, vel, radius, color) {
        this.pos = pos;
        this.vel = [Math.random() * vel, Math.random() * vel] ;
        this.radius = radius;
        this.color = color;
    }

    MovingObject.prototype.move = function(ctx) {
        // var newx = (this.pos[0] + this.vel[0]) % ctx.dimX;
//         var newy = (this.pos[1] + this.vel[1]) % ctx.dimY;
//         this.pos = [newx, newy];
        
    };
    
    MovingObject.prototype.draw = function (ctx) {
    ctx.fillStyle = "black";
    ctx.beginPath();

    ctx.arc(
      this.centerX,
      this.centerY,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };
    // MovingObject.prototype.draw = function(ctx) {
    //     ctx.fillStyle = this.color;
    //
    //     ctx.beginPath();
    //     ctx.arc(
    //        this.pos[0],
    //        this.pos[1],
    //        this.radius,
    //        0,
    //        2 * Math.PI,
    //        false
    //     );
    //     ctx.fill();
    // };

    MovingObject.prototype.isCollidedWith = function(otherObject) {
        var xDist = this.pos[0] - otherObject.pos[0];
        var yDist = this.pos[1] - otherObject.pos[1];
        var dist = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        
        return (this.radius + otherObject.radius > dist);
    };
})(this);

