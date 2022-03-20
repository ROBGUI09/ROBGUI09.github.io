const atoz = 'abcdefghijklmnopqrstuvwxyz';
const chars = `${atoz + atoz.toUpperCase()}0123456789!@#$%&()`;

function genstr() {
  return chars.charAt(Math.floor(Math.random() * chars.length) + 1);
}

window.onload = async function () {
  let letter = 0;
  const text = 'loading';
  var tw = document.getElementById('tw');
  async function typeText() {
    if (letter < text.length) {
        tw.innerHTML += text.charAt(letter);
        letter++;
        const speed = Math.floor(Math.random() * 300) + 15;
        setTimeout(await typeText, speed);
    }
  }
  setTimeout(async () => {
    await typeText();
  }, 1000);
};
