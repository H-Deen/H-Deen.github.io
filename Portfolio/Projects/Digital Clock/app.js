let time = document.getElementById('time')
let date = document.getElementById('date')
let greeting = document.getElementById('greeting')
let dateAndmonth = new Date()
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
function updateTime() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours} : ${minutes} : ${seconds}`;
}
function updateDate() {
    let date = dateAndmonth.getDate()
    let monthName = months[dateAndmonth.getMonth()]
    let day = weekdays[dateAndmonth.getDay()]
    return `${date}, ${monthName}, ${day}`
}

setInterval(function () {
    time.textContent = updateTime()
    date.textContent = updateDate()
    const checkTime = new Date()
    const checkHour = checkTime.getHours()
    const morning = 6
    const afternoon = 12
    const night = 20
    if (checkHour >= morning && checkHour < afternoon) {
        greeting.textContent = `Good Morning!`
    } else if (checkHour >= afternoon && checkHour < night) {
        greeting.textContent = `Good Afternoon!`
    } else if (checkHour >= night || checkHour < morning) {
        greeting.textContent = `Good Night!`
    }
}, 1000)
