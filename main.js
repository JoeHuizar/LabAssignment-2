var Greeter = /** @class */ (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    };
    Greeter.prototype.hideGreeting = function () {
        var banner = document.getElementById('banner');
        banner.innerHTML = 'r1c2';
    };
    return Greeter;
}());
var greeter = new Greeter("Joseph", "Huizar");
