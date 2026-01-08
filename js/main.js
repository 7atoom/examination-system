var logoutBtn = document.querySelector(".logout-button");
var startExam = document.querySelector(".start-button");
var userNameDisplay = document.getElementById("user-name");
var loginRegisterSection = document.querySelector(".login-register");
console.log("Logout button found:", logoutBtn);
console.log("Start Exam button found:", startExam);
console.log("User Name Display found:", userNameDisplay);



// Check if user is logged in, redirect to log in if not (use correct path from root)
// Auth.requireLogin("pages/login.html");

// handle exam complete flag with false before starting new exam
sessionStorage.setItem("examCompleted", "false");

// handle back button navigation
window.addEventListener("pageshow", function () {
  if(!Auth.isLoggedIn()) {
    loginRegisterSection.style.display = "flex";
    logoutBtn.style.display = "none";
  }else {
    loginRegisterSection.style.display = "none";
    logoutBtn.style.display = "block";
  }
});

startExam.addEventListener("click", function () {
  window.location.href = "pages/exam.html";
});

logoutBtn.addEventListener("click", function () {
  Auth.logout();
  window.location.reload();
});

var user = Auth.getCurrentUser();
console.log(user);

if (user && user.firstName) {
  userNameDisplay.textContent = user.firstName + " " + user.lastName;
} else {
  userNameDisplay.textContent = "Guest";
}
