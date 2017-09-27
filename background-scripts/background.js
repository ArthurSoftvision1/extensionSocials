function searchName(request, sender, sendResponse) {
  var answerFromContent = request.msgToBackground; // receive the message with input value

  var url = "http://carcompanion.16mb.com/backend/script.php?q=";

  $.getJSON(url+answerFromContent, function(data) {

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});

    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {answerToContent : data.results}); // send message with answer to content script
    });
  })
}

browser.runtime.onMessage.addListener(searchName) // call the searchName function


