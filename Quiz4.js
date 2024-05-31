const quizData = [
  {
    question: "How can you make your accounts more safer from Cyberbullies?",
    options: ["Share your personal information publicly", "Set your accounts private", "Presume you are already safe and do nothing", "Flame the Cyberbully"],
    answer: "Set your accounts private"
  },
  {
    question: "What is something you should consider when you post something online",
    options: ["If your friends will find it funny", "If it reveals personal or sensitive info", "Getting the most likes and comments", "Whether it will make you famous in your school"],
    answer: "If it reveals personal or sensitive info"
  },
  {
    question: "Say someone sends you an offensive message on a text messaging app. What should be your first response?",
    options: ["Angry retaliate against the Cyberbully", "Show weakness to the cyberbully", "Take a screenshot and report to a trusted adult", "Do nothing, hope the cyberbully will get tired"],
    answer: "Take a screenshot and report to a trusted adult"
  },
  {
    question: "Why is it crucial to have any sort of evidence of cyberbullying against you?",
    options: ["to prove evidence to the people you are reporting to", "so you can send it to the cyberbully", "to have a good laugh with your friends", "to delete it"],
    answer: "to prove evidence to the people you are reporting to"
  },
  {
    question: "To cope with Cyberbullying_______",
    options: ["Cry in a corner", "Seek support from trusted family, friends, counsellers, therapists etc.", "Take out your anger by cyberbullying others", "Chronically stay online"],
    answer: "Seek support from trusted family, friends, counsellers, therapists etc."
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
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  

}

submitEmailButton.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const subject = "Your Quiz Score";
  const body = `Thank you for taking the COMBATTING CYBERBULLYING QUIZ! Your score is: ${score}/${quizData.length}.\n\nKind regards,\nAditya Ahuja,\nHead of Anti Cyberbullying Campaign`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  alert('Thank you for taking the COMBATTING CYBERBULLYING QUIZ Your score has been sent to your email.');
});

showQuestion();