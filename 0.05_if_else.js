var elevatorUp = false;
var elevatorBroken = true;
var elevatorDown = true;
var elevatorStop = true;

if(elevatorUp === true){

	console.log("Going Up");

}else {
	console.log("The elevator is either broken or going down");
}

//Write one for elevator broken
//Write one for elevator stopped
//Write one for elevator going down

if (elevatorBroken === true) {
	console.log("Put out of order sign on elevator door");
}else{
	console.log("Put Welcome sign on elevator door");
}

//Develop cases where you could us && or ||

if (elevatorDown || elevatorUp) {
	console.log("Please keep your legs and arms inside the elevator");

}else{
	console.log("You've reached your destination");
}



