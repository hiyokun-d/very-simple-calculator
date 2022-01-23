let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C": display.innerText = ""
                break;
            case "← delete": 
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1); 
                }
                break;
            case "=":
                try {
                        if (display.innerText) {
                        display.innerText = eval(display.innerText)
                        }
                    } catch {
                        display.innerText = "ERROR!!!! >:("
                    }
            default:
                display.innerText += e.target.innerText;
        }
    })
})