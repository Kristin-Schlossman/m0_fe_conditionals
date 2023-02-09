// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
    console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
    console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
    console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
    console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
    console.log("is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
    console.log("is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
    console.log("is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
    console.log("is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//this line is comparing intergers. It's asking, "is 4 less than 9?" and will return a T/F value. 
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This code is first defining books as a number, and then comparing that value (3) to 4. It will return a value of false, because 4 is not less than 3. 
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//This code set up is defining two variables as numbers and then comparing them. In this case, is 6 larger than 2? Yes, so the answer should be true. 
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
// This code is using the number data type, as have the others. This one is asking is the number of attendees exactly equal to the number of meals? In this case, there are more attendees
// than there are meals. Therefore this should return a value of false, and sounds like an important problem for the caterer. Someone should get on that. 

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
    console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
    console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
    console.log(lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
    console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
    console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
 if(lovesToPlay && age<2) {
    console.log("This puppy loves to play");
 } else if (lovesToPlay && age>2) {
    console.log("This dog loves to play.")
 }

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: I struggled with this one a bit, in terms of how to apply what we'd learned about operators and conditionals. 
// I still feel like my answer is maybe too simple. Should I add an aditional variable that rendors true if the age is less than 2, for instance? 
// If so, what variable? What would that look like, and how it would it involve puppy? But I decided on the simple, straightforward answer that
// ticks all the boxes. 