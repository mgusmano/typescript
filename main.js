var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello there, " + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter(" Twitter");
