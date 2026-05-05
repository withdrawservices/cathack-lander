// hey papis

document.body.classList.add("enter-locked");

const enterScreen = document.getElementById("enterScreen");
const enterButton = document.getElementById("enterButton");
const enterSound = document.getElementById("enterSound");

enterButton.addEventListener("click", async () => {
  try {
    enterSound.currentTime = 0;
    await enterSound.play();
  } catch (err) {
    console.log("Sound could not play:", err);
  }

  enterScreen.classList.add("hidden");
  document.body.classList.remove("enter-locked");

  setTimeout(() => {
    enterScreen.remove();
  }, 650);
});
