let loadingtext = document.querySelector('.loading-text');
let bg = document.querySelector('.bg');
var load = 0;

let timming = setInterval(blurring, 20);

function blurring() {
    load++;
    if (load == 100) { clearInterval(timming) }
    loadingtext.innerText = `${load}%`;
    loadingtext.style.opacity = scale(load, 0, 100, 1, 0);
    
    loadingtext.style.background = `rgba(0,0,0,${scale(load, 0, 100, 0.5, 1)})`;
    bg.style.filter = `blur(${scale(load, 0, 100, 10, 0)}px)`;
}



function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}