const progressBar = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const one = document.querySelectorAll('.one');

let currentStage = 1;



nextBtn.addEventListener('click', () => { 
    currentStage++;
    if (currentStage > circles.length) {
        currentStage=circles.length
    }
   
   activeCircles()
})
prevBtn.addEventListener('click', () => { 
    currentStage--;
    if (currentStage < 1) {
        currentStage=1
    }
    
    activeCircles()
})



function activeCircles() {
    circles.forEach((circles, idx) => {
        if (idx < currentStage) {
            circles.classList.add('active')
        }
        else {
            circles.classList.remove('active')
        }
    })
    one.forEach((one, idx) => {
        if (idx ===  currentStage-1) {
            one.classList.add('active-para')
        }
        else {
            one.classList.remove('active-para')
        }
    })
    let actives = document.querySelectorAll('.active');
    progressBar.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
    if (currentStage === 1) {
        prevBtn.disabled = true;
    }
    else if(currentStage===circles.length){
        nextBtn.disabled = true;
    }
    else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}