// here we receive the answer from background script
function social(request, sender, sendResponse) {
  
  var backgroundAnswer = document.getElementById("results");

  backgroundAnswer.textContent = request.answerToContent; // put the answer in results ID
}


function addInput() {
  // adds input text to the page

  var list = document.querySelector('body');
  var input = document.createElement('input'); // creates input
  input.style.margin = "20px";

  input.setAttribute("id", "search-input");
  list.appendChild(input);
  var value = document.getElementById('search-input').value;
  var button = document.createElement('button');

  button.setAttribute("id", "button");
  list.appendChild(button);

  var p = document.createElement('p');
  p.textContent = 'Ajax';
  p.style.margin = "0";

  var buttonText = document.querySelector('#button');
  buttonText.appendChild(p);

  var resultsContainer = document.createElement('div');
  resultsContainer.setAttribute("id", "results")
  list.appendChild(resultsContainer);
  addEvents(); // call add events function
}

function sendMessage() {
  var data = document.getElementById('search-input').value; // get the input value
  var sending = browser.runtime.sendMessage({ msgToBackground: data }); // send message to background-script
}

addInput();

function addEvents() {
  var getButton = document.getElementById('button'); // get button ID
  getButton.addEventListener("click", sendMessage); // add click event listener and call sendMessage function
}

var getDiv = document.getElementById('results');
getDiv.style.background = "red";
getDiv.style.color = "white";
getDiv.style.width = "268px";
getDiv.style.height = "105px";

browser.runtime.onMessage.addListener(social); // call social function




