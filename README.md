# linkedin_extension
This is a simple Chrome extension that automatically sends connection requests to LinkedIn search results. The extension works by injecting a content script into LinkedIn search result pages and then automatically sending connection requests to the profiles that appear in the search results.

#Getting Started
To get started, simply download the source code and load the extension into your browser:

Clone or download the source code from the repository.
Open Google Chrome and go to the extensions settings page (chrome://extensions/).
Enable developer mode by clicking the toggle switch in the top right corner.
Click the "Load unpacked" button in the top left corner and select the LinkedIn-Connector-Extension folder that you downloaded.
The extension is now installed and ready to use.
How to Use
To use the extension, simply go to the LinkedIn search results page for the search you want to perform. Once the page has loaded, click the "Connect" button in the extension popup. The extension will then automatically send connection requests to the profiles that appear in the search results. The number of connection requests sent will be displayed in the popup.

#Architecture
The extension consists of several components:

manifest.json: This file defines the extension and its properties, including the content script that is injected into LinkedIn search result pages.
background.js: This file is the background script for the extension and handles messages sent between the content script and the popup.
popup.html: This file defines the popup window that appears when the extension icon is clicked.
popup.js: This file contains the JavaScript code that runs when the popup is opened.
content.js: This file is the content script that is injected into LinkedIn search result pages and sends connection requests.
The extension follows the standard Chrome extension architecture of using a background script to handle communication between the content script and the popup. When the content script sends a message to the background script indicating that a connection request has been sent, the background script updates the connection count and sends a message to the popup to update the display.

#Code Discussion
The code for the extension is fairly simple and straightforward. When the "Connect" button is clicked in the popup, the sendConnectionRequest() function is called, which sends a message to the content script to initiate the connection request process. Once the content script has sent a connection request, it sends a message to the background script to update the connection count. The background script then sends a message to the popup to update the display.
