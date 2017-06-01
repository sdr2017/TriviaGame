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
			options: ["a congress", "a ministry", "a group"],
			asked: 0,
	},{		//trivia[1]
			question: "What do you call a group of Penguins?",
			answer: "All of the Above",
			options: ["a colony", "a muster", "a parcel"],
			asked: 0,
	},{		//trivia[2]
			question: "What do you call a group of Sparrows?",
			answer: "a host",
			options: ["a cluster", "an army", "a legion"],
			asked: 0,
	},{		//trivia[3]
			question: "What do you call a group of Flamingos?",
			answer: "a stand",
			options: ["a garden", "crowd", "school"],
			asked: 0,
	},{		//trivia[4]
			question: "What do you call a group of Grasshoppers?",
			answer: "a cloud",
			options: ["a ninja", "a swarm", "a cricket"],
			asked: 0,
	},{		//trivia[5]
			question: "About how many species are of snakes are there?",
			answer: "3000",
			options: ["100", "300", "1000"],
			asked: 0,
	},{		//trivia[6]
			question: "What is considered to be the smartest breed of dog?",
			answer: "Border Collie",
			options: ["Labrador Retreiver", "Clifford", "Pit Bull"],
			asked: 0,
	},{		//trivia[7]
			question: "What method do bats use for navigation?",
			answer: "Echolocation",
			options: ["GPS", "Wingardium Leviosa", "Maps"],
			asked: 0,
	},{		//trivia[8]
			question: "Which mammal lays eggs?",
			answer: "Platypus",
			options: ["Kangaroo", "Dolphin", "Chicken"],
			asked: 0,
	},{		//trivia[9]
			question: "In what year did the passenger pigeon go extinct?",
			answer: "1914",
			options: ["1080", "1492", "2012"],
			asked: 0,
	},{		//trivia[10]
			question: "What two species breed to create a mule?",
			answer: "Donkey and Horse",
			options: ["Zebra and Horse", "Mule and Mule", "Cow and Horse"],
			asked: 0,
	},{		//trivia[11]
			question: "What animal was considered sacred in Ancient Egypt?",
			answer: "Cat",
			options: ["Mouse", "Turtle", "Lady bug"],
			asked: 0,
	},{		//trivia[12]
			question: "In what region do Narwhals live?",
			answer: "Arctic",
			options: ["South Pacific", "South Atlantic", "Saharan"],
			asked: 0,
	},{		//trivia[13]
			question: "What type of bird did Darwin observe, resulting in his Theory of Evolution?",
			answer: "Finches",
			options: ["Eagles", "Falcons", "Ravens"],
			asked: 0,
	},{		//trivia[14]
			question: "Which sea animal has three hearts?",
			answer: "Cuttlefish",
			options: ["Starfish", "Sharks", "Dolphin"],
			asked: 0,
	}];

	var totalQuestions = $('.question').length; //number of questions in the HTML
	var triviaToPrint = []; //pushing questions here equal to the number of questions in HTML
	for (var i = 0; i < totalQuestions; i++) {
		var triviaRandom = trivia[Math.floor(Math.random() * trivia.length)];
		triviaToPrint.push(triviaRandom);
	 }
	 		console.log(triviaToPrint);
	 	$("#1").html(triviaToPrint[0].question);
		$("#2").html(triviaToPrint[1].question);
		$("#3").html(triviaToPrint[2].question);
		$("#4").html(triviaToPrint[3].question);
		$("#5").html(triviaToPrint[4].question);





	



})

