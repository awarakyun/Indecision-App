class Person {
constructor(name = 'Anonymous',age = 0){
this.name = name;
this.age = age;
}
 getDEscription() {
   //return 'hi! i am '+ this.name;
   return ` ${this.name} is ${this.age} year(S) old`;
 }
}
class Student extends Person {
constructor(name, age ,major = 'Undecided')  {
           super(name,age);
           this.major = major;

}
hasMajor() {
  return !!this.major;
}
getDEscription() {
  let description = super.getDEscription();
  return description;
}
}

class Traveler extends Person{
  constructor(name,age,homeLocation){
    super(name,age)
    this.homeLocation = homeLocation;
  }
  hasHomeLocation(){
    return !!this.homeLocation;
  }
  getDEscription(){
    let desc =  `Hi, i am ${this.name}. `;
    let add = '';
     if(this.hasHomeLocation()){
     add = `i am visiting from ${this.homeLocation} ` ;
  }
  return desc + add;
}
}
const me = new Traveler('Ankit Kumar',22,'Gaya');
console.log(me.getDEscription());
