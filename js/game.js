class Game {
	constructor(wrapper, { questions }) {
		this.wrapper = wrapper;

		this.allQuestions = questions;
		this.quizQuestions = this.allQuestions;

		this.currentQuestion;
		this.answerTime;
		this.player;

		this.playerScore = 0;

		this.load(new InitialScreen(this));
	}

	start(player) {
		this.player = player;

		this.nextQuestion();
	}

	nextQuestion() {
		this.currentQuestion = new Question(this.quizQuestions.pop(), this);

		this.load(this.currentQuestion);

		this.waitForAnswer(3000);
	}

	waitForAnswer(ms) {
		// this.answerTime = setTimeout(() => {
		// 	this.nextQuestion();
		// }, ms);
	}

	checkAnswer() {}

	load(screen) {
		screen.render(this.wrapper);
	}
}
