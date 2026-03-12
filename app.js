var User = /** @class */ (function () {
    function User() {
        this.name = 'harsh';
        this.age = 22;
        this.village = 'sangamner';
    }
    return User;
}());
var user1 = new User();
console.log(user1);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var b1 = new Person('harsh', 22);
console.log(b1);
function getMan(name, age, gender) {
    if (gender === void 0) { gender = 'not to say'; }
    console.log(name, age, gender);
}
getMan('Irfan', 26, 'Male');
getMan('Arthor', 22);
function add() {
    var trr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        trr[_i] = arguments[_i];
    }
    console.log(trr);
}
add(1, 2, 3, 3, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8);
