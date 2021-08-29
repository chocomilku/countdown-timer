const timer = document.querySelector('.timer');
const description = document.querySelector('.description');
const options = document.querySelector('.changeDateTime')
const button = document.querySelector('.button')

let countTo = 'Sep 1, 2021 00:00:00';

function run() {
    const target = new Date(countTo);
    const countString = target.toLocaleString();
    const now = new Date().getTime();
    const difference = target.getTime() - now

    let day = Math.floor(difference / (1000 * 60 * 60 *24)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false}).replace('-', '');
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false}).replace('-', '');
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false}).replace('-', '');
    let second = Math.floor((difference % (1000 * 60)) / (1000)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false}).replace('-', '');

    if (difference < 0) {
        timer.innerHTML = `+ ${day}d ${hour}h ${minute}m ${second}s`
    } else {
        timer.innerHTML = `- ${day}d ${hour}h ${minute}m ${second}s`
    }
    
    description.innerHTML = `Counts until ${countString}`
}

function buttonClick() {
    if (getComputedStyle(options).opacity == 1) {
        options.style.opacity = "0"
        button.innerHTML = "Show Options"
    } else {
        options.style.opacity = "1"
        button.innerHTML = "Hide Options"
    }
}

setInterval(run, 1000)