const quizData = [
{
    question: "It's my birthday today!",
    a: "Congratulations",
    b: "Thanks a lot",
    c: "Help yourself",
    d: "Well done",
    correct: "a",
},
{
    question: "Fate smiles ___ those who utiringly grapple with stark realities of life.",
    a: "With",
    b: "Over",
    c: "On",
    d: "Round",
    correct: "c",
},
{
    question: "Catching the earlier train will give us the ______ to do some shopping.",
    a: "Chance",
    b: "Luck",
    c: "Possibility",
    d: "Occasion",
    correct: "a",
},
{
    question: "I saw a _______ of cows in the field.",
    a: "Group",
    b: "Herd",
    c: "Swarm",
    d: "Flock",
    correct: "b",
},
{
    question: "Success in this examination depends _______ hard work alone.",
    a: "At",
    b: "On",
    c: "For",
    d: "Over",
    correct: "b",
},
{
    question: "Rohan and Rohit are twin brothers, but they do not look",
    a: "Unique",
    b: "Alike",
    c: "Different",
    d: "Likely",
    correct: "b",
},
{
    question: "Ayesha is 14 and always ______ the permission of mother before going for the movies",
    a: "Seeking",
    b: "Seeks",
    c: "Sought",
    d: "Seeker",
    correct: "b",
},
{
    question: "Even if it rains I shall come means...",
    a: "If I come it will not rain",
    b: "If it rains I shall not come",
    c: "I will certainly come whether it rains or not",
    d: "Whenever there is rain I shall come",
    correct: "c",
},
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEL = document.getElementById ('question')
const a_text = document.getElementById ('a_text')
const b_text = document.getElementById ('b_text')
const c_text = document.getElementById ('c_text')
const d_text = document.getElementById ('d_text')
const submitBtn = document.getElementById ('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz () {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]

    questionEL.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener ('click', () => {
    const answer = getSelected()
  if (answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
          <h2>You answered ${score}/${quizData.length} questions correctly</h2>
          
          <button onclick="location.reload()">Reload</button>
          `
      }
  }
})