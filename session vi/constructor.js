function person(name,age,gender){
   this.name=name;
   this.age = age;
   this.gender=gender;
}

const p1 = new person("Jnanesh",21,"Male")

console.log(p1)