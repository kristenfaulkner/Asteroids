var person = function (){
    this.calcIQ = multiply.myBind(this);
};

var robot = function (){
    this.calcIQ = sum.myBind(this);
};

robot.prototype.iq = robot.calcIQ;

var sum = function() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length == 0){
        return 0;
    }
    return args.reduce(function(x,y){return x + y});
};

var multiply = function() {
    var args = Array.prototype.slice.call(arguments);
    if (args.length == 0){
        return 0;
    }
    return args.reduce(function(x,y){return x * y});
};

Function.prototype.myBind = function(context){
    var that = this;
    var moreArgs = Array.prototype.slice.call(arguments, 1);
    
    return function() {

        var args = moreArgs.concat(Array.prototype.slice.call(arguments));

        return that.apply(context, args);
    }
}

var dog = {
    name: "Fido"
}

var eatThings = function() {
    var args = Array.prototype.slice.call(arguments);
    var that = this;

    args.forEach(function(arg) {
        console.log(that.name + ' is eating ' + arg);
    });
}

// Array.prototype.forEach = function(callback) {
//     for(x in this) {
//         callback(x);
//     }
// }


var boundFunc = eatThings.myBind(dog, 'cats', 'dog food', 'grass');

boundFunc('apples', 'oranges', 'bananas');
// console.log('/////////');
// boundFunc('apples', 'oranges', 'bananas', 'ice cream!');


var curriedSum = function(numArgs) {
    var numbers = [];
    var _curriedSum = function(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce(function(x,y){return x + y});
        } else {
            return _curriedSum;
        }
    };
    return _curriedSum;
};

Function.prototype.curry = function(numArgs){

    that = this;
    var args = [];
    
    var _curried = function(num) {
        args.push(num);
        // console.log(that(args));
        if (args.length === numArgs) {
                    //that.apply( canBeAnything, args)
            return that.apply({}, args);
        } else { 
            return _curried;
        }
    }
    return _curried;
};

// function () { console.log(this) }()


//
// function Cat (name) {
//     this.name = name
//     this.sayName = function() {
//         console.log(this.name);
//     }
// }
//
// var cat = new Cat('Gizmo')
// cat.sayName()