const quizData = [
  {
    question: "54% of _____ aged 15-17 have experienced cyberbullying",
    options: ["Boys", "Girls", "Boys and Girls"],
    answer: "Girls"
  },
  {
    question: "41% of ____ aged 13-14 have experienced cyberbullying",
    options: ["Girls", "Boys and Girls", "Boys"],
    answer: "Boys and Girls"
  },
  {
    question: "13%.6 of teenagers who have been cyberbullied have_____",
    options: ["Gained anxiety", "not reported it adult", "Made a sucicide attempt", "Committed Sucicide"],
    answer: "Made a sucicide attempt"
  },
  {
    question: "90% of Teenagers who have been cyberbullied are _____ ",
    options: ["suffering from depression", "afraid to report it", "living in the USA", "a POC"],
    answer: "afraid to report it"
  },
  {
    question: "The worst social media app, with 41% of teens being cyberbullied is________",
    options: ["Facebook", "TikTok", "Instagram", "Youtube"],
    answer: "Instagram"
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
  const body = `Thank you for taking the FACTS AND STATS CYBERBULLYING quiz! Your score is: ${score}/${quizData.length}.\n\nKind regards,\nAditya Ahuja,\nHead of Anti Cyberbullying Campaign`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  alert('Thank you for taking the FACTS AND STATS CYBERBULLYING QUIZ Your score has been sent to your email.');
});

showQuestion();