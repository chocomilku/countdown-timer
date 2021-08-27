const timer = document.querySelector('.timer');
const description = document.querySelector('.description');
const spanDay = document.querySelector('.day')
const spanHour = document.querySelector('.hour')
const spanMinute = document.querySelector('.minute')
const spanSecond = document.querySelector('.second')

let countTo = 'Sep 1, 2021 00:00:00';

function run() {
    const target = new Date(countTo);
    const countString = target.toLocaleString();
    const now = new Date().getTime();
    const difference = target.getTime() - now

    let day = Math.floor(difference / (1000 * 60 * 60 *24))
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    let second = Math.floor((difference % (1000 * 60)) / (1000)).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})

    spanDay.innerText = day
    spanHour.innerText = hour
    spanMinute.innerText = minute
    spanSecond.innerText = second
    description.innerHTML = `Time until ${countString}`
}

setInterval(run, 1000)