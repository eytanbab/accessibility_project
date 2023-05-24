/**
 * Executes the code inside the event listener when the DOM content is loaded.
 */
document.addEventListener('DOMContentLoaded', function () {
  /**
   * Gets the HTML button element with the ID "increase-font" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var increaseFontButton = document.getElementById('increase-font');

  /**
   * Gets the HTML button element with the ID "decrease-font" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var decreaseFontButton = document.getElementById('decrease-font');

  /**
   * Gets the HTML button element with the ID "reset-font" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var resetFontButton = document.getElementById('reset-font');

  /**
   * Gets the HTML button element with the ID "increase-contrast" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var increaseContrastButton = document.getElementById('increase-contrast');

  /**
   * Gets the HTML button element with the ID "reset-contrast" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var resetContrastButton = document.getElementById('reset-contrast');

  /**
   * Gets the HTML button element with the ID "grayscale" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var Grayscale = document.getElementById('grayscale');

  /**
   * Gets the HTML button element with the ID "reset-grayscale" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var resetGrayscale = document.getElementById('reset-grayscale');

  /**
   * Gets the HTML button element with the ID "speak" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var speakButton = document.getElementById('speak');

  /**
   * Gets the HTML button element with the ID "stop-speak" and assigns it to a variable.
   * @type {HTMLElement}
   */
  var stopSpeakButton = document.getElementById('stop-speak');

  /**
   * Adds a click event listener to the "increase-font" button that increases the font size of the active tab's body by 2px.
   */
  increaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) + 2 + 'px';",
      });
    });
  });

  /**
   * Adds a click event listener to the "decrease-font" button that decreases the font size of the active tab's body by 2px.
   */
  decreaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) - 2 + 'px';",
      });
    });
  });

  /**
   * Adds a click event listener to the "reset-font" button that resets the font size of the active tab's body to its default size.
   */
  resetFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = '';",
      });
    });
  });

  /**
   * Adds a click event listener to the "reset-font" button that resets the font size of the active tab's body to its default size.
   */
  increaseContrastButton.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'contrast(150%)';", // increase contrast
      });
    });
  });

  /**
   * Adds a click event listener to the "reset-font" button that resets the font size of the active tab's body to its default size.
   */
  resetContrastButton.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'contrast(100%)';", // increase contrast
      });
    });
  });

  Grayscale.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'grayscale(1)';", // add grayscale
      });
    });
  });

  resetGrayscale.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.filter = 'grayscale(0%)';", // reset grayscale
      });
    });
  });

  speakButton.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'var speechSynthesisUtterance = new SpeechSynthesisUtterance(); speechSynthesisUtterance.text = document.body.innerText; speechSynthesis.speak(speechSynthesisUtterance);',
      });
    });
  });

  stopSpeakButton.addEventListener('click', function () {
    // new event listener
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: 'speechSynthesis.cancel();',
      });
    });
  });
});
