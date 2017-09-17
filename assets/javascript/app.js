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

    console.log(qa200[0].question);

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

    // Add category to each placecard
    for (i = 1; i < 6; i++) {
        $(".col:nth-child(" + i + ")").addClass("category-" + i);
    }

    // When you click on a placecard, it reveals the question and answer
    
    function gameStart() {


        $(".col").not(".heading").on("click", function() {
        var category = parseInt($(this).text());
        var className = $(this).attr("class").split(" ")[1];

        console.log(this);
        if (className === "category-1") {
            counter = (counter + 1) % qa200.length;
            var answers = qa200[counter].answers;
            var questions = qa200[counter].question + "<br>";
            var qanda = questions.concat(answers.join("<br>"));
            $(this).replaceWith(qanda);
        } 
        })
    }
    gameStart();
    

});