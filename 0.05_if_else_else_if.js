var bankAccount = 5000;
var appleWatch = 400;
var appleWatchGold = 10000;

if(bankAccount > appleWatch) {
	console.log ("make it rain boy");

}else if (bankAccount < appleWatchGold) {
	console.log("Start selling plasma to get this!");
}else {
	console.log("Get a job you hippie");
}

//create a personAge then use if / else if / else to check if that person is eligible to vote

// var personAge = 17;
//  var registeeredVote = false;

// if ((personAge >= votingAge) && (registeeredVote===true)){
// 	console.log("you are eligible to vote");

// }else if ((personAge >= votingAge) && (registeredVote === false)){

// console.log("go get registered and make a difference.");
// } else{
// 	console.log("not old enough to vote");

// }

// Classic interview logic question


//missing code

var numberOne = 7;

if ((numberOne % 2 === 0) && (numberOne % 3 === 0)) {
	console.log("Number is divisable by 2 and 3");
} else if ((numberOne % 2 == 0)){
	console.log("Number is divisable by 2");
} else if ((numberOne % 3 == 0)) {
	console.log("Number is divisable by 3");
} else {
	console.log("Number is not divisable by 2 or 3")
}
