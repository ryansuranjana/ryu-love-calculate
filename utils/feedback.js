const feedback = (scriptURL, body, onSuccess) => {
    fetch(scriptURL, { method: 'POST', body })
        .then((response) => onSuccess(response))
        .catch((error) => console.error('Error!', error.message))
}

export default feedback
