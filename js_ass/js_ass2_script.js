// Questions that will be asked
const Questions = [{
	q: "Which language runs in a web browser?",
	a: [{ text: "Java", isCorrect: false },
	{ text: "C", isCorrect: false },
	{ text: "Python", isCorrect: false },
	{ text: "JavaScript", isCorrect: true }
	]

},
{
	q: "What does CSS stand for?",
	a: [{ text: "Central Style Sheets", isCorrect: false, isSelected: false },
	{ text: "Cascading Style Sheets", isCorrect: true },
	{ text: "Cascading Simple Sheets", isCorrect: false },
	{ text: "Cars SUVs Sailboats", isCorrect: false }
	]

},
{
	q: "What does HTML stand for?",
	a: [{ text: "Hypertext Markup Language", isCorrect: true },
	{ text: "Hypertext Markdown Language", isCorrect: false },
	{ text: "Hyperloop Machine Language", isCorrect: false },
	{ text: "Helicopters Terminals Motorboats Lamborginis", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You answered ${score}/${Questions.length} questions Correctly`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
