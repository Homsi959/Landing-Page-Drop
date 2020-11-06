"use strict";

var sliderText__tapeEl = document.querySelector(".slider-text__tape");
var sliderText__switch1El = document.querySelector(".slider-text__switch-1");
var sliderText__switch2El = document.querySelector(".slider-text__switch-2");
var sliderText__switch3El = document.querySelector(".slider-text__switch-3");
var sliderText__switch4El = document.querySelector(".slider-text__switch-4");
var sliderText__switch5El = document.querySelector(".slider-text__switch-5");
sliderText__switch1El.addEventListener('click', function () {
  sliderText__tapeEl.style.transition = "1s";
  sliderText__tapeEl.style.marginLeft = "0px";
});
sliderText__switch2El.addEventListener('click', function () {
  sliderText__tapeEl.style.transition = "1s";
  sliderText__tapeEl.style.marginLeft = "-550px";
});
sliderText__switch3El.addEventListener('click', function () {
  sliderText__tapeEl.style.transition = "1s";
  sliderText__tapeEl.style.marginLeft = "-1100px";
});
sliderText__switch4El.addEventListener('click', function () {
  sliderText__tapeEl.style.transition = "1s";
  sliderText__tapeEl.style.marginLeft = "-1650px";
});
sliderText__switch5El.addEventListener('click', function () {
  sliderText__tapeEl.style.transition = "1s";
  sliderText__tapeEl.style.marginLeft = "-2200px";
});