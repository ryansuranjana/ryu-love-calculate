import feedback from "./utils/feedback"

const env = import.meta.env

const scriptURL = env.VITE_URL_SCRIPT_SPREADSHEET
const form = document.forms['feedback-form']
const feedbackSubmit = document.querySelector('#submit-feedback')

feedback(scriptURL, form, feedbackSubmit)