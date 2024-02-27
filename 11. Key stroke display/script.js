const keys = document.querySelector(".key");
window.addEventListener("keydown", (event) => {
  keys.innerHTML = `${event.key === " " ? "Space" : event.code}`;
  keys.classList.add("showKeysUp");
  setTimeout(() => {
    keys.classList.remove("showKeysUp");
  }, 400);
  console.log(event);
});
