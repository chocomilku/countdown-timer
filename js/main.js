import { CountUp } from './countUp.js'

const timer = document.querySelector('.timer');
const description = document.querySelector('.description');
const spanDay = new CountUp('day', 0, 0, 0, 1, { useEasing: true, useGrouping: true, separator: "", decimal: ".", suffix: "d"})
const spanHour = new CountUp('hour', 0, 0, 0, 1, { useEasing: true, useGrouping: true, separator: "", decimal: ".", suffix: "h"})
const spanMinute = new CountUp('minute', 0, 0, 0, 1, { useEasing: true, useGrouping: true, separator: "", decimal: ".", suffix: "m"})
const spanSecond = new CountUp('second', 0, 0, 0, 1, { useEasing: true, useGrouping: true, separator: "", decimal: ".", suffix: "s"})

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

    spanDay.update(day)
    spanHour.update(hour)
    spanMinute.update(minute)
    spanSecond.update(second)
    description.innerHTML = `Time until ${countString}`
}

setInterval(run, 1000)