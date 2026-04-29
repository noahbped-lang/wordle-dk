document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let a = document.getElementById("mitFelt").value
        if (a === "kat") {
            document.getElementById("mitFelt").style.backgroundColor = "green"
        } else {
            let fundet = false
            for (let i = 0; i < a.length; i++) {
                if ("kat".includes(a[i])) {
                    fundet = true
                }
            }
            if (fundet) {
                document.getElementById("mitFelt").style.backgroundColor = "yellow"
            } else {
                document.getElementById("mitFelt").style.backgroundColor = "red"
            }
        }
    }
})