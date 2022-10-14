const message = [
'The purpose of our lives is to be happy.',
'Life is what happens when you\'re busy making other plans.',
'Get busy living or get busy dying.',
'You only live once, but if you do it right, once is enough.',
'Never let the fear of striking out keep you from playing the game.',
'Money and success don\'t change people; they merely amplify what is already there.',
'So many books, so little time.',
'Be yourself; everyone else is already taken.',
'A room without books is like a body without a soul.',
'Be the change that you wish to see in the world.',
'In three words I can sum up everything I\'ve learned about life: it goes on.',
'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
'Don\'t walk in front of me… I may not follow Don\'t walk behind me… I may not lead Walk beside me… just be my friend',
'I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
]

let random = Math.floor(Math.random() * message.length)
const randomMessage = () => {
    return message[random]
}

const generateRandom = () => {
    let button = document.getElementById('button')
    let p = document.getElementById('output')

    button.addEventListener('click' , ()=> {
        p.innerHTML = randomMessage()
        random = Math.floor(Math.random()*message.length)
    })
}

const reset = () => {
    let resetButton = document.getElementById('reset')
    let p = document.getElementById('output')
    resetButton.addEventListener('click' , ()=>{
        p.innerHTML = ''
    })
}

generateRandom()
reset()