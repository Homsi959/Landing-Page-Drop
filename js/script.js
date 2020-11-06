const sliderText__tapeEl = document.querySelector(".slider-text__tape");

const sliderText__switch1El = document.querySelector(".slider-text__switch-1");
const sliderText__switch2El = document.querySelector(".slider-text__switch-2");
const sliderText__switch3El = document.querySelector(".slider-text__switch-3");
const sliderText__switch4El = document.querySelector(".slider-text__switch-4");
const sliderText__switch5El = document.querySelector(".slider-text__switch-5");

sliderText__switch1El.addEventListener('click', () => {
    sliderText__tapeEl.style.transition = "1s";
    sliderText__tapeEl.style.marginLeft = "0px";
})

sliderText__switch2El.addEventListener('click', () => {
    sliderText__tapeEl.style.transition = "1s";
    sliderText__tapeEl.style.marginLeft = "-550px";
})

sliderText__switch3El.addEventListener('click', () => {
    sliderText__tapeEl.style.transition = "1s";
    sliderText__tapeEl.style.marginLeft = "-1100px";
})

sliderText__switch4El.addEventListener('click', () => {
    sliderText__tapeEl.style.transition = "1s";
    sliderText__tapeEl.style.marginLeft = "-1650px";
})

sliderText__switch5El.addEventListener('click', () => {
    sliderText__tapeEl.style.transition = "1s";
    sliderText__tapeEl.style.marginLeft = "-2200px";
})