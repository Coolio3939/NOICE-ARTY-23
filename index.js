

const quizData = [
  {
    question: "What is Cyberbullying?",
    options: ["bullying digitally", "The use of AI in school", "Physical bullying", "Using VPN"],
    answer: "bullying digitally"
  },
  {
    question: "What is an example of Cyberbullying?",
    options: ["Winning a video game against a friend", "Sending a gif on a messaging app", "Sending mean texts to someone", "Having banter online"],
    answer: "Sending mean texts to someone"
  },
  {
    question: "What is NOT a consequence of being Cyberbullied?",
    options: ["Gain self-esteem", "Have suicidal thoughts", "Experience anxiety or depression", "Lower self-esteem"],
    answer: "Gain self-esteem"
  },
  {
    question: "What should you do when a person is being cyberbullied?",
    options: ["Pray for it to stop", "Do nothing", "Laugh at the victim and join the bully", "Report to a trusted adult"],
    answer: "Report to a trusted adult"
  },
  {
    question: "How can you prevent cyberbullying?",
    options: ["Gossip online", "Do nothing", "Kick people from the group chat", "Set privacy settings on your social media accounts"],
    answer: "Set privacy settings on your social media accounts"
  }
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const quizElement = document.getElementById("quiz");
const emailForm = document.getElementById("email-form");
const submitEmailButton = document.getElementById("submit-email");

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
    showEmailForm();
  }
}

function showEmailForm() {
  quizElement.style.display = "none";
  emailForm.style.display = "block";
}

submitEmailButton.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const subject = "Your Quiz Score";
  const body = `Thank you for taking the CYBERBULLYING BASICS quiz! Your score is: ${score}/${quizData.length}.\n\nKind regards,\nAditya Ahuja,\nHead of Anti Cyberbullying Campaign`;

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  alert('Thank you for taking the CYBERBULLYING BASICS quiz! Your score has been sent to your email.');
});

showQuestion();
