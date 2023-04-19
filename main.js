import loveCalculate from "./utils/calculate"
import feedback from "./utils/feedback"

const env = import.meta.env

const submitCalculate = document.querySelector('#submit')
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': env.VITE_RAPID_API_HOST,
    },
}

submitCalculate.addEventListener('click', function () {
    submitCalculate.innerHTML = '<span class="text-white font-bold text-[16px]">Wait...</span>'
    const fname = document.querySelector('#fname').value
    const sname = document.querySelector('#sname').value
    loveCalculate(fname, sname, options)    
})

const scriptURL = env.VITE_URL_SCRIPT_SPREADSHEET
const form = document.forms['feedback-form']
const feedbackSubmit = document.querySelector('#submit-feedback')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    feedbackSubmit.innerHTML = 'Wait...'
    feedback(scriptURL, new FormData(form), () => {
        feedbackSubmit.innerHTML = '<i class="bi bi-arrow-through-heart-fill"></i>send'
        form.reset()
    })
})