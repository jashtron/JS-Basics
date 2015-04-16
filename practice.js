//Once you complete a problem, open up Chrome and check the answer in the console.


//Create a function called isTyler that accepts name as it's only argument.


var name = 'Tyler';


//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.


function isTyler (name) {
	if (name === "Tyler") {
		return true;
  }else { return false;
  }
}
alert(isTyler("Tyler"));





//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 

var name = prompt("What is your name?");
var getName = function() {
return name;
}
console.log(name);





//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

 
var welcome = function() {
alert("Welcome " + getName(name) + "!");
}
welcome(getName);





//What is the difference between arguments and parameters?

 The parameters are the aliases for the values that will be passed to the function. The arguments are the actual values.





//What are all the falsy values in JavaScript and how do you check if something is falsy?

Truthy: Something which evaluates to TRUE.
Falsey: Something which evaluates to FALSE.
One (1) is truthy, Zero (0) is falsey.
undefined, null, NaN, 0, "" (empty string), and false are falsey.




//Create a function called myName that returns your name

 var name = "Josh"; 
 var myName = function() {
 	return name;
}

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName(name);

//Now alert the result of invoking newMyName

alert(newMyName);




//Create a function called outerFn which returns an anonymous function which returns your name.

var name = "Fred Meyer";
var outerFn = function() {
	return name;
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn =  outerFn(name);


//Now invoke innerFn.

alert(innerFn);



