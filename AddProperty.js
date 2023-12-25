
// constructor function
function fruit () {
    this.name = 'mango',
    this.colour ='yellow'
}
const fruits = new fruit ();

const greenfruit= new fruit();

// adding new property to constructor function
//Person.prototype.gender = 'Male';

//Adding the new property of object fruit 
fruits.rate=100;
// adding method to person1 object
fruits.greet=function(){
 console.log ('hello');

}
fruits.greet();
//greenfruit.greet();