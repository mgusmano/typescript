class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello there, " + this.greeting;
    }
}

var greeter = new Greeter(" Twitter");