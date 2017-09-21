$(document).ready(function () {
	var counter = 0;
    var width = $(window).width();
    var height = $(window).height();
    var wincount = 0;
    var clicks = 0;
    var audio = new Audio('../TriviaGame/assets/sounds/times-up.mp3');

    // Create array for question categories
    var category = ["Movies", "Capitals", "History", "Food", "Sports"];

	// Array with all the questions and answers
	var c1 = [{
        question: 'He played Aragon in the "Lord of the Rings" movies',
        answers: ["Who is Viggo Mortensen?", "Who is Orlando Bloom?", "Who is Elijah Wood?", "Who is Ian McKellen?"],
        theanswer: "Who is Viggo Mortensen?"
    },
    {
        question: "Maggie Gyllenhaal took over the role of Rachel Dawes in this 2008 Batman film",
        answers: ["What is The Dark Knight?", "What is The Dark Knight Rises?", "What is Batman vs Superman?", "What is Batman Begins?"],
        theanswer: "What is The Dark Knight?"
    },
    {
        question: 'It was double trouble for this martial arts star playing twins in "Twin Dragons"',
        answers: ["Who is Jackie Chan?", "Who is Tony Ja?", "Who is Jet Li?", "Who is Bruce Lee?"],
        theanswer: "Who is Jackie Chan?"
    },
    {
        question: 'In 1987 this actress won an Oscar for her film debut, "Children of A Lesser God"',
        answers: ["Who is Marlee Matlin?", "Who is Piper Laurie", "Who is Dianne Wiest?", "Who is Anjelica Huston?"],
        theanswer: "Who is Marlee Matlin?"
    },
    {
        question: "Martin Scorsese directed this 2010 film set at an isolated asylum for the criminally insane",
        answers: ["What is Shutter Island?", "What is Girl, Interrupted?", "What is Silence?", "What is The Haunting?"],
        theanswer: "What is Shutter Island?"
    }
	];

	var c2 = [{
        question: 'Calcutta was once the capital of India; this "New" city was made the capital in 1931',
        answers: ["What is New Delhi?", "What is Bombay?", "What is Mumbai?", "What is Bangalore?"],
        theanswer: "What is New Delhi?"
    },
    {
        question: "It's the northernmost capital city in mainland North America",
        answers: ["What is Ottawa?", "What is Toronto?", "What is Vancouver?", "What is New York City?"],
        theanswer: "What is Ottawa?"
    },
    {
        question: 'In Mandarin, this city\'s name means "northern capital"',
        answers: ["What is Beijing?", "What is Shanghai?", "What is Tianjin?", "What is Guangzhou?"],
        theanswer: "What is Beijing?"
    },
    {
        question: "Key West, Florida is only about 100 miles away from this foreign capital",
        answers: ["What is Havana, Cuba?", "What is San Juan, Puerto Rico?", "What is Kingston, Jamaica?", "What is Nassau, Bahamas?"],
        theanswer: "What is Havana, Cuba?"
    },
    {
        question: "Edvard Munch bequeathed his works of art to this Norwegian capital, which built a museum to display them",
        answers: ["What is Oslo?", "What is Stockholm?", "What is Copenhagen?", "What is Helsinki?"],
        theanswer: "What is Oslo?"
    }
	];

	var c3 = [{
        question: "She was the mother of England's Queen Elizabeth I",
        answers: ["Who is Anne Boleyn?", "Who is Empress Matilda?", "Who is Mary II of England?", "Who is Emma of Normandy?"],
        theanswer: "Who is Anne Boleyn?",
    },
    {
        question: '"Black Thursday" happened on Oct. 24 of this year; 5 days later, share prices had fallen 80%',
        answers: ["What is 1929?", "What is 1989?", "What is 2008?", "What is 1912?"],
        theanswer: "What is 1929?",
    },
    {
        question: "When he went to Europe in 1971, he became the first reigning Japanese monarch to travel abroad",
        answers: ["Who is Hirohito?", "Who is Prince Naruhito?", "Who is Emperor Jimmu?", "Who is Akihito?"],
        theanswer: "Who is Hirohito?",
    },
    {
        question: "From 1815 to 1861 this principality on the Riviera was under the protection of Sardinia",
        answers: ["What is Monaco?", "What is Nice?", "What is Cannes?", "What is Cinque Terre?"],
        theanswer: "What is Monaco?",
    },
    {
        question: "Elizabeth Petrovna, the daughter of this czar, became empress of Russia in 1741",
        answers: ["Who is Peter the Great?", "Who is Vladimir Lenin?", "Who is George V?", "Who is Grigori Rasputin?"],
        theanswer: "Who is Peter the Great?",
    }
	];

	var c4 = [{
        question: "Amaretti are macaroons flavored with a paste made from the bitter type of these nuts",
        answers: ["What is almonds?", "What is pecans?", "What is walnuts?", "What is cashews?"],
        theanswer: "What is almonds?"
    },
    {
        question: "The first new variety of Eggo waffle Kellogg's made was one with this fruit in 1972",
        answers: ["What is blueberries?", "What is strawberries?", "What is apples?", "What is bananas?"],
        theanswer: "What is blueberries?",
    },
    {
        question: "Nova is a cold-smoked type of this fish originally from Nova Scotia",
        answers: ["What is salmon?", "What is swordfish?", "What is snapper?", "What is tuna?"],
        theanswer: "What is salmon?",
    },
    {
        question: "Cannoli pastries are often filled with this soft cheese found in lasagna",
        answers: ["What is ricotta?", "What is mozzarella?", "What is gorgonzola?", "What is burrata?"],
        theanswer: "What is ricotta?",
    },
    {
        question: 'In the early 1900s this fast food was sometimes called "Coney Island Chicken"',
        answers: ["What is a hot dog?", "What is a hamburger?", "What is french fries?", "What is chicken wings?"],
        theanswer: "What is a hot dog?",
    }
	];

	var c5 = [{
        question: "Buster Douglas' 1990 knockout of this champ has been called the greatest heavyweight title upset",
        answers: ["Who is Mike Tyson?", "Who is Floyd Mayweather?", "Who is Oscar De La Hoya?", "Who is Roy Jones Jr.?"],
        theanswer: "Who is Mike Tyson?",
    },
    {
        question: "A little birdie told us an eagle is a score this many under par on one hole",
        answers: ["What is 2?", "What is 1?", "What is 3?", "What is 0?"],
        theanswer: "What is 2?",
    },
    {
        question: "In 2005 Larry Fitzgerald caught 103 passes, including 10 TDs, for this team",
        answers: ["What is the Arizona Cardinals?", "What is the Dallas Cowboys?", "What is the Philadelphia Eagles?", "What is the Green Bay Packers?"],
        theanswer: "What is the Arizona Cardinals?",
    },
    {
        question: 'Co-captains of the 1992 Olympic basketball "Dream Team" were Magic Johnson & this Celtics star',
        answers: ["Who is Larry Bird?", "Who is Michael Jordan?", "Who is Karl Malone?", "Who is John Stockton?"],
        theanswer: "Who is Larry Bird?",
    },
    {
        question: "Since 1986, reaching the quarterfinals of this event has entitled you to free tickets & free tea for life",
        answers: ["What is Wimbledon?", "What is The Masters?", "What is The Grand National?", "What is the World Series?"],
        theanswer: "What is Wimbledon?",
    }
	];

    var cardColumn = [
        [200, 400, 600, 800, 1000]
    ];

    // Shuffle the answers using the Fisher Yates Shuffle method
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

    // Add the header categories
    function header() {
        // Create element for table row and set it equal to variable tr
        var header = document.createElement("div");

        // Add the question categories to the header
        for (i = 0; i < category.length; i++) {
            var headerDiv = document.createElement("div")
            headerDiv.appendChild(document.createTextNode(category[i]));
            header.appendChild(headerDiv);
            header.setAttribute("id", "header");
            header.setAttribute("class", "row");
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

                    // Up the wincount
                    wincount += value;

                    // Add the wincount to the page
                    document.getElementById("wincount").innerHTML = "Score: $" + wincount;
                    
                    // Remove the question mark when putting the answer for the player
                    var splicecheck = check.slice(0,-1);

                    // Add the win to the page                    
                    cellDiv.innerHTML = "<br>" + "<br>" + "<br>" + splicecheck + " is correct!";

                    var none = null;
                    var clips = [
                        new Audio("assets/sounds/correct.mp3"),
                        new Audio("assets/sounds/thatstheone.mp3"),
                        new Audio("assets/sounds/yes.mp3"),
                        new Audio("assets/sounds/good.mp3")
                    ];

                    function playSound() {
                        if (null !== none) {
                            clips[none].pause();
                        }

                        none = Math.floor((Math.random() * 1000) % 3);
                        clips[none].play();
                    }
                    playSound();

                    // Timeout back to original placecard page
                    setTimeout(function() {
                        $(element).replaceWith("<div class='cell'></div>");
                    }, 2000);

                } else {

                    var spliceAnswer = playerAnswer.slice(0,-1);
                    cellDiv.innerHTML = "<br>" + "<br>" + "<br>" + "I'm sorry " + spliceAnswer + " is incorrect.";
                    
                    var none = null;
                    var clips = [
                        new Audio("assets/sounds/no.mp3"),
                        new Audio("assets/sounds/nope.mp3")
                    ];

                    function playSound() {
                        if (null !== none) {
                            clips[none].pause();
                        }

                        none = Math.floor((Math.random() * 1000) % 3);
                        clips[none].play();
                    }
                    playSound();

                    // Timeout back to original placecard page
                    setTimeout(function() {
                        $(element).replaceWith("<div class='cell'></div>");
                    }, 2000);
                }

            });

            // If the player takes too long, tell player the right answer and go back to game board
            setTimeout(function() {   
                element.innerHTML = "<br>" + "<br>" + "<br>" + "Time's Up! The correct answer is " + check;
                var text = $("div.cell").text();

                // Play times up sound only when the Time's Up message is shown
                if (text.includes("Time's Up! The correct answer is ")) {
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