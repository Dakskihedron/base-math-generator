let answer = "No question."

function fetchRandNum(base) {
    return new Promise(resolve => {
        url = [
            'https://qrng.anu.edu.au/API/jsonI.php?length=2&type=uint8&size=6',
            'https://qrng.anu.edu.au/API/jsonI.php?length=2&type=uint16&size=6'
        ]
        if (base == 2) {
            url = url[0]
        } else {
            url = url[Math.floor(Math.random() * url.length)]
        }
        fetch(url)
        .then(response => response.json())
        .then(data => data['data'])
        .then(data => resolve(data))
    })
}

async function randNum() {
    let base = document.getElementById("select-base").value
    let [numOne, numTwo] = await fetchRandNum(base)
    const operators = ['&plus;', '&minus;']
    let operation = operators[Math.floor(Math.random() * operators.length)]
    let numLarge = Math.max(numOne, numTwo)
    let numSmall = Math.min(numOne, numTwo)
    if (operation == '&plus;') {
        answer = numLarge + numSmall
    } else {
        answer = numLarge - numSmall
    }
    answer = answer.toString(base).toUpperCase()
    if (base != 10) {
        numLarge = numLarge.toString(base).toUpperCase()
        numSmall = numSmall.toString(base).toUpperCase()
    }
    document.getElementById('output-answer').innerHTML = ''
    return document.getElementById('output-question').innerHTML = `${numLarge}\n${operation}${numSmall}`
}

function showAnswer() {
    return document.getElementById('output-answer').innerHTML = answer
}