//I need an array of questions with answers
//I need to randomly select 5 questions from that array and display them in the HTML
//I need to specify the correct answer in the HTML value? (give it a value of true?)

//I need set a countdown timer
	//timer starts at 30, decreases by 1 every second

//I need user to select only one answer per question

//If time runs out OR user hits "done"
	//I need to pull the information from HTML:
		//how many correct
		//how many false
		//how many unanswered
//I need to print that information on a new HTML page
//After XX seconds, I need to go back to the gamepage and reset the game
$(document).ready(function() {

	function hide() { //for hiding the questions before clicking "start"
		$("#hideThis").hide();
	}
	hide()

	function show() { //for showing the questions after clicking "start"
		$("#hideThis").show();
	}
	function buttonHide() { //for hiding the start button after it's clicked
		$("#hideButton").hide();
	}

	var trivia = [{
			//trivia[0]
			question: "What do you call a group of Owls?",
			answer: "a parliament",
			options: ["a congress", "a ministry", "a group"],
			asked: false,
	},{		//trivia[1]
			question: "What do you call a group of Penguins?",
			answer: "All of the Above",
			options: ["a colony", "a muster", "a parcel"],
			asked: false,
	},{		//trivia[2]
			question: "What do you call a group of Sparrows?",
			answer: "a host",
			options: ["a cluster", "an army", "a legion"],
			asked: false,
	},{		//trivia[3]
			question: "What do you call a group of Flamingos?",
			answer: "a stand",
			options: ["a garden", "crowd", "school"],
			asked: false,
	},{		//trivia[4]
			question: "What do you call a group of Grasshoppers?",
			answer: "a cloud",
			options: ["a ninja", "a swarm", "a cricket"],
			asked: false,
	},{		//trivia[5]
			question: "About how many species are of snakes are there?",
			answer: "3000",
			options: ["100", "300", "1000"],
			asked: false,
	},{		//trivia[6]
			question: "What is considered to be the smartest breed of dog?",
			answer: "Border Collie",
			options: ["Labrador Retreiver", "Clifford", "Pit Bull"],
			asked: false,
	},{		//trivia[7]
			question: "What method do bats use for navigation?",
			answer: "Echolocation",
			options: ["GPS", "Wingardium Leviosa", "Maps"],
			asked: false,
	},{		//trivia[8]
			question: "Which mammal lays eggs?",
			answer: "Platypus",
			options: ["Kangaroo", "Dolphin", "Chicken"],
			asked: false,
	},{		//trivia[9]
			question: "In what year did the passenger pigeon go extinct?",
			answer: "1914",
			options: ["1080", "1492", "2012"],
			asked: false,
	},{		//trivia[10]
			question: "What two species breed to create a mule?",
			answer: "Donkey and Horse",
			options: ["Zebra and Horse", "Mule and Mule", "Cow and Horse"],
			asked: false,
	},{		//trivia[11]
			question: "What animal was considered sacred in Ancient Egypt?",
			answer: "Cat",
			options: ["Mouse", "Turtle", "Lady bug"],
			asked: false,
	},{		//trivia[12]
			question: "In what region do Narwhals live?",
			answer: "Arctic",
			options: ["South Pacific", "South Atlantic", "Saharan"],
			asked: false,
	},{		//trivia[13]
			question: "What type of bird did Darwin observe, resulting in his Theory of Evolution?",
			answer: "Finches",
			options: ["Eagles", "Falcons", "Ravens"],
			asked: false,
	},{		//trivia[14]
			question: "Which sea animal has three hearts?",
			answer: "Cuttlefish",
			options: ["Starfish", "Sharks", "Dolphin"],
			asked: false,
	}];


	//countdown info
	var number = 30;
    var countdown;
	function start() {
    	coutdown = setInterval(minus, 1000);
    	}
	function minus() {
    	number--;
    	$("#viewNumber").html("<h2>" + number + "</h2>");
    	if (number === 0) {
        stop();
      	}
    	}
	function stop() {
    	clearInterval(coutdown);
    	}
	//start button:
    $("#start").on("click", function() {
    	reset();
    	show(); //showing questions on click
    	start(); //starting countdown
    	buttonHide(); //disappearing on click
    	});

    
    var resultTime = 10;
     var resultCountdown;
     function resultStart() {
     	resultCountdown = setInterval(subtract, 1000);
     	}
     function subtract() {
     	resultTime--;
     	if (resultTime === 0) {
     		reset();
     		show();
     		stop();
     		start();
     	}
     	}
     function nope() {
     	clearInterval(resultCountdown);
     	}
     $("#done").on("click", function(){
     	stop();
     	hide();
     	alert("show game results here");
     	resultStart();
     	});

function reset() {
	var totalQuestions = $('.question').length; //number of questions in the HTML
	var triviaToPrint = []; //pushing questions here equal to the number of questions in HTML
	//var displayQuestions = ["#1", "#2", "#3", "#4", "#5"];
	
	var displayQuestions = ["#1", "#2", "#3", "#4", "#5"];
	// var	displayOptions = [{
	// 	one: [".question1a", ".question1b", ".question1c", ".question1d"],
	// 	two: [".question2a", ".question2b", ".question2c", ".question2d"],
	// 	three: [".question3a", ".question3b", ".question3c", ".question3d"],
	// 	four: [".question4a", ".question4b", ".question4c", ".question4d"],
	// 	five: [".question5a", ".question5b", ".question5c", ".question5d"],
	// }]

	// function options() {
// 	var totalOptions0 = [triviaToPrint[0].options + "," + triviaToPrint[0].answer];
// 	var splitOptions0 = totalOptions0.split(",");
// 	var totalOptions1 = [(triviaToPrint[1].options + triviaToPrint[1].answer)];
// 	var totalOptions2 = [(triviaToPrint[2].options + triviaToPrint[2].answer)];
// 	var totalOptions3 = [(triviaToPrint[3].options + triviaToPrint[3].answer)];
// 	var totalOptions4 = [(triviaToPrint[4].options + triviaToPrint[4].answer)];
// 	console.log(splitOptions0);
// }
// options();
	
	for (var i = 0; i < totalQuestions; i++) {
		var triviaRandom = trivia[Math.floor(Math.random() * trivia.length)];//randomly selecting questions(amount determined in HTML)
		triviaToPrint.push(triviaRandom);//pushing randomly selected questions to array
	 }

	//printing random questions to HTML
	for (var i = 0; i <displayQuestions.length; i++) {
	 	$(displayQuestions[i]).html(triviaToPrint[i].question);
		}

		$(".question1a").html('<label><input type="radio" name="question1"></label>' + triviaToPrint[0].options[0]);
		$(".question1b").html('<label><input type="radio" name="question1"></label>' + triviaToPrint[0].options[1]);
		$(".question1c").html('<label><input type="radio" name="question1"></label>' + triviaToPrint[0].answer);
		$(".question1d").html('<label><input type="radio" name="question1"></label>' + triviaToPrint[0].options[2]);

		$(".question2a").html('<label><input type="radio" name="question2"></label>' + triviaToPrint[1].answer);
		$(".question2b").html('<label><input type="radio" name="question2"></label>' + triviaToPrint[1].options[1]);
		$(".question2c").html('<label><input type="radio" name="question2"></label>' + triviaToPrint[1].options[0]);
		$(".question2d").html('<label><input type="radio" name="question2"></label>' + triviaToPrint[1].options[2]);

		$(".question3a").html('<label><input type="radio" name="question3"></label>' + triviaToPrint[2].options[1]);
		$(".question3b").html('<label><input type="radio" name="question3"></label>' + triviaToPrint[2].answer);
		$(".question3c").html('<label><input type="radio" name="question3"></label>' + triviaToPrint[2].options[0]);
		$(".question3d").html('<label><input type="radio" name="question3"></label>' + triviaToPrint[2].options[2]);

		$(".question4a").html('<label><input type="radio" name="question4"></label>' + triviaToPrint[3].options[2]);
		$(".question4b").html('<label><input type="radio" name="question4"></label>' + triviaToPrint[3].options[0]);
		$(".question4c").html('<label><input type="radio" name="question4"></label>' + triviaToPrint[3].options[1]);
		$(".question4d").html('<label><input type="radio" name="question4"></label>' + triviaToPrint[3].answer);

		$(".question5a").html('<label><input type="radio" name="question5"></label>' + triviaToPrint[4].options[2]);
		$(".question5b").html('<label><input type="radio" name="question5"></label>' + triviaToPrint[4].answer);
		$(".question5c").html('<label><input type="radio" name="question5"></label>' + triviaToPrint[4].options[1]);
		$(".question5d").html('<label><input type="radio" name="question5"></label>' + triviaToPrint[4].options[0]);

//if ("red").checked = true;
//}
}






	



})

