function isJsonObject(value) {
   return typeof value === 'object';
}

console.log(isJsonObject({'title':'Hello','body':"Bye"}));
console.log(isJsonObject(1));