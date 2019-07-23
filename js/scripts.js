let moringaStudent = {
	firstName: "Charlie",
	lastName: "Obina",
	level: 1,
	track: ["Prep","Javascript","Python","Django"],
	enrollmentStatus: true
};

let myCat = {
	speak: function () {
		console.log("Meow!");
	}
};

//Accessing objects and methods
//Dot notation
myCat.name;
myCat.speak();

//bracket notation
myCat['name'];
myCat['speak']();

let dog = {};
dog.name = "Bark Simba";
dog.age = 5;
dog.colors = ['brown','black','white'];

//Use array methods
dog.colors.push('grey');
dog.age + 10;

//Update property - reassign value
dog.name = "Rex";

//Add function property as a method
dog.howl = function () {
	console.log('Aaaaaaaaaaaaooooooooooo!')
};
dog.howl();

//Use properties within properties e.g. to calculate dog years
dog.humanYears = function () {
	return this.age + 15;
};


//Literal Notation vs Constructors
let dog1 = {
	name: 'Falcor',
	colors: ['Black'],
		image: 4,
};

let dog2 = {
	name: 'Nola',
	colors: ['White','Black'],
	age: 6,
};

let dog3 = {
	name: 'Patsy',
	colors: ['Brown'],
	age: 7,
};

//constructor function for a dog
function Dog(name,colors,age) {
	this.name = name;
	this.colors = colors;
	this.age = age;
}
//create a new dog record using the function
let myPuppy = new Dog('Ernie',['Brown','Black'], 3);
//myPuppy is considered an instance of Dog type.

//PROPERTIES
//Literal notation
let testString = new String;
let testString2 = new String("Hello");

String.prototype.addExcitement = function() {return this + "!!!!!!"};
//any new string inherits this new method

testString2.addExcitement();

let newString = 'Jambo';

newString.addExcitement();

//Adding methods to the Dog.prototype for behaviours
Dog.prototype.speak = function() {
	console.log('Woof!');
};
Dog.prototype.humanYears = function () {
	return this.age * 7;
};
myPuppy.speak();




