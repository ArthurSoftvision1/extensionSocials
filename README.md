# Socials

**This add-on injects JavaScript into web pages. The `addons.mozilla.org` domain disallows this operation, so this add-on will not work properly when it's run on pages in the `addons.mozilla.org` domain.**

## What it does ##

The extension includes:

* a browser action with a popup including HTML, CSS, and JS
* a content script
* six images, each of a different social, packaged as web accessible resources

When the user clicks the browser action button, the popup is shown, enabling
the user to choose one of six socials.

When the content script receives this message, it replaces the current page
content with an image of the chosen social.

When the user clicks the reset button, the page reloads, and reverts to its original form.

## What it shows ##

* write a browser action with a popup
* give the popup style and behavior using CSS and JS
* inject a content script programmatically using `tabs.executeScript()`
* send a message from the main extension to a content script
* use web accessible resources to enable web pages to load packaged content
* reload web pages