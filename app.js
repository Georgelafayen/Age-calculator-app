const form = document.querySelector("form");
const years = document.querySelector(".years");
const months = document.querySelector(".months");
const days = document.querySelector(".days");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);

  inputDay = formData.get("day");
  inputMonth = formData.get("month");
  inputYear = formData.get("year");

  const y = new Date();
  let currentYear = y.getFullYear();
  const m = new Date();
  let currentMonth = m.getMonth() + 1;
  const d = new Date();
  let currentDay = d.getDate();

  let isValidDay = false;
  let isValidMonth = false;
  let isValidYear = false;

  //Input validations

  if (inputDay == "") {
    $(".day").text("This field is required");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else if (inputDay > 31 || inputDay < 1) {
    $(".day").text("Must be a valid day");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else if (inputDay > 30 && (inputMonth == 4 || inputMonth == 6 || inputMonth == 11 || inputMonth == 12)) {
    $(".day").text("Must be a valid day");
    $("label").addClass("errorLAbel");
    $("input").addClass("errorTextBox");
  } else if (inputMonth == 2 && inputDay > 28) {
    $(".day").text("Must be a valid day");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else{
    $(".day").text("");
    isValidDay = true;
  }

  if (inputMonth == "") {
    $(".month").text("This field is required");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else if (inputMonth > 12 || inputMonth < 1) {
    $(".month").text("Must be a valid month");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else{
    $(".month").text("");
    isValidMonth = true;
  }

  if (inputYear == "") {
    $(".year").text("This field is required");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else if (inputYear > currentYear) {
    $(".year").text("Must be in the past");
    $("label").addClass("errorLabel");
    $("input").addClass("errorTextBox");
  } else {
    $(".year").text("");
    isValidYear = true;
  } 

  //Date logics

  let ageYears = currentYear - inputYear;
  
  let ageMonths;

  if(currentMonth > inputMonth){
    ageMonths = currentMonth - inputMonth; 
  } else if (currentMonth < inputMonth){
    ageYears = ageYears - 1;
    currentMonth += 12;
    ageMonths = currentMonth - inputMonth;
  } else if (inputMonth == currentMonth){
    ageMonths = 0;
  }

  let ageDays;

  if(currentDay < inputDay){
    ageMonths = ageMonths - 1;
    currentDay += 31;
    ageDays = currentDay - inputDay;
  } else {
    ageDays = currentDay - inputDay;
  }

  if(isValidDay && isValidMonth && isValidYear){
    $("label").removeClass("errorLabel");
    $("input").removeClass("errorTextBox");
    animateCounter(years, ageYears);
    animateCounter(months, ageMonths);
    animateCounter(days, ageDays);
  }

});

function animateCounter(element, finalValue) {
  let currentValue = 0;
  const step = 1;
  const interval = 20;

  const timer = setInterval(() => {
    if (currentValue >= finalValue) {
      clearInterval(timer);
    }

    element.innerHTML = currentValue;

    currentValue += step;
  }, interval);
}





