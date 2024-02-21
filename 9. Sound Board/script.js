const soundButtonNames = [
  "disclaimer",
  "femaleghost",
  "horror",
  "ironman",
  "kingkong",
  "suddenGhost",
  "transformers",
];

soundButtonNames.forEach((names) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = names;
  btn.addEventListener("click", () => {
    stopPlaying();
    document.getElementById(names).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopPlaying() {
  soundButtonNames.forEach((sound) => {
    const btn = document.getElementById(sound);
    btn.pause();
    btn.currentTime = 0;
  });
}
