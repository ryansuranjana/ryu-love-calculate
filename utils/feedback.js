const feedback = (scriptURL, form, feedbackSubmit) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        feedbackSubmit.innerHTML = 'Wait...'
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then((response) => {
                feedbackSubmit.innerHTML = '<i class="bi bi-arrow-through-heart-fill"></i>send'
                form.reset()
            })
            .catch((error) => console.error('Error!', error.message))
    })
}

export default feedback
