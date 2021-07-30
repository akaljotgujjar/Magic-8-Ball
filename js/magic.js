// ** //

// Title
const headTitle = (document.title = "Magic 8 Ball");

// Background Color
const bgColor = (document.body.style.backgroundColor = "#677E98");

// H1 Text
const mainTitle = document.createElement("h1");
document.body.appendChild(mainTitle);
mainTitle.innerHTML = "Welcome to Magic 8 Ball!";

mainTitle.style.fontSize = "3.5rem";
mainTitle.style.color = "white";
mainTitle.style.letterSpacing = "5px";
mainTitle.style.textAlign = "center";

// Adding inputs
const questionInput = document.createElement("input");
document.body.appendChild(questionInput);
questionInput.placeholder = "Enter a question";

questionInput.style.padding = "0.5rem";
questionInput.style.borderRadius = "0.5rem";

// Adding button to run function
const askButton = document.createElement("button");
document.body.appendChild(askButton);
askButton.innerHTML = "Ask Me!";

askButton.style.cursor = "pointer";
askButton.style.backgroundColor = "#609F64";
askButton.style.borderRadius = "0.5rem";
askButton.style.textDecoration = "none";
askButton.style.padding = "0.5rem";
askButton.style.marginLeft = "0.5rem";

// Adding refresh button
const refreshButton = document.createElement("button");
document.body.appendChild(refreshButton);
refreshButton.innerHTML = "Refresh";

refreshButton.addEventListener("click", function () {
  refreshQuestion();
});

refreshButton.style.cursor = "pointer";
refreshButton.style.backgroundColor = "#A95E56";
refreshButton.style.borderRadius = "0.5rem";
refreshButton.style.textDecoration = "none";
refreshButton.style.padding = "0.5rem";
refreshButton.style.marginLeft = "0.5rem";

function refreshQuestion() {
  const value = questionInput.value;
  questionInput.value = "";
}
