/*
Given the name of a social, get the URL to the corresponding image.
*/
function socialNameUrl(socialName) {
    switch (socialName) {
      case "Google":
        return browser.extension.getURL("./icons/icon_google.png");
      case "Facebook":
        return browser.extension.getURL("./icons/facebook-icon.png");
      case "Instagram":
        return browser.extension.getURL("./icons/instagram-micro.png");
      case "Linkedin":
        return browser.extension.getURL("./icons/linkedin-icon.png");
      case "Youtube":
        return browser.extension.getURL("./icons/social_youtube.png");
      case "Twitter":
        return browser.extension.getURL("./icons/twitter-icon.png");
    }
  }
  

  // Add click event listener
  document.addEventListener("click", (e) => {

    if (e.target.classList.contains("social")) { // if the target is the social class load the social image
      var chosenSocial = e.target.textContent;
      var chosenSocialUrl = socialNameUrl(chosenSocial);
  
      browser.tabs.executeScript(null, { // execute the content-script.js
        file: "./content_scripts/content-script.js" ,
        file: "./background-scripts/jquery.min.js"
      });
  
      // send message
      var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
      gettingActiveTab.then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, {socialUrl: chosenSocialUrl});
      });
      
    }
    
    else if (e.target.classList.contains("clear")) { 
      browser.tabs.reload();
      window.close(); // close the window if the target is the class clear
      
      return;
    }
  });