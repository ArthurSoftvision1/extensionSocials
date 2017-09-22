function searchName() {
    
    $(document).ready(function(){
        $("#button").click(function(){

            var search = $('#search').val();
        
            $.ajax({
                type: 'GET',
                url: "http://carcompanion.16mb.com/backend/script.php?q=" + search, 
                success: function(data){
           
                $("#results").text(data);
            }});
        });
    });

}

// add send and receive message mechanism
"use strict";

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToTabs(tabs) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {greeting: "Hi from background script"}
    ).then(response => {
      console.log("Message from the content script:");
      console.log(response.response);
    }).catch(onError);
  }
}

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({
    currentWindow: true,
    active: true
  }).then(sendMessageToTabs).catch(onError);
});