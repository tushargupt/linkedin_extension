(function () {
  const buttons = document.querySelectorAll('button');
  const connectButtons = [];

  for (const button of buttons) {
    if (button.textContent && button.textContent.trim() == 'Connect') { 
      connectButtons.push(button);
    }
  } 
  
  // Loop through each Connect button
  for (let i = 0; i < connectButtons.length; i++) {
    const button = connectButtons[i];
  
    // Check if the button has already been clicked
    if (!button.classList.contains('linkedInConnectorClicked')) {
      // Add a random delay between 5-10 seconds
      const delay = Math.floor(Math.random() * 6) + 5;
  
      button.addEventListener('click', () => {
        chrome.runtime.sendMessage({type: 'incrementConnectCount'});
      });
  
      setTimeout(() => {
        // Click the Connect button
        button.click();
  
        // Wait for the note field to appear (it may take a moment to load)
        const intervalId = setInterval(() => {
          const noteField = document.querySelector('[aria-label="Add a note"]');
          if (noteField) {
            // Fill out the note field with your personalized message
            // noteField.value = 'Hello, I came across your profile and would love to connect with you to discuss potential opportunities.';
  
            // Click the "Send" button to send the connection request
            const sendButton = document.querySelector('[aria-label="Send now"]');
            if (sendButton) {
              sendButton.click();
              sendButton.classList.add('linkedInConnectorClicked');
              chrome.runtime.sendMessage({action: "countUpdate"});
            }
  
            // Clear the interval so we don't keep checking for the note field
            clearInterval(intervalId);
          }
        }, 1500);
        // Check every 0.5 seconds if the note field has loaded
      }, delay * 2500);
      button.classList.add('linkedInConnectorClicked');
    }
  }

})();