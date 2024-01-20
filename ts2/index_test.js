const uniq = require("uniq");
// uniq的作用是删去数组多余数字
let arr = [1, 1, 1, 2, 2, 3, 4, 4, 3, 6, 9];
const result = uniq(arr);

console.log(result);
