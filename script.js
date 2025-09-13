const buttons = document.querySelectorAll('#btn-dc-id, #btn-ig-id, #btn-gh-id');
const audio = new Audio('buttonSound.wav');
const cooldown = 500;
let lastPlayed = 0;

buttons.forEach(button => {
  button.addEventListener('mouseenter', () => {
    const now = Date.now();
    if (now - lastPlayed >= cooldown) {
      audio.currentTime = 0;
      audio.play();
      lastPlayed = now;
    }
  });
});
