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
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return that.apply(context, args);
    }
}