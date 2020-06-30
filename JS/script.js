/* eslint-disable func-style */
/* eslint-disable no-undef */
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
document.body.appendChild(overlay);

function defaultColor(result) {
  const color = result.color || 'warmOrange';
  document.getElementById('overlay').setAttribute('class', color);
}

function defaultOpacity(result) {
  const opacity = result.opacity || '0.2';
  document.getElementById('overlay').style.opacity = opacity;
}

chrome.storage.sync.get(['color'], defaultColor);
chrome.storage.sync.get(['opacity'], defaultOpacity);
