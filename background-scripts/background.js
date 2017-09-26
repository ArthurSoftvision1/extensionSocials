function searchName(sendResponse) {
    
    // $(document).ready(function(){
        // $("#button").click(function(){
            var inputData = sendResponse.input;
        
            $.ajax({
                type: 'GET',
                url: "http://carcompanion.16mb.com/backend/script.php?q=" + inputData, 
                success: function(getData){
                  ;
                  


                  browser.tabs.executeScript(null, {file:"./content_scripts/content-script.js"})
                  
                  var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
                  gettingActiveTab.then((tabs) => {
                    browser.runtime.sendMessage({'social': getData.results});
                  });

                  // $('#results').text(getData);
            
            }});
  function onError(error) {
    console.error(`Error: ${error}`);
  }

}

browser.runtime.onMessage.addListener(searchName); // receive message