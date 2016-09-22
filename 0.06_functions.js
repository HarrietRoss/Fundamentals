function helloWorld () {
	console.log("Hello World");
}

//Call
helloWorld ();


/****************************************************************/

function printMyName(){
	console.log("Paul");
}

//Call
printMyName();


/****************************************************************/

//Scope
function addNumbers() {
	var x = 10;
	var y = 10;
	console.log(x + y);
}

addNumbers();
/****************************************************************/


function multiplyNumbers() {
	var x = 5;
	var y = 2;
	console.log(x * y);
}

multiplyNumbers();
multiplyNumbers();
/****************************************************************/

///Parameters & Arguments
function printNumber(x){
	console.log("The number you entered was:" + x);

}

printNumber(6);
printNumber(12);
printNumber(1000000);
/****************************************************************/

//make function bank pin

function pinNumber(x){
	console.log(x + " is the correct number.");
}

pinNumber(99);

/****************************************************************/

//function
function bankPin(x){
	var cardPin = 45678;
	//challenge - use conditional statements to check whether the pin # is correct or not.
	console.log(x + " is the correct number.");
}

//Argument
bankPin(1234);


// //bankpin
// 	function enterpin(xyz) {
// 		var pin = 503;

// 		if (pin != xyz) {
// 			console.log("Pin not accepted");
// 		} else {
// 			console.log("Correct!");
// 		}
// 	}


/*BRONZE: 
	Write a function with two strings as arguments.
	The function should concatentate the string.*/
/*-----------------------------------------------------------
SILVER:
	Write a function that will help me easily 
	calculate monthly bills.*/


/*-----------------------------------------------------------
GOLD:
Write a function that helps me calculate the cost of my buying 100 sodas
 at $.99 each(or whatever and however many I feel like buying)
Figure in the tax there, too. The tax is 7 percent in Indiana.
Return a message that says something like this:
"100 Cokes will cost you $105.93."
*/

// function createPassword (streetNumber, streetName){
// 	var streetNumber = "11753";
// 	var streetName = "VisionaryWay";

// 	console.log(streetNumber + streetName);

// 	createPassword(11753 + VisionaryWay);

function createPassword(streetNumber, streetName) {
	return streetNumber + streetName;
}

console.log(createPassword("11753", "VisionaryWay"));
	

function monthlyBills(phones, food, gasoline, electricity) {
	return phones + food + gasoline + electricity;
}

	console.log(monthlyBills(100, 400, 240, 200));

//***********************************************************
function calculateShopping(costIndividualSoda, numberSoda, tax) {
	
	var totalCost = (costIndividualSoda * numberSoda) * tax

	return "You ordered" + numberSoda + "sodas at " + costIndividualSoda + "for a total cost of" + totalCost;
}	

console.log(calculateShopping(5, 10, 1.07));
// *******************************************************************
//their bronze

function combineWords(wordOne, wordTwo){
	return wordOne + wordTwo;

}
console.log(combineWords("Diet","Coke"));

//Their Silver

function bills(rent, water,electric,trash,wireless) {
	var totalBills = rent + water + electric +trash + wireless;
	return totalBills;

}

//how to do if multiple people bills?

// var paulBills = bills(400,30,30,10,30);
// var jamesBills = bills
console.log("Bills:", bills(600,30,30,10,30));

//question about :
//console.log("Bills:", bills(600,30,30,10,30)); Allows Bills: to show up in bottom answer line.

//Their Gold

