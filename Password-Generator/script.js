const lengthEl = document.getElementById("length")
const lowercaseEl = document.getElementById("lowercase")
const uppercaseEl = document.getElementById("uppercase")
const passwordEl = document.getElementById("password")
const numberEl = document.getElementById("number")
const symbolEl = document.getElementById("symbol")
const clipboardEl = document.getElementById("clipboard")
const generator = document.querySelector("#generator")



const randomFunc = {
    lower: getRandomLowerCase,
    upper: getRandomUpperCase,
    number: getRandomNumber,
    symbol: getRandomsymbol
}

generator.addEventListener("click", () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    passwordEl.textContent = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

clipboardEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea")
    const password = passwordEl.textContent

    if(!password){
        return
    }
    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('password copied')
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
        item => Object.values(item)[0]
    )
    // console.log(typesArr)
    if(typesCount === 0){
        return ''
    }
    for(let i = 0; i < length; i+= typesCount){
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            // console.log('funcName: ', funcName)
            generatedPassword += randomFunc[funcName]()
        })
    }
    const finalPassword = generatedPassword.slice(0, length)
    return finalPassword 
}

function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
function getRandomsymbol(){
    let symbol = '!@#$%^&*()+={}[]\|;<>/?'
    return symbol[Math.floor(Math.random() * symbol.length)]
}