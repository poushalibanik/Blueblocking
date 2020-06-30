/* eslint-disable func-style */
/* eslint-disable func-names */
/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */

// create array from HTML collection
const buttonArray = Array.from(document.getElementsByTagName('button'));
// loop over each element in buttonArray
buttonArray.forEach((element) => {
  // create event event listener for each element in buttonArray
  element.onclick = function (e) {
    // get classname from passed in element
    const colorClass = e.target.className;
    chrome.storage.sync.set({ color: colorClass });
    //
    // chrome extension language
    //
    // query chrome for active tab and current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // execute code on tab[0]
      // code is written as json directly into object
      chrome.tabs.executeScript(tabs[0].id, {
        code: `document.getElementById("overlay").className = "${colorClass}";`,
      });
    });
  };
});

const slider = document.getElementById('opacityRange');

chrome.storage.sync.get(['opacity'], (result) => {
  slider.value = `${result.opacity * 100}`;
});

slider.oninput = function () {
  // use same callback overlay, but .style.opacity = slider.value / 100
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: `document.getElementById("overlay").style.opacity = "${slider.value / 100}";`,
    });
  });
};

function storageOpacity(sliderEl) {
  const opacityVal = `${sliderEl.value / 100}`;
  chrome.storage.sync.set({ opacity: opacityVal });
}

setInterval(storageOpacity, 2500, slider);
