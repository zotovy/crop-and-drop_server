"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileHelper = /** @class */ (function () {
    function FileHelper() {
        this.convertToFilename = function (date) {
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var mi = date.getMinutes();
            var s = date.getSeconds();
            return y + "-" + m + "-" + d + "-" + h + "-" + mi + "-" + s;
        };
    }
    return FileHelper;
}());
exports.default = new FileHelper();
