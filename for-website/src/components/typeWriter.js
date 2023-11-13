import React from 'react';
const typedTextSpan = document.querySelector("#name");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Olivi", "Livia Earl"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 200; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } 
        else {
            cursorSpan.classList.remove("typing");
            // if (textArray[textArrayIndex].length == 10) {
            //     delay(5000);
            // }
  	        setTimeout(erase, newTextDelay);
        }
}

function erase() {
	if (charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } 
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex=0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };