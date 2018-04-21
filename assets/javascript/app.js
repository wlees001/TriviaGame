$(document).on('click', '#start', function(response)) {
	game.start();
}

$(document).on('click', '#done', function(response)) {
	game.done();
}

//The Questions

var questions = [{
	question: "1. What color is the sky?",
	answers: ["blue", "green", "red", "yellow"],
	correctAnswer: "blue"
}, {
	question: "2. What color is the grass?",
	answers: ["blue", "green", "red", "yellow"],
	correctAnswer: "green"
}, {
	question: "3. What color is the ocean?",
	answers: ["blue", "green", "red", "yellow"],
	correctAnswer: "blue"
}, {
	question: "4. What color is a stop-sign",
	answers: "blue", "green", "red", "yellow",
	correctAnswer: "red",
}, {
	question: "5. What color is the sun",
	answers: "blue", "green", "red", "yellow",
	correctAnswer: "yellow",
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 45,
	countdown: function() {
		game.counter--;
		$('#counter-number').html(game.counter);

		if(game.counter === 0) {
			console.log('Time Up');
			game.done();
		}
	},

	start: function() {
		timer = setInterval(game.countdown, 1000);

		$('#wrap').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
		$('#start').remove();
	}

	for (var i = 0; i < questions.length; i++) {
		panel.append('<h2>' + questions[i].question + '</h2>');
		for (var j = 0; j < questions[i].answers.length; j++) {
			panel.append('input type="radio" name="question" + -'-' + i + '"value"' + questions[i].answer[j] + '"> + questions[i].answers[j]);
				);
		}
	

	panel.append('<button id="done">Done</button>');
}
done: function() {

	$.each($("input[name='question-0']:checked"), function () {
		if ($(this).val() == questions[0].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
	$.each($("input[name='question-1']:checked"), function() {
		if ($(this.val() == questions[1].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
		$.each($("input[name='question-2']:checked"), function() {
		if ($(this.val() == questions[2].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
		$.each($("input[name='question-3']:checked"), function() {
		if ($(this.val() == questions[3].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
		$.each($("input[name="question-4"]:checked"), function() {
		if ($(this.val() == questions[4].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});
		$.each($("input[name="question-5"]:checked"), function() {
		if ($(this.val() == questions[5].correctAnswer) {
			game.correct++;
		} else {
			game.incorrect++;
		}
	});

	this.result();
	result: function() {

	clearInterval(timer);
	}

	$("wrap h2").remove();
	panel.html('<h2>All Done</h2>);
	panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
	panel.append('<h3>'Incorrect Anwers: ' + this.incorrect + '</h3>');
	panel.append('<h3>'Unanswered: ' + (questions.length - (this.correct + this.incorrect)) + '</h3>');
}



