let timer = document.getElementById("timer")
let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')
const second = 1000
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countdown = setInterval(function(){
    const target = new Date(2024, 6, 14, 0, 0, 0).getTime()
    const currentDate = new Date().getTime()
    const diff = target - currentDate
    const days = Math.floor(diff/day)
    const hours = Math.floor((diff % day) / hour)
    const minutes = Math.floor((diff % hour) / minute)
    const seconds = Math.floor((diff % minute) / second)
    timer.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`
    if (diff < 0) {
        clearInterval(countdown)
        timer.textContent = `We Are Live Now!`
        h1.remove()
        h2.remove()
    }
},1000)

