var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.area = function (v1, v2) {
        return v1 + v2;
    };
    return Shape;
}());
function totalArea(shape1, shape2) {
    return shape1.area(1, 2) + shape2.area(2, 3);
}
console.log(totalArea(new Shape(), new Shape()));
