/* 
Example 3 - Operators Priority

Disassemble operators priority in the variable value assignment instruction result.

const result = 108 + 223 - 2 * 5;
console.log(result);  // 321
*/
const step1 = 108 + 223;
const step2 = 2 * 5;
const step3 = step1 - step2; 
const result = step3;
console.log(result);  // 321