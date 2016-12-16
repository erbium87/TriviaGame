$(document).ready(function() {

var trivia = [
	 {
	  	question: "The average person does what 13 times a day?",
	  	answerChoice: ["Laughs", "Farts", "Sneezes", "Yawns"], //answer laughs 
	  	answer: "Laughs" 	  
	},
	{
	  	question: "In Texas it's illegal to swear in front of a what?",
	  	answerChoice: ["Dog", "Child", "Police Officer", "Corpse"], //answer corpse
	  	answer: "Corpse"
	  
	},   
	{
	  	question: "What color is Absynth?",
	  	answerChoice: ["Red", "Green", "Black", "Blue"], //answer Green 
	  	answer: "Green"
	  },
//Question 4
	  {
	  	question: "The beaver is the national emblem of which country?",
	  	answerChoice: ["Africa", "Australia", "Canada", "Russia"], //answer Canada 
	  	answer: "Canada" 
	  },
//Question 5
	  {
	  	question: "What is the chemical symbol for iron?",
	  	answerChoice: ["Fe", "Ir", "Bl", "Ag"], //answer Fe 
	  	answer: "Fe" 
	  },
//Question 6
	  {
	  	question: "What is a group of unicorns known as?",
	  	answerChoice: ["A Murder", "A Blessing", "A knot", "An Army"], //answer A Blessing 
	  	answer: "A Blessing" 
	  },
//Question 7
	  {
	  	question: "What animal is known to kill more people than plane crashes?",
	  	answerChoice: ["Donkey", "Giraffe", "Monkey", "Frog"], //answer Donkey 
	  	answer: "Donkey" 
	  }
	  	// console.log(option.answerChoice[0]);
] //end of all questions
// console.log(trivia[0].answerChoice[3]);
var timeAllowance = 10,
	timer,
	currentAnswer,
	questionCounter = 0,
	correctGuesses = 0,
	incorrectGuesses = 0,
	unanswered = 0,
	pauser,
	pauseAllowance = 3;



function start() {
	timer = setInterval(timesUp, 1000);
}
function timesUp() {
	timeAllowance--;
	$(".timer").html("<p>Time Left: " + timeAllowance + "</p>");
	if (timeAllowance === 0) {
		noGuess();
		stop();
	}
}
function stop() {
	clearInterval(timer);
	timeAllowance = 10;
}

function getQuestion (){
	var currentQuestion = trivia[questionCounter];
	$(".question").html(currentQuestion.question);
	$("#buttonChoice").empty();
	for (var i = 0; i < currentQuestion.answerChoice.length; i ++){
		currentAnswer = currentQuestion.answerChoice[i];
		console.log(currentAnswer);
		$("#buttonChoice").append("<button class='btn btn-sm clicker' value='" + currentAnswer + "'>" + currentAnswer + "</button>");
	}
	// stop();
	start();
	noGuess();

}

function nextQuestion () {
	questionCounter ++;
	if (questionCounter > (trivia.length - 1)) {
		endOfGame();
	}
	else {
	getQuestion();
	}
}

function endOfGame () {

	$(".ending").append("<p>Correct Answers: " + correctGuesses + "</p>");
	$(".ending").append("<p>Incorrect Answers: " + incorrectGuesses + "</p>");
	$(".ending").append("<p>Unanswered Answers: " + unanswered + "</p>");
}

		
getQuestion();

$(document).on("click", "#buttonChoice button", function() {
	var userGuess = $(this).attr("value");
		console.log(userGuess);
		if (userGuess === trivia[questionCounter].answer && timeAllowance > 0) {
			pause();
			$(".currentAnswer").html("<p> You're Right: " + trivia[questionCounter].answer + "</p");
			// alert("correct");
			console.log(userGuess);
			stop();
			correctGuesses ++;
			// nextQuestion();
		}
		else if (userGuess != trivia[questionCounter].answer && timeAllowance > 0){
			pause();
			$(".currentAnswer").html("<p>Sorry. The Answer Is: " + trivia[questionCounter].answer + "</p");
			stop();
			// alert("you wrong");
			incorrectGuesses ++;
			// nextQuestion();
		}

}); 
function noGuess() {
		if (timeAllowance === 0){
			// alert("times up");
			$(".currentAnswer").html("<p>Out of Time. The Answer Is: " + trivia[questionCounter].answer + "</p");
			pause();
			stop();
			unanswered ++;
			// nextQuestion();
		}
}
function pause () {
	pauser = setInterval(pauseUp, 1000);
}
	
function pauseUp() {
	pauseAllowance --;
	if (pauseAllowance === 0) {
	pauseClear();
	nextQuestion();
	}
}

function pauseClear() {
	clearInterval(pauser);
	pauseAllowance = 3;
}



});
	// $(".question").html(trivia[0].option.question);	
	// $("#button1").html(trivia[0].option.answerChoice[0]);
	// $("#button2").html(trivia[0].option.answerChoice[1]);
	// $("#button3").html(trivia[0].option.answerChoice[2]);
	// $("#button4").html(trivia[0].option.answerChoice[3]);
	
	// $("#button1, #button2, #button3, #button4").click(function (){
	// 	if (".clicker" === trivia[0].option.answer) {
	// 		alert("you wrong");
	// 	}
	// });
	// for (var i=0; i < trivia.length; i++){
// 	var currentQuestion = trivia[i];
// 	$(".question").html(trivia[i].question);

// 	for (var j=0; j < currentQuestion.answerChoice.length; j++) {
// 		var currentAnswer = currentQuestion.answerChoice[j];
// 		$("#buttonChoice").append("<button class='btn btn-sm clicker' value='" + j + "'>" + trivia[i].answerChoice[j] + "</button>");
		

// 	}
