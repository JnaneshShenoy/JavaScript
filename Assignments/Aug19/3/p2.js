function isJsonObj(i) {
   return typeof i === 'object';
}


console.log(isJsonObj({'title':'Hello','body':"Bye"}));
console.log(isJsonObj(1));