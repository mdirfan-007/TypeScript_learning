"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var a = 12;
function foo() {
    return a + 1;
}
console.log(foo());
let arr = ["hello", 42, 11];
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "ADMIN";
    userRoles["USER"] = "USER";
    userRoles["GUEST"] = "GUEST";
})(userRoles || (userRoles = {}));
userRoles.ADMIN;
//# sourceMappingURL=app.js.map