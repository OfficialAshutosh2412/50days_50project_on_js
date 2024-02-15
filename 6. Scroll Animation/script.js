const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', toggleBoxes);
function toggleBoxes() {
    const triggeredHeight = window.innerHeight/5*4 ;
    console.log(triggeredHeight);
    console.log("--------------------");
    boxes.forEach(box => {
        const postionTop = box.getBoundingClientRect().top
        console.log(postionTop);
        if (postionTop < triggeredHeight) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    })
}