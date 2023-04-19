const loveCalculate = (fname, sname, options) => {
    const progressBar = document.querySelector('#circular-progress')
    const valueContainer = document.querySelector('#value-container')

    fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
    .then((response) => response.json())
    .then((response) => {
        let progressValue = 0
        let progressEndValue = response.percentage
        let speed = 30
        console.log(response)

        let progress = setInterval(() => {
            progressValue++
            valueContainer.textContent = `${progressValue}%`
            progressBar.style.background = `conic-gradient(
                #f87171 ${progressValue * 3.6}deg,
                #fecaca ${progressValue * 3.6}deg
            )`
            if (progressValue == progressEndValue) {
                clearInterval(progress)
            }
        }, speed)
        submit.innerHTML = '<span class="text-white font-bold text-[16px]">CALCULATE LOVE</span>'
    })
    .catch((err) => console.error(err))
}

export default loveCalculate