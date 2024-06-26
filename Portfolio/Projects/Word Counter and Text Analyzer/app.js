const pronounsList= [
    'i',
    'we',
    'you',
    'he',
    'she',
    'it',
    'they',
    'me',
    'us',
    'her',
    'him',
    'them',
    'mine',
    'ours',
    'yours',
    'hers',
    'his',
    'theirs',
    'myself',
    'yourself',
    'herself',
    'himself',
    'itself',
    'ourselves',
    'yourselves',
    'themselves',
]
let words = document.getElementById("words")
let characters = document.getElementById("characters")
let sentences = document.getElementById("sentences")
let paragraphs = document.getElementById("paragraphs")
let pronouns = document.getElementById("pronouns")
let text = document.getElementById("text")
let readingSpeed = document.getElementById("avrReadingTime")
let longestWord = document.getElementById("longestWord")

words.textContent = 0
characters.textContent = 0
sentences.textContent = 0
paragraphs.textContent = 0
pronouns.textContent = 0
readingSpeed.textContent = ` -`
longestWord.textContent = ` -`

text.addEventListener('input', function(){
    let input = text.value
    let wordArray =  input.split(' ').filter(word => word.trim() !== '')
    words.textContent = wordArray.length

    let characterArray = input.split('')
    characters.textContent = characterArray.length

    let sentenceArray = input.split('.').filter(sentence => sentence.trim() !== '')
    sentences.textContent = sentenceArray.length

    let paragraphArray = input.split('\n').filter(paragraph => paragraph.trim() !== '')
    paragraphs.textContent = paragraphArray.length
    
    let pronounArray = []
    for (const word of wordArray) {
        for (const pronoun of pronounsList) {
            if (word.toLowerCase() == pronoun) {
                pronounArray.push(word)
            }
        }
    }
    pronouns.textContent = pronounArray.length
    
    let average = Math.floor(wordArray.length/180)
    if (average == 0 || average == 1) {
        readingSpeed.textContent = `~ 1 minute`
    }else{
        readingSpeed.textContent = `~ ${average} minutes`
    }
    
    let longest = ''
    for (const word of wordArray) {
        if (word.length > longest.length) {
            longest = word
        }
    }
    longestWord.textContent = longest

    if (input === '') {
        readingSpeed.textContent = ' -'
        longestWord.textContent = ' -'
    }
})