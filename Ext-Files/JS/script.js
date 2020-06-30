/* eslint-disable func-style */
/* eslint-disable no-undef */
const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
document.body.appendChild(overlay);

const settings = function defaultSettings(result) {
  const color = result.color || 'warmOrange';
  const opacity = result.opacity || '0.2';
  overlay.className = color;
  overlay.style.opacity = opacity;
  document.getElementById('overlay').setAttribute('class', color);
};

chrome.storage.sync.get(['color', 'opacity'], settings);
