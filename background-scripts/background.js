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



  // add send and receive message mechanism

  function onError(error) {
    console.error(`Error: ${error}`);
  }

  function sendMessageToTabs(tabs) {
    for (let tab of tabs) {
      browser.tabs.sendMessage(
        tab.id,
        browser.tabs.sendMessage.addListener() // send message to the content script
      ).then(response => {
        browser.tabs.onMessage.addListener(); // here we receive the message from content
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

}