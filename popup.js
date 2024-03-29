/**
 * Executes the code inside the event listener when the DOM content is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  // Gets the HTML button element with the ID "bold-font" and assigns it to a variable.
  var boldFontButton = document.getElementById('bold-font');

  // Gets the HTML button element with the ID "change-font" and assigns it to a variable.
  var changeFontButton = document.getElementById('change-font');

  // Gets the HTML button element with the ID "increase-font" and assigns it to a variable.
  var increaseFontButton = document.getElementById('increase-font');

  // Gets the HTML button element with the ID "decrease-font" and assigns it to a variable.
  var decreaseFontButton = document.getElementById('decrease-font');

  // Gets the HTML button element with the ID "reset-font" and assigns it to a variable.
  var resetFontButton = document.getElementById('reset-font');

  // Gets the HTML button element with the ID "increase-contrast" and assigns it to a variable.
  var increaseContrastButton = document.getElementById('increase-contrast');

  // Gets the HTML button element with the ID "reset-contrast" and assigns it to a variable.
  var resetContrastButton = document.getElementById('reset-contrast');

  // Gets the HTML button element with the ID "grayscale" and assigns it to a variable.
  var grayscaleButton = document.getElementById('grayscale');

  // Gets the HTML button element with the ID "reset-grayscale" and assigns it to a variable.
  var resetGrayscaleButton = document.getElementById('reset-grayscale');

  // Gets the HTML button element with the ID "speak" and assigns it to a variable.
  var speakButton = document.getElementById('speak');

  // Gets the HTML button element with the ID "stop-speak" and assigns it to a variable.
  var stopSpeakButton = document.getElementById('stop-speak');

  // Adds a click event listener to the "bold-font" button that makes the font of the active tab's body bold.
  boldFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontWeight = 'bold';",
      });
    });
  });

  // Adds a click event listener to the "change-font" button that changes the font to Arial.
  changeFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontFamily = 'Arial';",
      });
    });
  });

  // Adds a click event listener to the "increase-font" button that increases the font size of the active tab's body by 2px.
  increaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) + 2 + 'px';",
      });
    });
  });

  // Adds a click event listener to the "decrease-font" button that decreases the font size of the active tab's body by 2px.
  decreaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) - 2 + 'px';",
      });
    });
  });

  // Adds a click event listener to the "reset-font" button that resets the font size of the active tab's body to its default size.
  resetFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = ''; document.body.style.fontWeight = ''; document.body.style.fontFamily = '';",
      });
    });
  });

  // Adds a click event listener to the "increase-contrast" button that increases the contrast of the active tab's body.
  increaseContrastButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'contrast(130%)';", // Increase contrast
      });
    });
  });

  // Adds a click event listener to the "reset-contrast" button that resets the contrast of the active tab's body to its default.
  resetContrastButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'contrast(100%)';", // Reset contrast
      });
    });
  });

  // Adds a click event listener to the "grayscale" button that makes the active tab's body grayscale.
  grayscaleButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'grayscale(1) contrast(130%)';", // Add grayscale
      });
    });
  });

  // Adds a click event listener to the "reset-grayscale" button that resets the grayscale filter of the active tab's body to its default.
  resetGrayscaleButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'grayscale(0%)';", // Reset grayscale
      });
    });
  });

  // Adds a click event listener to the "speak" button that reads out loud the selected text in the active tab's body.
  speakButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: `
        var selection = window.getSelection().toString();
        if (selection) {
          var speechSynthesisUtterance = new SpeechSynthesisUtterance();
          speechSynthesisUtterance.text = selection;
          speechSynthesisUtterance.lang = 'he-IL'; // Set language to Hebrew (Israel)
          speechSynthesis.speak(speechSynthesisUtterance);
        }
      `,
      });
    });
  });

  // Adds a click event listener to the "stop-speak" button that stops the text-to-speech in the active tab's body.
  stopSpeakButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'speechSynthesis.cancel();',
      });
    });
  });
});
