function fetchRandNum(base) {
    return new Promise(resolve => {
        url = [
            'https://qrng.anu.edu.au/API/jsonI.php?length=2&type=uint8&size=6',
            'https://qrng.anu.edu.au/API/jsonI.php?length=2&type=uint16&size=6'
        ]
        if (base == 2) {
            fetch(url[0])
            .then(response => response.json())
            .then(data => data['data'])
            .then(data => resolve(data))
        } else {
            fetch(url[Math.floor(Math.random() * url.length)])
            .then(response => response.json())
            .then(data => data['data'])
            .then(data => resolve(data))
        }
    })
}

async function handleRandNum() {
    let base = document.getElementById("base-select").value
    let [numOne, numTwo] = await fetchRandNum(base)
    const operators = ['&plus;', '&minus;']
    let operation = operators[Math.floor(Math.random() * operators.length)]
    let numLarge = Math.max(numOne, numTwo)
    let numSmall = Math.min(numOne, numTwo)
    if (base != 10) {
        numLarge = numLarge.toString(base).toUpperCase()
        numSmall = numSmall.toString(base).toUpperCase()
    }
    return document.getElementById('output').innerHTML = `${numLarge}\n${operation}${numSmall}`
}

function toggleDark() {
    document.body.classList.toggle('dark');
}

function checkDark() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.toggle('dark');
    } 
}