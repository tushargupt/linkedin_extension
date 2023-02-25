document.addEventListener('DOMContentLoaded', function () {
  const connectButton = document.getElementById('connectButton');
  const initialMessage = document.getElementById('initialMessage');
  const countContainer = document.getElementById('countContainer');
  const count = document.getElementById('count');

  let connectionCount = 0;

  connectButton.addEventListener('click', function () {
    initialMessage.style.display = 'none';
    countContainer.style.display = 'block';
    connectionCount++;
    count.textContent = connectionCount;
    sendConnectionRequest();
  });

  // Send a message to the background script to update the count
  function sendConnectionRequest() {
    chrome.runtime.sendMessage({ action: "sendConnectionRequest" });
  }

  // Listen for updates to the count
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "updatePopupCount") {
      connectionCount = request.count;
      count.textContent = connectionCount;
    }
  });
});
