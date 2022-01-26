"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bbb = exports.aaa = exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id) {
        this.id = id;
        this.foo = 'Hallo';
        this.bar = 'Hallo';
    }
    Customer.prototype.fooBar = function (x) {
        var _this = this;
        setTimeout(function () {
            console.log('ID', _this.id);
        }, 2000);
        return '';
    };
    return Customer;
}());
exports.Customer = Customer;
function aaa() { }
exports.aaa = aaa;
exports.bbb = 5;
function testfn() { }
console.log('CCCC');
//# sourceMappingURL=customer.js.map