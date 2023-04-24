const inputText = document.getElementById("inputText");
const fontSize = document.getElementById("fontSize");
const fontColor = document.getElementById("fontColor");
const bgColor = document.getElementById("bgColor");
const speed = document.getElementById("speed");
const playButton = document.getElementById("playButton");
const display = document.getElementById("display");

playButton.addEventListener("click", () => {
  const words = inputText.value.split(/\s+/);
  const interval = 60000 / speed.value;
  let index = 0;

  display.style.fontSize = `${fontSize.value}px`;
  display.style.color = fontColor.value;
  document.body.style.backgroundColor = bgColor.value;

  function displayWord() {
    if (index < words.length) {
      display.textContent = words[index];
      index++;
      setTimeout(displayWord, interval);
    } else {
      display.textContent = "";
    }
  }

  displayWord();
});
