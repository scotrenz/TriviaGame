$(document).ready(function () {
	var counter = 0;
    var width = $(window).width();
    var height = $(window).height();


    // Create array for question categories
    var category = ["Category A", "Category B", "Category C", "Category D", "Category E"];

	// Array with all the questions and answers
	var c1 = [{
	        question: "What is the weather like today?",
	        answers: ["ANSWER", "Sunny", "Raining", "Windy"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "What day is it?",
	        answers: ["Monday", "Tuesday", "Answer 2.3", "Answer 2.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "How are you?",
	        answers: ["Good", "Answer 3.2", "Bad", "Answer 3.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "What's up?",
	        answers: ["Nothing", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    },
	    {
	        question: "What?",
	        answers: ["YEs", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
	        correct: "Answer is the right answer",
	        wrong: "Sorry you're wrong",
	        timeout: "You ran out of time."
	    }
	];

    console.log(c1[0].question);

	var c2 = [{
        question: "What is the weather like todayyyyy?",
        answers: ["Aeyyyy", "Sunny", "Raining", "Windy"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "What is blue?",
        answers: ["Yellow", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "What color?",
        answers: ["Pink", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "Colr day today?",
        answers: ["Yessss", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
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
        question: "What Water?",
        answers: ["Bottled", "Sunny", "Raining", "Windy"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "Water no more?",
        answers: ["H2o", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
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
        question: "Water cup?",
        answers: ["plastic", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "MOOLS",
        answers: ["waters", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    }
	];

	var c4 = [{
        question: "q1?",
        answers: ["ANSWER", "Sunny", "Raining", "Windy"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "q2",
        answers: ["Answer 2.1", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "q3",
        answers: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "q4",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        correct: "Answer is the right answer",
        wrong: "Sorry you're wrong",
        timeout: "You ran out of time."
    },
    {
        question: "q5",
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


    var cardColumn = [
        [200, 400, 600, 800, 1000]
    ];

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

    // function addArray() {
    //     var question = "";
    //     for (i = 0; i < cardColumn.length; i++) {
    //         $('<div class="col" />').text(cardColumn[i]).appendTo('row');
    //     }
    // }

    function placecardTable() {
        // Set variable pcTable to the HTML table id placecards
        var pcTable = document.getElementById("placecards")

        

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
                    gameCell.setAttribute("class", "cell category" + h + " cell-number-" + j);
                    gameCell.appendChild(document.createTextNode(cardColumn[i][j]));
                    gameColumn.appendChild(gameCell);
                    column.appendChild(gameColumn);
                }
            }
        }
    };

    placecardTable();

    
 
    // When you click on a placecard, it reveals the question and answer
    function checkQuestion(category, element) {

            // Set a counter to go through category question. 
            counter = (counter + 1) % category.length;

            // Get the cell name of the on click
            var cellName = $(element).attr("class").split("-").pop();

            // Set variable for the answers array based on the cell name
            var answers = category[cellName].answers;

            // Set variable for the chosen question based on the cell name
            var questions = category[cellName].question;

            // Create a div for the full page question/answer
            var questionanswer = document.createElement("div");

            // Set a class to style it
            questionanswer.setAttribute("class", "fullpage");

            // Add the questionanswer div to the page
            element.appendChild(questionanswer);

            console.log(element);

            // Add question to the div
            questionanswer.appendChild(document.createTextNode(questions));

            // Create a button element for all the answers and add to the page
            for (i = 0; i < category[counter].answers.length; i++) {
                var btn = document.createElement("button");
                var inside = document.createTextNode(category[cellName].answers[i]);
                btn.appendChild(inside);
                questionanswer.appendChild(btn);
            }
            var currentWidth = $(element).width();
            var currentHeight = $(element).height();
            // // Add full screen class to the chosen placecard
            $(element).addClass("fullscreen").css({"width":width, "height":height});

            
            // Create timeout variable
            // var timeout = category[counter].timeout;
            //     console.log(timeout);

            // setTimeout(function() {
            //     element.innerHTML = timeout;
            // }, 1000);

            // // If the player takes too long, tell player the right answer and go back to game board
            // setTimeout(function() {
            //     $(element).replaceWith("<div class='cell'></div>");
            //     $(element).removeClass("fullscreen").css({"width":currentWidth, "height":currentHeight});
            // }, 2000);
               
            winorlose(category[counter], this);      

        }


    function winorlose(category, element) {
        // var newAns = category.answers.shuffle();
        // console.log(category.answers);
        // console.log(newAns);

        for(i = 3; i >= 0; i--) {
            button.appendChild(button.children[Math.random() * i | 0])
        }

        $("button").on("click", function() {
            var playerAnswer = $(this).text();
            console.log(playerAnswer);

            if (category.answers[0] === playerAnswer) {
                
                
                console.log(category.answers[0]);
                // Set variable for the chosen question
                var correct = category.correct;
                console.log(correct);

                // Add the questionanswer div to the page
                // document.getElementsByClassName("cell").appendChild(correct);

                // // Add question to the div
                // questionanswer.appendChild(document.createTextNode(correct));


            }
        });
    }


    function gameStart() {

        $(".cell").one("click", function() {
        var category = parseInt($(this).text());
        var className = $(this).attr("class").split(" ")[1];

        console.log(className);
            if (className === "category1") {
                checkQuestion(c1, this);
            } else if (className === "category2") {
                checkQuestion(c2, this);
            } else if (className === "category3") {
                checkQuestion(c3, this);
            } else if (className === "category4") {
                checkQuestion(c4, this);
            } else if (className === "category5"){
                checkQuestion(c5, this);
            };
        });
    };
    gameStart();
    
});