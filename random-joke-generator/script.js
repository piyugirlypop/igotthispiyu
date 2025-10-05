const API_URL = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single,twopart';

const elements = {
  joke: document.getElementById('joke'),
  loading: document.getElementById('loading'),
  getJokeBtn: document.getElementById('getJokeBtn'),
  copyBtn: document.getElementById('copyBtn'),
  toast: document.getElementById('toast'),
  emoji: document.getElementById('emoji'),
};

function setLoading(isLoading) {
  if (isLoading) {
    elements.joke.classList.add('hidden');
    elements.loading.hidden = false;
    elements.getJokeBtn.disabled = true;
    elements.copyBtn.disabled = true;
    popEmoji();
  } else {
    elements.loading.hidden = true;
    elements.joke.classList.remove('hidden');
    elements.getJokeBtn.disabled = false;
    elements.copyBtn.disabled = false;
  }
}

async function fetchJoke() {
  setLoading(true);
  try {
    const response = await fetch(API_URL, { cache: 'no-store' });
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();

    let text = '';
    if (data.type === 'single') {
      text = data.joke;
    } else if (data.type === 'twopart') {
      text = `${data.setup}\n\n${data.delivery}`;
    } else {
      text = 'Hmm, could not understand this joke type.';
    }

    elements.joke.textContent = text;
  } catch (err) {
    console.error(err);
    elements.joke.textContent = 'Failed to fetch a joke. Please try again.';
  } finally {
    setLoading(false);
  }
}

function popEmoji() {
  if (!elements.emoji) return;
  elements.emoji.classList.add('pop');
  setTimeout(() => elements.emoji.classList.remove('pop'), 600);
}

async function copyJoke() {
  const text = elements.joke.textContent?.trim();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    showToast('Copied to clipboard');
  } catch (err) {
    console.error('Copy failed', err);
    showToast('Copy failed');
  }
}

let toastTimer = null;
function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  requestAnimationFrame(() => {
    elements.toast.classList.add('show');
  });

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    elements.toast.classList.remove('show');
    setTimeout(() => (elements.toast.hidden = true), 250);
  }, 1600);
}

function init() {
  elements.getJokeBtn.addEventListener('click', fetchJoke);
  elements.copyBtn.addEventListener('click', copyJoke);

  // Fetch first joke on load
  fetchJoke();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
