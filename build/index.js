"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var len = this.collection.length;
        if (this.collection instanceof Array) {
            for (var i = 0; i < len; i++) {
                for (var j = 0; j < len - i - 1; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var temp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = temp;
                    }
                }
            }
        }
        if (this.collection instanceof String) {
        }
    };
    return Sorter;
}());
var sorter = new Sorter([1, 3, 2, 5]);
sorter.sort();
console.log(sorter.collection);
