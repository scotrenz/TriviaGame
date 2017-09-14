// Display the page with the start button
$(document).ready(function () {
	function loadDoc() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	     document.getElementById("#start").innerHTML = this.responseText;
	    }
	  };
	  xhttp.open("GET", "game.html", true);
	  xhttp.send();
	}
});



// Click the start button 

// Randomize the array

// Display the question and answers

// Set timer for 30 seconds

// If you guess the correct answer in 30 seconds, up the win count, display image, display array[1] question and answers

// If you guess the wrong answers, display that you lost, and image of the new correct answer

// The timer can run out, you lose, display the correct answer

// Reset the timer

// Go to the next question

// Repeat till last question

// Have a button to reset the game

//

// Shuffle the word list using the Fisher Yates Shuffle method
Array.prototype.shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
    return this;
}  


var qa = [{
        question: "What is the weather like today?",
        answers: ["ANSWER", "Sunny", "Raining", "Windy"]
    },
    {
        question: "Question2",
        answers: ["Answer 2.1", "Answer 2.2", "Answer 2.3", "Answer 2.4"]
    },
    {
        question: "Question3",
        answers: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"]
    },
    {
        question: "Question1",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"]
    }
];
console.log (qa[0].answers[1]);

for (i = 0; i < qa[0].answers.length; i++ ){
	$("#q1").append("<button class='test" + i + "'>" + qa[0].answers[i] + "</button>");
}

var newArr = qa[0].answers.shuffle();

$("#q1").on('click', function(){
	console.log(this);
});

console.log(qa[0].answers[0]);


console.log(newArr);

console.log(newArr[0]);


