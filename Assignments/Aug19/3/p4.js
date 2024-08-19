function isChar(value) {
   return typeof value === 'string' && value.length === 1;
}

console.log(isChar('x'));
console.log(isChar('er'));
console.log(isChar(5));