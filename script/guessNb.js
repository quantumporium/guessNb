#!/usr/bin/node
/*
 * name = guess the number (guessNb)
 * author = quantumporium
 * email  = quantum[at]porium.ca / this email doesn't exist yet??
 * goal	  = terminal based guess the number game made with javascrypt and nodeJs
 *
 */

/*
 * functionality and usage
 * [ example usage ]
 * guess the mistery number ___ .
 *  Your guess 21
 * your guess is to high, try again .
 *  your guess 10
 * your guess it to low, try again .
 *  your guess a
 * your guess is not valid .
 *  your guess 15
 * correct the mistery number was 15 .
 * [ /example usage ]
 *
 * [ function and functionality ]
 * createRdnumber() -> int randomNb (pure function)
 * validateInput() -> string as return / some things
 * main() -> user interaction is made here (non pure function)
 * [ /function and functionality ]
 *
 */

const prompt = require("prompt-sync")();	// install prompt-sync library


function createRdNumber(Max) {
	return Math.random() * Max
}

function parseInput(userInput, rdNumber) {
	if( userInput == rdNumber ){
		console.log(" correct the mistery number was "+rdNumber+".");
		process.exit()	// exit when right answer	
	}
	else if( userInput < rdNumber){
		console.log(" you guess it to low. ");
		
	}
	else if( userInput > rdNumber){
		console.log(" your guess is to high. ");
		
	}
	else{
		console.log(" [ ERROR ] a fatal error happen ");
		process.exit()	
	}
}

function main() {
	let Max = 100	// You can change this value
	console.log("***** Welcome to guessNb *****");
	console.log(` [ RULE ] You have to guess a number between 0 and ${Max}`);
	const rdNumber = Math.round( createRdNumber(Max) );
	
	for(let i = 10; i >= 0; i-= 1){
		let userInput = prompt(" Enter your guess: ");
		parseInput(userInput, rdNumber);

		console.log(` You have ${i} guess left.`);
	}
	
	console.log(" Your guess ran out ...");
	console.log(" The correct answer was "+rdNumber);
	process.exit();
}

main()
