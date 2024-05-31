const quizData = [
  {
    question: "Have you gone too far with banter?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Have you ever trash talked someone too far in an online game?",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Have you ever excessively used swears to somebody",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Have you ever sent rumours about someone you vaguely heard",
    options: ["Yes", "No"],
    answer: "No"
  },
  {
    question: "Posted pictures about someone on a social media site, without their explicit consent?",
    options: ["Yes", "No"],
    answer: "No"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quizElement = document.getElementById("quiz");
const emailForm = document.getElementById("email-form"); // Get the email form
const submitEmailButton = document.getElementById("submit-email"); // Get the submit button for the email

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showEmailForm(); // Show the email form when quiz is completed
  }
}

function showEmailForm() {
  quizElement.style.display = "none";
  emailForm.style.display = "block";
}

submitEmailButton.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const subject = "Your Quiz Score";
  const body = `Thank you for taking the ARE YOU? A CYBERBULLY  quiz! Your score is: ${score}/${quizData.length}.\n\nKind regards,\nAditya Ahuja,\nHead of Anti Cyberbullying Campaign`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  alert('Thank you for taking the ARE YOU? A CYBERBULLY  quiz! Your score has been sent to your email.');
});

showQuestion();

