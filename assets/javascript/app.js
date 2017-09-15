$(document).ready(function () {
	var counter = 0;
	var picked = false;
	var available = true;

	// Array with all the questions and answers
	var qa = [{
	        question: "What is the weather like today?",
	        answers: ["ANSWER", "Sunny", "Raining", "Windy"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "Question2",
	        answers: ["Answer 2.1", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "Question3",
	        answers: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "Question1",
	        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "Question1",
	        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    }
	];

	var cardColumn = [
		[200, 200, 200, 200, 200],
		[400, 400, 400, 400, 400],
		[600, 600, 600, 600, 600],
		[800, 800, 800, 800, 800],
		[1000, 1000, 1000, 1000, 1000]
	];

	// Create a table with all the placecards of the points 
	function placecardTable() {
		var pcTable = document.getElementById("placecards")
		var table = document.createElement("table")
		var tableBody = document.createElement("tbody")

		table.appendChild(tableBody);

		var category = ["Category A", "Category B", "Category C", "Category D", "Category E"];

		var tr = document.createElement("TR");
		tableBody.appendChild(tr);
		for (i = 0; i < category.length; i++) {
			var th = document.createElement("TH")
			th.appendChild(document.createTextNode(category[i]));
			tr.appendChild(th);
		}

		for (i = 0; i < cardColumn.length; i++) {
			var tr = document.createElement("TR");
			for (j = 0; j < cardColumn[i].length; j++) {
				var td = document.createElement("TD")
				td.appendChild(document.createTextNode(cardColumn[i][j]));
				tr.appendChild(td);
			}
			tableBody.appendChild(tr);
		}
		pcTable.appendChild(table);
	};


	}
	placecardTable();
	


	// Set all the cells in the table to be clickable
	$("td:first-child").on("click", function() {
		alert('Hi');
	})


	// Shuffle the word list using the Fisher Yates Shuffle method
// Array.prototype.shuffle = function(){
//     var i = this.length, j, temp;
//     while(--i > 0){
//         j = Math.floor(Math.random() * (i+1));
//         temp = this[j];
//         this[j] = this[i];
//         this[i] = temp;
//     }
//     return this;
// }  





// console.log (qa[0].answers[1]);

// for (i = 0; i < qa[0].answers.length; i++ ){
// 	$("#q1").append("<button class='test" + i + "'>" + qa[0].answers[i] + "</button>");
// }

// var newArr = qa[0].answers.shuffle();

// $("#q1").on('click', function(){
// 	console.log(this);
// });

// console.log(qa[0].answers[0]);


// console.log(newArr);

// console.log(newArr[0]);

});



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



