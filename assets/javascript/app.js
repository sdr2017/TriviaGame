//I need an array of questions with answers
//I need to randomly select 5 questions from that array and display them in the HTML
//I need to specify the correct answer in the HTML value? (give it a value of true?)

//I need set a countdown timer

//I need user to select only one answer per question

//If time runs out OR user hits "done"
	//I need to pull the information from HTML:
		//how many correct
		//how many false
		//how many unanswered
//I need to print that information on a new HTML page
//After XX seconds, I need to go back to the gamepage and reset the game
$(document).ready(function() {
	var trivia = [{
			//trivia[0]
			question: "What do you call a group of Owls?",
			answer: "a parliament",
			options: ["a congress", "a ministry", "a group"];
	},{		//trivia[1]
			question: "What do you call a group of Penguins?",
			answer: "All of the Above",
			option1: "a colony",
			option2: "a muster",
			option3: "a parcel",
	},{		//trivia[2]
			question: "What do you call a group of Sparrows?",
			answer: "a host",
			option1: "a cluster",
			option2: "an army",
			option3: "a legion",
	}]

	var triviaRandom = trivia[Math.floor(Math.random() * trivia.length)];
	console.log(triviaRandom);

	$("#question1").html(trivia[0].question);



})

