const timer = document.querySelector('.timer');
const description = document.querySelector('.description');
const options = document.querySelector('.form')
const button = document.querySelector('.button')

let countTo = 'Sep 1, 2021 00:00:00';

function run() {
    const target = new Date(countTo);
    const countString = target.toLocaleString();
    const now = new Date().getTime();
    const difference = target.getTime() - now
    let day;
    let hour;
    let minute;
    let second;

    function time(formula) {
        return Math.floor(formula).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false}).replace('-', '');
    }

    if (difference < 0) {
        day = time((difference/(1000*60*60*24))+1);
        hour = time(((difference/(1000*60*60)) % 24)+1);
        minute = time(((difference/1000/60) % 60)+1);
        second = time(((difference/1000) % 60));
        timer.innerHTML = `+ ${day}d ${hour}h ${minute}m ${second}s`
        description.innerHTML = `Counts from ${countString}`
    } else {
        day = time((difference/(1000*60*60*24)));
        hour = time(((difference/(1000*60*60)) % 24));
        minute = time(((difference/1000/60) % 60));
        second = time(((difference/1000) % 60));
        timer.innerHTML = `- ${day}d ${hour}h ${minute}m ${second}s`
        description.innerHTML = `Counts until ${countString}`
    }
}

function buttonClick() {
    if (getComputedStyle(options).opacity == 0) {
        options.style.visibility = "visible"
        options.style.opacity = "1"
        button.innerHTML = "Hide Options"
    } else {
        options.style.opacity = "0"
        setTimeout(function(){
            options.style.visibility = "hidden"
        }, 500)
        button.innerHTML = "Show Options"
    }
}

function enter(){
    let tempDate;
    let tempTime;
    tempDate = options[0].value
    tempTime = options[1].value
    countTo = `${tempDate} ${tempTime}`
    buttonClick()
}

setInterval(run, 1000)