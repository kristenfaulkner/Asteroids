(function(root){
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Asteroid = Asteroids.Asteroid;
    var MovingObject = Asteroids.MovingObject;
    
    var Game = Asteroids.Game = function Game(ctx, numAsteroids) {
        this.dimX = ctx.width;
        this.dimY = ctx.height;
        this.ctx = ctx.getContext("2d");
        this.asteroids = [];
        this.makeAsteroids(numAsteroids);
    };
    
    Game.prototype.makeAsteroids = function(numAsteroids){
        for (var i = 0; i < numAsteroids; i++) {
          this.asteroids.push(Asteroid.randomAsteroid(this.dimX, this.dimY));
        }
        return this.asteroids;
    };
    
    Game.prototype.draw = function(game){
        game.ctx.fillStyle = "darkgray";
        game.ctx.fillRect(0, 0, game.dimX, game.dimY);
        
        // console.log(game.asteroids);
        
        game.asteroids.forEach( function(asteroid){
            console.log(asteroid);
            asteroid.draw(game.ctx);
        });
       // console.log("draw working");
    };
    
    Game.prototype.move = function() {
        game = this;
        this.asteroids.forEach( function(asteroid) {asteroid.move(game.ctx) });
        // console.log("move working");
    }
    
    Game.prototype.step = function() {
        this.move();
        this.draw();
        
    }
    
    Game.prototype.start = function() {
        game = this;
        game.draw(game);
        // window.setInterval(function(){ game.move(game); game.draw(game)}, 30);
    }
})(this);