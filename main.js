function baseGenerate() {
    const textboxOne = document.getElementById("textbox-one")
    const textboxTwo = document.getElementById("textbox-two")
    const textboxOp = document.getElementById("textbox-op")
    const limit = Math.random() * (9 - 1)
    let base = document.getElementById("base-select").value
    let outputOne = ''
    let outputTwo = ''
    const baseList = {
        10: '0123456789',
        2: '01',
        16: '0123456789ABCDEF'
    }
    const opList = ['+', '−']
    for (var i = 0; i < limit; i++) {
        outputOne += baseList[base].charAt(Math.floor(Math.random() * baseList[base].length))
    }
    for (var i = 0; i < (Math.random() * ((outputOne.length + 1) - 1)); i++) {
        outputTwo += baseList[base].charAt(Math.floor(Math.random() * baseList[base].length))
    }
    let operator = opList[Math.floor(Math.random() * opList.length)]
    if (base == 10 && outputTwo > outputOne && operator == '-') {
        console.log("Rerolling...")
        return baseGenerate()
    } else if (base == 10 && (outputOne.charAt(0) == '0' || outputTwo.charAt(0) == '0')) {
        console.log("Rerolling...")
        return baseGenerate()
    } else {
        textboxOne.innerHTML = outputOne
        textboxTwo.innerHTML = outputTwo
        textboxOp.innerHTML = operator
        return
    }
}