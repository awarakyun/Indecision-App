const add = function (a,b) {
  return a+b;

}
console.log(55,89);
const user ={
  name: 'Ankit',
  cities: ['Gaya','Patna','Pune'],
  printPlacesLived ()  {
//    console.log(this.name);
   const that=this;
    console.log(this.cities);
    that.cities.forEach(function (city){
      console.log(that.name+' has lived in '+city);
    })
    }
  };

  let cityLivd = user.cities.map((city) => {
    return 'Ankit lived in the city '+city;
  } );
const multiplier ={
  numbers: [1,2,3,4,5,6,7,8,9],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((num) => {return num * this.multiplyBy;});
  }
}


console.log(multiplier.multiply());
