let btn = document.querySelectorAll("button");
let numberArea = document.getElementById("numberArea");
let plusMinus = document.getElementById("plusMinus")
let modul = document.getElementById("modul")
let color = document.querySelectorAll(".color")
let clickBack = document.querySelectorAll(".clickback")
let ops = document.querySelectorAll(".op")

let firstValue = ""
let secondValue = ""
let result = ""
let operation = null
let active = true
let active2 = false
numberArea.innerHTML = 0

btn.forEach(e => {

    e.addEventListener("click", a => {

        if (a.target.classList.contains("number")) {

            if (active) {

                firstValue += a.target.textContent;
                numberArea.innerHTML = firstValue

            } else {

                secondValue += a.target.textContent
                numberArea.innerHTML = secondValue

            }
        } else if (a.target.id == "clear") {

            ops.forEach(b => {
                b.style.backgroundColor = ""
                b.style.color = ""
            })

            firstValue = ""
            secondValue = ""
            result = ""
            numberArea.innerHTML = 0
            active = true
            active2 = false

        } else if (a.target.classList.contains("op")) {

            ops.forEach(b => {
                if (b === a.target) {
                    b.style.backgroundColor = "#fff"
                    b.style.color = "#ff9f0a"
                }
            })

            active = false

            if (active2) {

                calc()

            }

            operation = a.target.textContent
            active2 = true

        } else if (a.target.id == "equal") {

            numberArea.innerHTML = 0
            ops.forEach(b => {
                b.style.backgroundColor = ""
                b.style.color = ""
            })

            calc()

        }
    })
})


function calc() {

    if (operation == "+") {

        if (secondValue != "") {
            result = +firstValue + +secondValue
            firstValue = result
            secondValue = ""
        }
        numberArea.innerHTML = result

    } else if (operation == "-") {

        if (secondValue != "") {
            result = +firstValue - +secondValue
            firstValue = result
            secondValue = ""
        }
        numberArea.innerHTML = result

    } else if (operation == "×") {

        if (secondValue != "") {
            result = +firstValue * +secondValue
            firstValue = result
            secondValue = ""
        }
        numberArea.innerHTML = result

    } else if (operation == "÷") {
        if (secondValue != "") {
            result = +firstValue / +secondValue
            firstValue = result
            secondValue = ""
        }
        numberArea.innerHTML = result
    }
}

plusMinus.addEventListener("click", () => {

    result.innerHTML = ""
    if (firstValue != "") {
        result = -firstValue
        firstValue = result
    }
    numberArea.innerHTML = result

})

modul.addEventListener("click", () => {

    result.innerHTML = ""
    if (firstValue != "") {
        result = firstValue / 100
        firstValue = result
    }
    numberArea.innerHTML = result

})