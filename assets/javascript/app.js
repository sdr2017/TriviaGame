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
	hide();

	var triviaToPrint = []; //pushing questions here equal to the number of questions in HTML
	var value = [];
	var unanswered = 0;
	var correct = 0;
	var wrong = 0;

	//countdown info
	var number = 30;
    var countdown;
    var displayQuestions = ["#1a", "#2a", "#3a", "#4a", "#5a"];
    var resultTime = 5;
    var resultCountdown;

	var trivia = [{
			//trivia[0]
			question: "What do you call a group of Owls?",
			answer: "a parliament",
			options: ["a congress", "a ministry", "a group", "a parliament"],
			asked: false,
	},{		//trivia[1]
			question: "What do you call a group of Penguins?",
			answer: "All of the Above",
			options: ["a colony", "a muster", "a parcel", "All of the Above"],
			asked: false,
	},{		//trivia[2]
			question: "What do you call a group of Sparrows?",
			answer: "a host",
			options: ["a cluster", "an army", "a legion", "a host"],
			asked: false,
	},{		//trivia[3]
			question: "What do you call a group of Flamingos?",
			answer: "a stand",
			options: ["a garden", "crowd", "school", "a stand"],
			asked: false,
	},{		//trivia[4]
			question: "What do you call a group of Grasshoppers?",
			answer: "a cloud",
			options: ["a ninja", "a swarm", "a cricket", "a cloud"],
			asked: false,
	},{		//trivia[5]
			question: "About how many species are of snakes are there?",
			answer: "3000",
			options: ["100", "300", "1000", "3000"],
			asked: false,
	},{		//trivia[6]
			question: "What is considered to be the smartest breed of dog?",
			answer: "Border Collie",
			options: ["Labrador Retreiver", "Clifford", "Pit Bull", "Border Collie"],
			asked: false,
	},{		//trivia[7]
			question: "What method do bats use for navigation?",
			answer: "Echolocation",
			options: ["GPS", "Wingardium Leviosa", "Maps", "Echolocation"],
			asked: false,
	},{		//trivia[8]
			question: "Which mammal lays eggs?",
			answer: "Platypus",
			options: ["Kangaroo", "Dolphin", "Chicken", "Platypus"],
			asked: false,
	},{		//trivia[9]
			question: "In what year did the passenger pigeon go extinct?",
			answer: "1914",
			options: ["1080", "1492", "2012", "1914"],
			asked: false,
	},{		//trivia[10]
			question: "What two species breed to create a mule?",
			answer: "Donkey and Horse",
			options: ["Zebra and Horse", "Mule and Mule", "Cow and Horse", "Donkey and Horse"],
			asked: false,
	},{		//trivia[11]
			question: "What animal was considered sacred in Ancient Egypt?",
			answer: "Cat",
			options: ["Mouse", "Turtle", "Lady bug", "Cat"],
			asked: false,
	},{		//trivia[12]
			question: "In what region do Narwhals live?",
			answer: "Arctic",
			options: ["South Pacific", "South Atlantic", "Saharan", "Arctic",],
			asked: false,
	},{		//trivia[13]
			question: "What type of bird did Darwin observe, resulting in his Theory of Evolution?",
			answer: "Finches",
			options: ["Eagles", "Falcons", "Ravens", "Finches"],
			asked: false,
	},{		//trivia[14]
			question: "Which sea animal has three hearts?",
			answer: "Cuttlefish",
			options: ["Starfish", "Sharks", "Dolphin", "Cuttlefish"],
			asked: false,
	}];

	function hide() { //for hiding the questions before clicking "start"
		$("#hideThis").hide();
	}

	function show() { //for showing the questions after clicking "start"
		$("#hideThis").show();
	}
	function buttonHide() { //for hiding the start button after it's clicked
		$("#hideButton").hide();
	}

	function hideResults() {
		$(".results").hide();
	}
	hideResults();

	function showResults() {
		$(".results").show();
	}


	

	function start() {
    	coutdown = setInterval(minus, 1000);
    	}
	function minus() {
    	number--;
    	$("#viewNumber").html("<h2>" + number + "</h2>");
    	if (number === 0) {
        stop();
        tally(); //tally the results from the HTML
     	hide(); //hide the questions in the HTML
     	showResults(); //show the results page
     	nope(); //clear interval of resultCountdown
     	resultTime = 5; //resetting a new result time to countdown
     	resultStart(); //start subtracting time
      	}
    	};

	function stop() {
    	clearInterval(coutdown);
    	};
	
	//start button:
    $("#start").on("click", function() {
    	resetGame();
    	show(); //showing questions on click
    	start(); //starting countdown
    	buttonHide(); //disappearing on click
    	});

    function resultStart() {
     	resultCountdown = setInterval(subtract, 1000);
     	}
    function subtract() {
     	resultTime--;
     	if (resultTime === 0) {
     		resetGame(); //reset the game questions
     		hideResults(); //hide the results page
     		show(); //show the questions in the HTML
     		stop(); //stop the timer for the questions page
     		number = 30; //reset the timer to 30 seconds
     		start(); //start the timer
     	}
     	};
    function nope() {
     	clearInterval(resultCountdown);
     	};

    $("#done").on("click", function results(){
     	stop(); //clear the countdown interval
     	tally(); //tally the results from the HTML
     	hide(); //hide the questions in the HTML
     	showResults(); //show the results page
     	nope(); //clear interval of resultCountdown
     	resultTime = 8; //resetting a new result time to countdown
     	resultStart(); //start subtracting time
     	});

function resetGame() {
	triviaToPrint = []; //pushing questions here equal to the number of questions in HTML
	value = [];
	unanswered = 0;
	correct = 0;
	wrong = 0;
	
	var totalQuestions = $('.question').length; //number of questions in the HTML
	
	for (var i = 0; i < totalQuestions; i++) {
		var triviaRandom = trivia[Math.floor(Math.random() * trivia.length)];//randomly selecting questions(amount determined in HTML)
		triviaToPrint.push(triviaRandom);//pushing randomly selected questions to array
		}

	//printing random questions to HTML
	for (var i = 0; i <displayQuestions.length; i++) {
	 	$(displayQuestions[i]).html(triviaToPrint[i].question);
		}
		//function for shuffling options
		function shuffle(options) {
			var index = options.length;
			var	temporaryValue;
			var	randomIndex;
			while (0 !== index) {
				randomIndex = Math.floor(Math.random() * index);
				index -= 1;

				temporaryValue = options[index];
				options[index] = options[randomIndex];
				options[randomIndex] = temporaryValue;
			}
			return options;
		}
		//calling the shuffle function
		for (var i = 0; i < displayQuestions.length; i++) {
			triviaToPrint[i].options = shuffle(triviaToPrint[i].options);
		}

	for (var i = 0; i < displayQuestions.length; i++) {
		$('.question' + [i]).html(
			(	('<label><input type="radio" value="' + triviaToPrint[i].options[0] +  '"name="question' + [i] + '"></label>' + triviaToPrint[i].options[0] + '<br>') + 
				('<label><input type="radio" value="' + triviaToPrint[i].options[1] +  '"name="question' + [i] + '"></label>' + triviaToPrint[i].options[1] + '<br>') + 
				('<label><input type="radio" value="' + triviaToPrint[i].options[2] +  '"name="question' + [i] + '"></label>' + triviaToPrint[i].options[2] + '<br>') + 
				('<label><input type="radio" value="' + triviaToPrint[i].options[3] +  '"name="question' + [i] + '"></label>' + triviaToPrint[i].options[3]+ '<br>')));
	}
	}

	function tally() {
		for (var i = 0; i < displayQuestions.length; i++) {
			value.push($('input[type="radio"][name="question' + [i] + '"]:checked').val()); 
			console.log(value);

			if (value[i] == undefined) {
				unanswered ++;
				console.log(unanswered);
			}
			
			else if  (value[i] == triviaToPrint[i].answer) {
				correct ++;
				console.log(correct);
			}

			else if (value[i] !== triviaToPrint[i].answer) {
				wrong ++;
				console.log(wrong);
			}
			}
		$('#correct').html('Correct: ' + correct);
		$('#wrong').html('Incorrect: ' + wrong);
		$('#unanswered').html('Unanswered: ' + unanswered);

			if (correct == displayQuestions.length) {
				$(".resultImageContainer").html('<img class="resultImage" src="assets/images/five.jpg" alt="Platypus: Well done ole chap!">')
			}
			else if (correct == 0) {
				$(".resultImageContainer").html('<img class="resultImage" src="assets/images/zero.jpg" alt="Fish: Poor Sport!">')
			}

			else {
				$(".resultImageContainer").html('<img class="resultImage" src="assets/images/four.jpg" alt="Lizard: A Gentleman and a Scholar!">')
			}
		}
})


	

