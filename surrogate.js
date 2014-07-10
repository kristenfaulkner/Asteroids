Function.prototype.inherits = function(superclass) {
    function Surrogate () {};
    Surrogate.prototype = superclass.prototype;
    this.prototype = new Surrogate();
};



function MovingObject() {};
MovingObject.prototype.velocity = function() {console.log(1)};

function Ship () {};

function Asteroid () {};


Asteroid.inherits(MovingObject);
var asteroid1 = new Asteroid();

Ship.inherits(MovingObject);
var ship1 = new Ship();
var ship2 = new Ship();

ship1.velocity();
asteroid1.velocity();

//////////////////////////////////////////////////////

function Country() {};
Country.prototype.nationalSong = function() {console.log("I'm american");};

function State () {};
State.inherits(Country);

var california = new State();
var alaska = new State();

california.nationalSong();

function City () {};
City.inherits(State);
var SF = new City();
var Anchorage = new City();

Anchorage.nationalSong();
california.nationalSong();


ship1.velocity();
asteroid1.velocity();