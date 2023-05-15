class Question {
	constructor({ question, answers, correctAnswer }, game) {
		this.game = game;
		this.question = question;
		this.answers = answers;
		this.correctAnswer = correctAnswer;

		this.answersDOMEl = [];
	}

	setSelector() {
		this.game.wrapper.addEventListener('click', ({ target: input }) => {
			if (input.tagName !== 'INPUT') return;

			this.checkingAnswer(input);
		});
	}

	checkingAnswer(selectedRadio) {
		this.disableRadios();
		selectedRadio.classList.add('blink');

		if (this.checkAnswer(selectedRadio)) this.game.playerScore++;

		const handleInstantCheck = () => {
			const check = this.checkAnswer(selectedRadio) ? 'success' : 'error';

			selectedRadio.classList.add(check);

			const handleNextQuestion = () => {
				this.game.nextQuestion();

				clearInterval(timerId);
			};

			setTimeout(handleNextQuestion, 5000);
		};

		const timerId = setTimeout(handleInstantCheck, 3000);
	}

	disableRadios() {
		this.answersDOMEl.forEach(({ firstChild: radio, lastChild: label }) => {
			radio.disabled = true;
			label.classList.add('disabled');
		});
	}

	checkAnswer(selectedRadio) {
		return selectedRadio.value == this.correctAnswer;
	}

	addAnswer(answer, position) {
		const li = document.createElement('li');

		li.innerHTML = `<input id="a-${position}" value="${position}" name="answer" type="radio">`;

		const label = document.createElement('label');
		label.setAttribute('for', `a-${position}`);
		label.append(this.addCodeBlock(answer));

		li.append(label);

		this.answersDOMEl.push(li);

		return li;
	}

	addCodeBlock(code) {
		const codeBlock = document.createElement('code');

		codeBlock.innerText = code;

		return codeBlock;
	}

	render() {
		const { wrapper } = this.game;
		wrapper.innerHTML = `<h2>${this.question}</h2>`;

		const ol = document.createElement('ol');
		ol.id = 'question';

		wrapper.append(ol);

		this.answers.forEach((a, key) => ol.append(this.addAnswer(a, key)));

		this.setSelector();
	}
}
