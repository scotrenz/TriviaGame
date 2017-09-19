$(document).ready(function () {
	var counter = 0;
    var width = $(window).width();
    var height = $(window).height();
    var wincount = 0;
    var clicks = 0;
    var audio = new Audio('../TriviaGame/assets/sounds/times-up.mp3');

    // Create array for question categories
    var category = ["Category A", "Category B", "Category C", "Category D", "Category E"];

	// Array with all the questions and answers
	var c1 = [{
        question: "What is the weather like today?",
        answers: ["ANSWER", "Sunny", "Raining", "Windy"],
        theanswer: "ANSWER",
    },
    {
        question: "What day is it?",
        answers: ["Monday", "Tuesday", "Answer 2.3", "Answer 2.4"],
        theanswer: "Monday",
    },
    {
        question: "How are you?",
        answers: ["Good", "Answer 3.2", "Bad", "Answer 3.4"],
        theanswer: "Bad",
    },
    {
        question: "What's up?",
        answers: ["Nothing", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Nothing",
    },
    {
        question: "What?",
        answers: ["YEs", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.2",
    }
	];

	var c2 = [{
        question: "What is the weather like todayyyyy?",
        answers: ["Aeyyyy", "Sunny", "Raining", "Windy"],
        theanswer: "Sunny",
    },
    {
        question: "What is blue?",
        answers: ["Yellow", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        theanswer: "Answer 2.2",
    },
    {
        question: "What color?",
        answers: ["Pink", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        theanswer: "Pink",
    },
    {
        question: "Colr day today?",
        answers: ["Yessss", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.3",
    },
    {
        question: "Question1",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.3",
    }
	];

	var c3 = [{
        question: "What Water?",
        answers: ["Bottled", "Sunny", "Raining", "Windy"],
        theanswer: "Bottled",
    },
    {
        question: "Water no more?",
        answers: ["H2o", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        theanswer: "H2o",
    },
    {
        question: "Question3",
        answers: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        theanswer: "Answer 3.3",
    },
    {
        question: "Water cup?",
        answers: ["plastic", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.4",
    },
    {
        question: "MOOLS",
        answers: ["waters", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "waters",
    }
	];

	var c4 = [{
        question: "q1?",
        answers: ["ANSWER", "Sunny", "Raining", "Windy"],
        theanswer: "Windy",
        timeout: "You ran out of time."
    },
    {
        question: "q2",
        answers: ["Answer 2.1", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        theanswer: "Answer 2.1",
    },
    {
        question: "q3",
        answers: ["Answer 3.1", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        theanswer: "Answer 3.3",
    },
    {
        question: "q4",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.2",
    },
    {
        question: "q5",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.4",
    }
	];

	var c5 = [{
        question: "What is the weather like today?",
        answers: ["eek", "Sunny", "Raining", "Windy"],
        theanswer: "eek",
    },
    {
        question: "Question2",
        answers: ["Aarggg", "Answer 2.2", "Answer 2.3", "Answer 2.4"],
        theanswer: "Answer 2.3",
    },
    {
        question: "Question3",
        answers: ["arst", "Answer 3.2", "Answer 3.3", "Answer 3.4"],
        theanswer: "arst",
    },
    {
        question: "Question1",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.3",
    },
    {
        question: "Question1",
        answers: ["Answer 4.1", "Answer 4.2", "Answer 4.3", "Answer 4.4"],
        theanswer: "Answer 4.3",
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

    var pcTable = document.getElementById("placecards");

    
    function header() {
        // Create element for table row and set it equal to variable tr
        var header = document.createElement("div");

        // Add the question categories to the header
        for (i = 0; i < category.length; i++) {
            var headerDiv = document.createElement("div")
            headerDiv.appendChild(document.createTextNode(category[i]));
            header.appendChild(headerDiv);
            header.setAttribute("class", "row");
            header.setAttribute("id", "header");
            headerDiv.setAttribute("class", "col");
        }
        // Add header to page
        pcTable.appendChild(header);
    }
    header();

    function placecardTable() {

        // Create a div column
        var column = document.createElement("div");

        // Add columns to the table
        pcTable.appendChild(column);

        // Set the column as a row
        column.setAttribute("class", "row dollar");

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
                    gameCell.appendChild(document.createTextNode("$" + cardColumn[i][j]));
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

        // Set variable for the answers array based on the cell name and shuffle it
        var answers = category[cellName].answers.shuffle();

        // Set variable for the chosen question based on the cell name
        var questions = category[cellName].question;

        // Create a div for the full page question/answer
        var questionanswer = document.createElement("div");

        // Set a class to style it
        questionanswer.setAttribute("class", "fullpage");

        // Add the questionanswer div to the page
        element.appendChild(questionanswer);

        // Set this
        var cellDiv = element;

        // Add question to the div
        questionanswer.appendChild(document.createTextNode(questions));

        // Create a button element for all the answers and add to the page
        for (i = 0; i < category[counter].answers.length; i++) {
            var btn = document.createElement("button");
            var inside = document.createTextNode(category[cellName].answers[i]);
            btn.appendChild(inside);
            questionanswer.appendChild(btn);
        }

        // Get the current width and height to save for returning to the placecard page
        
        var currentWidth = $("div.cell").width() + "px";
        var currentHeight = $("div.cell").height() + "px";

        // // Add full screen class to the chosen placecard
        $(element).addClass("fullscreen").css({"width":width, "height":height});
        
        // Create timeout variable
        var timeout = category[counter].timeout;  

        winorlose();   

            // Get the 2nd class of the element parameter 
            var categoryName = $(element).attr('class').split(' ')[1];

            // Get the 3rd class of the element parameter
            var cName = $(element).attr('class').split(' ')[2];

            // Store the last character of the category name in cell
            var cat = categoryName[categoryName.length -1];

            // Store the last character of the cell name in pop
            var cell = cName[cName.length -1];

            // The category of the chosen question
            var category = "c" + cat;

            // The cell number of chosen question
            var cellcheck = "[" + cell + "]";

            // Get the answer of the question
            var check = eval("c" + cat + "[" + cell + "]" + ".theanswer");       

            function winorlose() {
            $("button").on("click", function() {
                $("#timer").get(0).pause();
                $("#timer").get(0).currentTime = 0;

                // Set variable for player's answer
                var playerAnswer = $(this).text();

                // If the answer equal the player's choice
                if (check === playerAnswer) {
                    var value = parseInt($("div.cell").text().slice(1));
                    console.log(value);
                    // Up the wincount
                    wincount += value;

                    // Add the wincount to the page
                    document.getElementById("wincount").innerHTML = "Score: $" + wincount;

                    console.log(element);

                    
                    // Add the win to the page
                    cellDiv.innerHTML = check + " is correct!";
                    
                    // Timeout back to original placecard page
                    setTimeout(function() {
                        $(element).replaceWith("<div class='cell'></div>");
                    }, 1000);

                } else {
                    cellDiv.innerHTML = "I'm sorry " + playerAnswer + " is incorrect.";
                    // Timeout back to original placecard page
                    setTimeout(function() {
                        $(element).replaceWith("<div class='cell'></div>");
                    }, 1000);
                }

            });

            // If the player takes too long, tell player the right answer and go back to game board
            setTimeout(function() {   
                element.innerHTML = "Time's Up! The correct answer is " + check;
                var teststring = "Time's Up! The correct answer is " + check;
                
                // Play times up sound only when the Time's Up message is shown
                if ($("div.cell").text().indexOf(teststring) > -1)
                {
                    audio.play();
                }
            }, 15000);

            setTimeout(function() {
                $(element).replaceWith("<div class='cell'></div>");
            }, 16500);


            // If you hit 25 placecards turned over, restart the game
            if (clicks === 25) {
                setTimeout(function() {
                    $(element).replaceWith("<div class='cell'></div>");
                    restartGame();
                }, 10000);
            };
        } 
    }


    function gameStart() {
        // Set so that you click once on the placecards 
        $(".cell").one("click", function() {
            $("#timer").get(0).play();
            clicks++; 
            // Set category of the chosen question
            var category = parseInt($(this).text());

            // Set class name of question chosen
            var className = $(this).attr("class").split(" ")[1];

            // Get the question
            if (className === "category1") {
                checkQuestion(c1, this);
            } else if (className === "category2") {
                checkQuestion(c2, this);
            } else if (className === "category3") {
                checkQuestion(c3, this);
            } else if (className === "category4") {
                checkQuestion(c4, this);
            } else if (className === "category5") {
                checkQuestion(c5, this);
            };
        });
    };

    gameStart();

    function restartGame() {
        // Delete row dollar
        $(".dollar").remove();
        // Create restart button
        var restartButton = document.createElement("button");
        // Set an ID for the restart button
        restartButton.setAttribute("id", "restart");
        // Set text for button
        var gameRestart = document.createTextNode("Restart Game!");
        // Add text to button
        restartButton.appendChild(gameRestart);
        // Add button to page
        document.body.appendChild(restartButton);

        // On clicking the restart button, reset the questions and values to placecard
        $("#restart").on("click", function() {
            setTimeout(function() {
                placecardTable();
                gameStart();
                wincount = 0;
                document.getElementById("wincount").innerHTML = "Score: $" + wincount;
                $("#restart").hide();
            }, 1000);
        });
    };
});