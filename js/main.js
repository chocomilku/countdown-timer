const timer = document.querySelector('.timer');
const description = document.querySelector('.description');

let countTo = 'Sep 1, 2021 00:00:00';

function run() {
    const target = new Date(countTo);
    const countString = target.toLocaleString();
    const now = new Date().getTime();
    const difference = target.getTime() - now

    let day = Math.floor(difference / (1000 * 60 * 60 *24)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false})
    let hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false})
    let minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false})
    let second = Math.floor((difference % (1000 * 60)) / (1000)).toLocaleString('en-us', {minimumIntegerDigits: 2, useGrouping:false})

    timer.innerHTML = `${day}d ${hour}h ${minute}m ${second}s`

    description.innerHTML = `Counts until ${countString}`
}

setInterval(run, 1000)