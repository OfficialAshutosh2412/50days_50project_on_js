const btns = document.querySelectorAll(".btns");
const boxes = document.querySelector(".faq");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentNode.classList.toggle("active");
  });
});
