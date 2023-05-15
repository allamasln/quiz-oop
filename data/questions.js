const questions = {
	questions: [
		{
			question: 'How does a FOR loop start?',
			answers: [
				'for i = 1 to 5',
				'for (i = 0; i <= 5; i++)',
				'for (i <= 5; i++)',
				'for (i = 0; i <= 5)',
			],
			correctAnswer: 0,
		},
		{
			question: 'How do you write "Hello World" in an alert box?',
			answers: [
				'alertBox("Hello World");',
				'msg("Hello World");',
				'alert("Hello World");',
				'msgBox("Hello World");',
			],
			correctAnswer: 3,
		},
		{
			question: 'Which operator is used to assign a value to a variable?',
			answers: ['*', '-', 'x', '='],
			correctAnswer: 2,
		},
		{
			question: 'Inside which HTML element do we put the JavaScript?',
			answers: ['<js>', '<javascript>', '<script>', '<scripting>'],
			correctAnswer: 1,
		},
		{
			question:
				'What is the correct JavaScript syntax to change the content of the HTML element below?',
			answers: [
				'document.getElement("p").innerHTML = "Hello World!";',
				'document.getElementByName("p").innerHTML = "Hello World!";',
				'document.getElementById("demo").innerHTML = "Hello World!";',
				'#demo.innerHTML = "Hello World!";',
			],
			correctAnswer: 3,
		},
		{
			question: 'Where is the correct place to insert a JavaScript?',
			answers: [
				'The <head> section',
				'Both the <head> section and the <body> section are correct',
				'The <body> section',
				'The <footer>',
			],
			correctAnswer: 0,
		},
		{
			question: "How can you detect the client's browser name?",
			answers: ['client.navName', 'navigator.appName', 'browser.name'],
			correctAnswer: 2,
		},
		{
			question: 'How do you call a function named "myFunction"?',
			answers: [
				'call function myFunction()',
				'call myFunction()',
				'myFunction()',
			],
			correctAnswer: 2,
		},
		{
			question:
				'What is the correct syntax for referring to an external script called "xxx.js"?',
			answers: [
				'<script name="xxx.js">',
				'<script declare="xxx.js">',
				'<script src="xxx.js">',
				'<script href="xxx.js">',
			],
			correctAnswer: 0,
		},
		{
			question: 'What is the correct way to write a JavaScript array?',
			answers: [
				'var colors = "red", "green", "blue"',
				'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
				'var colors = (1:"red", 2:"green", 3:"blue")',
				'var colors = ["red", "green", "blue"]',
			],
			correctAnswer: 1,
		},
	],
};
