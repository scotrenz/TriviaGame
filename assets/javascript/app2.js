$(document).ready(function () {
	var counter = 0;
	var picked = false;
	var available = true;

	// Array with all the questions and answers
	var qa200 = [{
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

	var qa400 = [{
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

	var qa600 = [{
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

	var qa800 = [{
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

	var qa1000 = [{
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

	function addArray() {
		var question = "";
		for (i = 0; i < cardColumn.length; i++) {
			$('<div class="col" />').text(cardColumn[i]).appendTo('row');
		}

	}

addArray();
	// Create a table with all the placecards of the points 
	// function placecardTable() {
	// 	// Set variable pcTable to the HTML table id placecards
	// 	var pcTable = document.getElementById("placecards")
	// 	// Create table element
	// 	var table = document.createElement("table")
	// 	// Create tbody element
	// 	var tableBody = document.createElement("tbody")

	// 	// Add table body to the table
	// 	table.appendChild(tableBody);

	// 	// Create array for question categories
	// 	var category = ["Category A", "Category B", "Category C", "Category D", "Category E"];

	// 	// Create element for table row and set it equal to variable tr
	// 	var tr = document.createElement("TR");

	// 	// Add table rows to table body
	// 	tableBody.appendChild(tr);

	// 	// Add the question categories to the table heading
	// 	for (i = 0; i < category.length; i++) {
	// 		var th = document.createElement("TH")
	// 		th.appendChild(document.createTextNode(category[i]));
	// 		tr.appendChild(th);
	// 	}

	// 	// Add the Card Columns to the table
	// 	for (i = 0; i < cardColumn.length; i++) {
	// 		var tr = document.createElement("TR");
	// 		for (j = 0; j < cardColumn[i].length; j++) {
	// 			var td = document.createElement("TD")
	// 			td.appendChild(document.createTextNode(cardColumn[i][j]));
	// 			tr.appendChild(td);
	// 		}
	// 		tableBody.appendChild(tr);
	// 	}

	// 	// Add the table to pcTable
	// 	pcTable.appendChild(table);
	// };

	// placecardTable();
	
	// // Add class to each category in the table correspond to category questions
	// function addClass() {
	// 	for (i = 1; i < 6; i++) {
	// 		$("td:nth-child(" + i + ")").addClass("category-" + i);
	// 	}
	// }

	// addClass();

	// function chooseQuestion() {

	// 		$("td").on("click", function() {
	// 			console.log(this);
	// 			var category = $(this).attr("class");
	// 			console.log(category);
	// 			switch (category) {
	// 				case "category-1" : $(this).replaceWith(qa200[0].question);
	// 				case "category-2" : $(this).replaceWith(qa400[0].question);
	// 				case "category-3" : $(this).replaceWith(qa600[0].question);
	// 				case "category-4" : $(this).replaceWith(qa800[0].question);
	// 				case "category-5" : $(this).replaceWith(qa1000[0].question);
	// 			}
	// 		})
	// 	}
			
	// 			console.log(this);
				
	// 			console.log(typeof category);
	// 			console.log(qa200[0].question);
				
	// 
	// 		// var category = parseInt($(this).text());

	// 		// switch (number) {
	// 		// 	case 200 : $(this).replaceWith(qa1[0].question);
	// 		// 	case 400 : $(this).replaceWith(qa2[1].question);
	// 		// 	case 600 : $(this).replaceWith(qa1[2].question);
	// 		// 	case 800 : $(this).replaceWith(qa1[3].question);
	// 		// 	case 1000 : $(this).replaceWith(qa1[4].question);
	// 		// }
			

	// chooseQuestion();
	// // Set all the cells in the table to be clickable
	


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



