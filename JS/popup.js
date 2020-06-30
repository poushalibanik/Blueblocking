//create array from HTML collection
let buttonArray = Array.from(document.getElementsByTagName("button"));
//loop over each element in buttonArray
buttonArray.forEach((element) => {
  //create event event listener for each element in buttonArray
  element.onclick = function (e) {
    //get classname from passed in element
    const colorClass = e.target.className;
    //
    // chrome extension language
    //
    //query chrome for active tab and current window
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      //execute code on tab[0]
      //code is written as json directly into object
      chrome.tabs.executeScript(tabs[0].id, {
        code:
          'document.getElementById("overlay").className = "' +
          colorClass +
          '";',
      });
    });
  };
});
