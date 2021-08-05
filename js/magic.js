// ** //

// Title
const headTitle = (document.title = "Magic 8 Ball");

// Background Color
const bgColor = (document.body.style.backgroundColor = "#677E98");

// H1 Text
const mainTitle = document.createElement("h1");
document.body.appendChild(mainTitle);
mainTitle.innerHTML = "DETERMINE YOUR FUTURE!";

mainTitle.style.fontSize = "3.5rem";
mainTitle.style.color = "white";
mainTitle.style.letterSpacing = "5px";
mainTitle.style.textAlign = "center";
mainTitle.style.fontFamily = "Creepster";

// Creating form for inputs
const magicForm = document.createElement("form");
document.body.appendChild(magicForm);

// adding parent div
const parentDiv = document.createElement("div");
document.body.appendChild(parentDiv);

parentDiv.style.textAlign = "center";
parentDiv.style.marginTop = "4rem";

// Adding input
let questionInput = document.createElement("input");
parentDiv.appendChild(questionInput);
questionInput.placeholder = "Enter a question";

questionInput.style.padding = "0.5rem";
questionInput.style.borderRadius = "0.5rem";

// Adding button to run function
let askButton = document.createElement("button");
parentDiv.appendChild(askButton);
askButton.innerHTML = "Ask Me!";

askButton.style.cursor = "pointer";
askButton.style.backgroundColor = "#609F64";
askButton.style.borderRadius = "0.5rem";
askButton.style.textDecoration = "none";
askButton.style.padding = "0.5rem";
askButton.style.marginLeft = "0.5rem";
askButton.style.fontFamily = 'Creepster';

let magicAnswers = [
  "It is certain 👍🏻",
  "It is decidedly so",
  "Without a doubt ☺️",
  "Yes, definitely ☺️",
  "You may rely on it 👍🏻",
  "As I see it, yes! 🙌🏻",
  "Most likely",
  "Yes! 🙌🏻",
  "Signs point to yes!",
  "Reply hazy, please try again 😶‍🌫️",
  "Ask again later",
  "Better not tell you now 🤫",
  "Cannot predict now 🤕",
  "Concentrate and ask again",
  "My reply is no ☠️",
  "My sources say no 👎🏻",
  "Outlook does not look too good",
  "Very doubtful",
];

const askFunction = function ask() {
  if (questionInput.value === "") {
    alert("Please enter a question");
  } else {
    showAnswer.innerText =
      magicAnswers[Math.floor(Math.random() * magicAnswers.length)];
    toggle();
  }
};

askButton.addEventListener("click", askFunction);

// Adding refresh button
let refreshButton = document.createElement("button");
document.body.appendChild(refreshButton);
refreshButton.innerHTML = "Refresh";

refreshButton.style.cursor = "pointer";
refreshButton.style.backgroundColor = "#A95E56";
refreshButton.style.borderRadius = "0.5rem";
refreshButton.style.textDecoration = "none";
refreshButton.style.padding = "0.5rem";
refreshButton.style.marginLeft = "0.5rem";
refreshButton.style.display = "none";
refreshButton.style.color = "white";
refreshButton.style.fontFamily = 'Creepster';

function refreshQuestion() {
  const value = questionInput.value;
  questionInput.value = "";
  toggle();
}

refreshButton.addEventListener("click", refreshQuestion);

// div for showing the answers
const showAnswer = document.createElement("div");
document.body.appendChild(showAnswer);
showAnswer.setAttribute("id", "showMagicAnswer");

showAnswer.style.marginTop = "2rem";
showAnswer.style.textAlign = "center";
showAnswer.style.fontSize = "2rem";
showAnswer.style.letterSpacing = "0.1rem";
showAnswer.style.color = "white";
showAnswer.style.fontFamily = "Creepster";

function toggle() {
  if (parentDiv.style.display === "none") {
    parentDiv.style.display = "block";
    showAnswer.style.display = "none";
    refreshButton.style.display = "none";
  } else {
    parentDiv.style.display = "none";
    showAnswer.style.display = "block";
    refreshButton.style.display = "block";
  }
}
