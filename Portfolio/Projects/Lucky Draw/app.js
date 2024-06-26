const names = document.getElementById("names")
const saveNames = document.getElementById("save")
const ul = document.getElementById('ul')
const roller = document.getElementById('roller')
const winner = document.getElementById('winner')
saveNames.addEventListener('click', function () {
    let namesList = names.value.split('\n')
    for (const name of namesList) {
        let li = document.createElement('li')
        li.textContent = name
        ul.appendChild(li)
    }
    let draw = document.createElement('button')
    draw.textContent = 'Draw'
    roller.appendChild(draw)
    draw.addEventListener('click', function(){
    let random = Math.floor(Math.random() * namesList.length)
    winner.textContent = namesList[random]
    })
})
