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

  var list = document.querySelector('#input-section');
  var input = document.createElement('input'); // creates input
  input.setAttribute("id", "search-input");
  list.appendChild(input);
  
  var value = document.getElementById('search-input').value;
}

// function onChange() {
//    // event handler for change input text

//       var search = document.getElementById('search').value;


//       var xhttp = new XMLHttpRequest(); // create the xhttp object
//       xhttp.onreadystatechange = function() { // check the state change
//           if (this.readyState === 4 && this.status === 200) {
//               // check the state and the status
//               let data = JSON.parse(this.responseText);
//               document.getElementById('results').textContent = data.results; // display the http response using innerHTML function 
//               // document.getElementById('results').appendChild(document.createTextNode(data.results)); // display the http response using innerHTML function
//           };
//       };

//       xhttp.open("GET", "http://carcompanion.16mb.com/backend/script.php?q=" + search, true); // open 
//       xhttp.send(); // send

  
// }

// document.getElementById('button').addEventListener('click', onChange, false);

// add send message mechanism

function addResponseToPage() {
  // adds response ajax call to the page using jQuery
  "use strict";
  
  browser.runtime.onMessage.addListener(request => {
    console.log("Message from the background script:");
    console.log(request.greeting);
    return Promise.resolve({response: "Hi from content script"});
  });

}

function insertSocial(socialUrl) { // here we insert the social image
  var socialImage = document.createElement("img"); // create img
  socialImage.setAttribute("src", socialUrl);
  socialImage.setAttribute("style", "width: 100px"); // set the width
  socialImage.setAttribute("style", "height: 100px"); // set the height
  document.body.appendChild(socialImage); // append the social image
}


browser.runtime.onMessage.addListener(social); // add social listener function