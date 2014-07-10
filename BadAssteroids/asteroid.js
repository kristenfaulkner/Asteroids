(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var MovingObject = Asteroids.MovingObject;
    
    var MAX_RADIUS = 5;
    var COLOR = "red";
    
    var Asteroid = Asteroids.Asteroid = function Asteroid(pos, vel, radius, color) {
        // MovingObject.apply(this, pos, vel, radius, color);
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }
    
    Asteroid.inherits(MovingObject);
    
    Asteroid.randomAsteroid = function(dimX, dimY) {
        return new Asteroid(
            [dimX * Math.random(), dimY * Math.random()],
            2 * Math.random(),
            5 * Math.random(),
            "red"
        );
    };
    
})(this);
