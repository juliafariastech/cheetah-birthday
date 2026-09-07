const targetDate = new Date('2026-09-09T00:00:00+10:00');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date();
    const diff = Math.max(targetDate.getTime() - now.getTime(), 0);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

let typewriterStarted = false;

function startTypewriter() {
    const letter = document.getElementById('typed-letter');
    if (!letter || typewriterStarted) return;

    typewriterStarted = true;
    const message = letter.textContent.trim();
    letter.textContent = '';

    let characterIndex = 0;
    const typeNextCharacter = () => {
        letter.textContent += message[characterIndex];
        characterIndex += 1;

        if (characterIndex < message.length) {
            setTimeout(typeNextCharacter, 28);
        }
    };

    typeNextCharacter();
}
