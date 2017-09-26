/*
* removes every node in the document.body,
* then inserts the chosen social
* then removes itself as a listener
*/
function social(request, sender, sendResponse) {
  removeEverything();
  insertSocial(request.socialUrl);
}

/*
Remove every node under document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
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


}

function onChange() {
   // event handler for change input text
    var search = document.getElementById('search').value; // get the input value

    browser.runtime.sendMessage({'input' : inputData}).then(sendMessage);
}

// function addResponseToPage() {
//   // adds response ajax call to the page using jQuery
  
//   browser.runtime.onMessage.addListener(request => { // receive message
//     browser.runtime.onMessage.addListener(social);
//     console.log(request.greeting);
//     return Promise.resolve({response: "Hi from content script"});
//   });
// }
////

// function handleResponse(message) {
//   console.log('background script sent a response: ${message.response}');
//   browser.runtime.onMessage(social); // background script sent a response

// }

// function handleError() {
//   console.log('Error: ${error}');
// }

function sendMessage(e) {
  var data = document.getElementById('search-input').value;

  var sending = browser.runtime.sendMessage({'social': data});
  sending.then(handleResponse, handleError);
}

window.addEventListener("click", sendMessage);

browser.runtime.onMessage.addListener(social);

addInput();
onChange();
// addResponseToPage();
