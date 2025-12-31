var userNameDisplay = document.getElementById("user-name");
var backbutton = document.querySelector(".back-button");

var user = Auth.getCurrentUser();
console.log(user);

if (user && user.firstName) {
  userNameDisplay.textContent = user.firstName + " " + user.lastName;
} else {
  userNameDisplay.textContent = "Guest";
}

backbutton.addEventListener("click", function () {
  window.location.href = "../index.html";
});

// localStorage
const examResults = JSON.parse(localStorage.getItem("examResults"));

// see if theres values or not
if (examResults && examResults.totalQuestions) {
  //calc corect answers
  const totalCorrect =
    examResults.totalQuestions - examResults.wrongAnswers.length;

  // put wrong or right icon
  const correctIcon = document.querySelector(".examicon2"); // أيقونة الصح
  const wrongIcon = document.querySelector(".examicon"); // أيقونة الغلط
  const tryAgainDiv = document.querySelector(".try-again");

  if (totalCorrect >= 5) {
    correctIcon.style.display = "flex";
    wrongIcon.style.display = "none";
    tryAgainDiv.style.display = "none";
  } else {
    correctIcon.style.display = "none";
    wrongIcon.style.display = "flex";
    tryAgainDiv.style.display = "block";
  }
}

// see there's results
if (examResults) {
  // what div you will put in the values
  const scoreDiv = document.querySelector(
    ".score-container div:nth-child(1) h3"
  );
  const percentageDiv = document.querySelector(
    ".score-container div:nth-child(2) h3"
  );
  const gradeDiv = document.querySelector(
    ".score-container div:nth-child(3) h3"
  );
  const statusDiv = document.querySelector(
    ".score-container div:nth-child(4) h3"
  );

  // put values
  scoreDiv.textContent = `${examResults.score}/${examResults.totalQuestions}`;
  percentageDiv.textContent = `${examResults.percentage}%`;

  // calc grade
  let grade = "";
  if (examResults.percentage >= 90) grade = "A+";
  else if (examResults.percentage >= 80) grade = "A";
  else if (examResults.percentage >= 70) grade = "B";
  else if (examResults.percentage >= 60) grade = "C";
  else if (examResults.percentage >= 50) grade = "D";
  else grade = "F";

  gradeDiv.textContent = grade;

  // student status
  statusDiv.textContent = examResults.percentage >= 50 ? "Passed" : "Failed";
}

const correctDiv = document.querySelector(
  ".answers-contianer .correct-answers h3"
);
const wrongDiv = document.querySelector(".answers-contianer .wrong-answers h3");

const correctCount = examResults.correctAnswers.length; // right answer count
const wrongCount = examResults.wrongAnswers.length; // worng answer count

correctDiv.textContent = correctCount;
wrongDiv.textContent = wrongCount;
