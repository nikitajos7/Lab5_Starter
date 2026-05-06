// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImg = document.getElementById('face') || document.querySelector('main img') || document.querySelector('img');

  if (!voiceSelect || !textArea || !talkButton || !faceImg) {
    console.error('Missing required explore.html element:', {
      voiceSelect,
      textArea,
      talkButton,
      faceImg
    });
    return;
  }

  let voices = [];
  const closedMouthSrc = faceImg.src;
  const closedMouthAlt = faceImg.alt;

  function loadVoices() {
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textArea.value.trim();

    if (text === '') {
      return;
    }

    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    if (voices.length > 0) {
      utterance.voice = voices[Number(voiceSelect.value)];
    }

    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Open mouth face';
    };

    utterance.onend = () => {
      faceImg.src = closedMouthSrc;
      faceImg.alt = closedMouthAlt;
    };

    utterance.onerror = () => {
      faceImg.src = closedMouthSrc;
      faceImg.alt = closedMouthAlt;
    };

    speechSynthesis.speak(utterance);
  });
}