let count = 0;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "countUpdate") {
    count++;
    chrome.runtime.sendMessage({action: "updatePopupCount", count: count});
  }
});

// Listen for requests for the count
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getCount") {
    sendResponse(count);
  }
});
