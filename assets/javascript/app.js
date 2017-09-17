$(document).ready(function () {
	var counter = 0;
	var picked = false;
	var available = true;
    var width = $(window).width();
    var height = $(window).height();

	// Array with all the questions and answers
	var c1 = [{
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
	        question: "Question4",
	        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "Question5",
	        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    }
	];

    console.log(c1[0].question);

	var c2 = [{
        question: "What is the weather like today?",
        answers: ["Aeyyyy", "Sunny", "Raining", "Windy"],
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

	var c3 = [{
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

	var c4 = [{
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

	var c5 = [{
        question: "What is the weather like today?",
        answers: ["eek", "Sunny", "Raining", "Windy"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "Question2",
        answers: ["Aarggg", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "Question3",
        answers: ["arst", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
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

    // // Add category to each placecard
    // for (i = 1; i < 6; i++) {
    //     $(".col:nth-child(" + i + ")").addClass("category" + i);
    // }

    var cardColumn = [
        [200, 400, 600, 800, 1000]
    ];

    function addArray() {
        var question = "";
        for (i = 0; i < cardColumn.length; i++) {
            $('<div class="col" />').text(cardColumn[i]).appendTo('row');
        }

    }

    function placecardTable() {
        // Set variable pcTable to the HTML table id placecards
        var pcTable = document.getElementById("placecards")

        // Create array for question categories
        var category = ["Category A", "Category B", "Category C", "Category D", "Category E"];

        // Create element for table row and set it equal to variable tr
        var header = document.createElement("div");

        // Add the question categories to the header
        for (i = 0; i < category.length; i++) {
            var headerDiv = document.createElement("div")
            headerDiv.appendChild(document.createTextNode(category[i]));
            header.appendChild(headerDiv);
            header.setAttribute("class", "row");
            headerDiv.setAttribute("class", "col");
        }
        pcTable.appendChild(header);

        // Create a div column
        var column = document.createElement("div");

        // Add columns to the table
        pcTable.appendChild(column);

        // Set the column as a row
        column.setAttribute("class", "row");

        // Add the Card Columns to the table
        for (h = 1; h < 6; h++) {

            // Create 5 columns for the points
            for (i = 0; i < cardColumn.length; i++) {
                var gameColumn = document.createElement("div");
                gameColumn.setAttribute("class", "col");

                // Create individual points for each of the 5 columns
                for (j = 0; j < cardColumn[i].length; j++) {
                    var gameCell = document.createElement("div")
                    gameCell.setAttribute("class", "cell category" + h);
                    gameCell.appendChild(document.createTextNode(cardColumn[i][j]));
                    gameColumn.appendChild(gameCell);
                    column.appendChild(gameColumn);
                }
            }
        }
    };

    placecardTable();

    
 
    // When you click on a placecard, it reveals the question and answer
    function checkQuestion(category, element,) {
            counter = (counter + 1) % category.length;

            var answers = category[counter].answers;

            var questions = category[counter].question + "<br>";

            var qanda = questions.concat(answers.join("<br>"));

            var timeout = category[counter].timeout;

            element.innerHTML += "<br>" + qanda;

            $(element).addClass("fullscreen").css({"width":width, "height":height});

            setTimeout(function() {
                element.innerHTML = timeout;
            }, 1000);
        }


    function gameStart() {

        $(".cell").on("click", function() {
        var category = parseInt($(this).text());
        var className = $(this).attr("class").split(" ")[1];

        if (className === "category1") {
            checkQuestion(c1, this);

        } else if (className === "category2") {
            checkQuestion(c2, this);
        } else if (className === "category3") {
            checkQuestion(c3, this);
        } else if (className === "category4") {
            checkQuestion(c4, this);
        } else {
            checkQuestion(c5, this);
        }

        })
    }
    gameStart();
    

});