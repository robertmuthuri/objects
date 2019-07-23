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
dog.maximumAge = 5;
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


