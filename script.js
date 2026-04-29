let boksnummer = 1

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let a = document.getElementById("boks1").textContent + 
                document.getElementById("boks2").textContent + 
                document.getElementById("boks3").textContent + 
                document.getElementById("boks4").textContent + 
                document.getElementById("boks5").textContent
        for (let i = 0; i < 5; i++) {
            if (a[i] === "skabe"[i]) {
                document.getElementById("boks" + (i + 1)).style.backgroundColor = "green"
            } else if ("skabe".includes(a[i])) {
                document.getElementById("boks" + (i + 1)).style.backgroundColor = "yellow"
            } else {
                document.getElementById("boks" + (i + 1)).style.backgroundColor = "red"
            }
        }
        } else if (event.key === "Backspace") {
    if (boksnummer > 1) {
        boksnummer = boksnummer - 1
        document.getElementById("boks" + boksnummer).textContent = ""
    }
    } else if (event.key.length === 1) {
        document.getElementById("boks" + boksnummer).textContent = event.key
        boksnummer = boksnummer + 1
    }
})
