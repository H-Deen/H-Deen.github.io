const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple'
let question = document.getElementById('question')
let submitBtn = document.querySelector('#submit')
let choices = document.querySelector('#choices')
let questions = []
let questionCount = 0 
let userAnswers = []
let answerSelected = false

async function getData(){
    const response = await fetch(url)
    const data = await response.json()
    questions = data.results
    console.log(questions);
    renderQuestion()
    renderChoices()
}

function renderQuestion(){
    question.innerHTML = questions[questionCount].question
}

function renderChoices(){
    choices.innerHTML = ''
    const currentQuestion = questions[questionCount]
    const answers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]
    
    // Shuffle the answers to randomize their positions
    answers.sort(() => Math.random() - 0.5)

    answers.forEach((answer, index) => {
        const container = document.createElement('div')
        container.setAttribute('class', 'inputContainer')
        choices.appendChild(container)

        const label = document.createElement('label')
        const input = document.createElement('input')
        input.type = 'radio'
        input.name = 'answers'
        input.value = answer
        input.id = `answer${index}`

        label.htmlFor = input.id
        label.textContent = answer

        container.appendChild(input)
        container.appendChild(label) 

        // Add event listener to detect answer selection
        input.addEventListener('change', () => {
            answerSelected = true
            highlightAnswer(input.value, currentQuestion.correct_answer)
        })
    })
}

// Highlight the selected and correct answers
function highlightAnswer(selectedAnswer, correctAnswer) {
    document.querySelectorAll('input[name="answers"]').forEach(input => {
        const label = document.querySelector(`label[for="${input.id}"]`)
        if (input.value === correctAnswer) {
            label.style.backgroundColor = 'green'  // Correct answer
        }
        if (input.checked && input.value !== correctAnswer) {
            label.style.backgroundColor = 'red'  // Incorrect answer
        }
        input.disabled = true  // Disable all options after selection
    })
}

submitBtn.addEventListener('click', () => {
    if (!answerSelected) {
        alert('Please select an answer before proceeding.')
        return
    }

    const selectedAnswer = document.querySelector('input[name="answers"]:checked')
    userAnswers.push(selectedAnswer.value)
    answerSelected = false

    questionCount++
    if (questionCount < questions.length) {
        renderQuestion()
        renderChoices()
    } else {
        displayResult()
    }
})

function displayResult() {
    let score = 0
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct_answer) {
            score++
        }
    })
    question.innerHTML = `You scored ${score} out of ${questions.length}`
    choices.innerHTML = ''
    submitBtn.style.display = 'none'
}

getData()
