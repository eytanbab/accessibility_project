document.addEventListener('DOMContentLoaded', function () {
  var increaseFontButton = document.getElementById('increase-font');
  var decreaseFontButton = document.getElementById('decrease-font');
  var resetFontButton = document.getElementById('reset-font');

  increaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) + 1 + 'px';",
      });
    });
  });

  decreaseFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = parseInt(window.getComputedStyle(document.body).fontSize) - 1 + 'px';",
      });
    });
  });

  resetFontButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "document.body.style.fontSize = '';",
      });
    });
  });
});
