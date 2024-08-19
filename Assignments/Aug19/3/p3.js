function isRegExp(value) {
   return value instanceof RegExp;
}

console.log(isRegExp(/^[a-zA-Z_][a-zA-Z0-9_]*$/));
console.log(isRegExp('^[a-zA-Z_]'));