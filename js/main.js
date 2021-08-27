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
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    let second = Math.floor((difference % (1000 * 60)) / (1000))

    if (day < 10) {
        spanDay.innerHTML = '0' + day + 'd'
    } else {
        spanDay.innerHTML = day + 'd'
    }

    if (hour < 10) {
        spanHour.innerHTML = '0' + hour + 'h'
    } else {
        spanHour.innerHTML = hour +'h'
    }
    
    if (minute < 10) {
        spanMinute.innerHTML = '0' + minute + 'm'
    } else {
        spanMinute.innerHTML = minute + 'm'
    }

    if (second < 10) {
        spanSecond.innerHTML = '0' + second + 's'
    } else {
        spanSecond.innerHTML = second + 's'
    }

    description.innerHTML = `Time until ${countString}`
}

setInterval(run, 1000)