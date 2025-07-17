

let numkeys = document.getElementById("numkeys");
let clearkeys = document.getElementById("clearkeys");
let screen = document.getElementById("display2");
let tempscr = document.getElementById("display1");
let displaytext = [];
let operand1 = 0;
let currentoptr = ""

numkeys.addEventListener("click",(event)=>{
    let target = event.target;
    if (/\d/.test(target.value))
    {
        displaytext.push(target.value);
        screen.innerText = displaytext.join('');
    }

    else if(target.value === "."){
        if(!(displaytext.includes(".")))
            displaytext.push(target.value);
        screen.innerText = displaytext.join('');
    }
    })

clearkeys.addEventListener("click",(event)=>{
    let target = event.target;
    if(target.id === "delete")
        displaytext.pop();
        
    else if(target.id === "clear")
        displaytext.length = 0;
        tempscr.innerText = "";
        currentoptr = "";
        operand1 = 0;

    screen.innerText = displaytext.join('');
})

function operate(optr)
{
    if (currentoptr === "" && displaytext.length != 0)
    {
        console.log(displaytext);
        operand1 = parseFloat(displaytext.join(''));
        currentoptr = optr;
        tempscr.innerText = operand1;
        screen.innerText = "";
        displaytext.length = 0;
    }
    
    else if(displaytext.length == 0)
    {
        currentoptr = optr;
        tempscr.innerText = operand1;
        screen.innerText = "";
    }

    else if(displaytext.length != 0){
        switch(currentoptr)
        {
            case "+":
                operand1 += parseFloat(displaytext.join(''));
                currentoptr = optr;
                tempscr.innerText = operand1;
                screen.innerText = "";
                displaytext.length = 0;
                break;

            case "-":
                operand1 -= parseFloat(displaytext.join(''));
                tempscr.innerText = operand1;
                screen.innerText = "";
                displaytext.length = 0;
                currentoptr = optr;
                break;

            case "/":
                operand1 /= parseFloat(displaytext.join(''));
                tempscr.innerText = operand1;
                screen.innerText = "";
                displaytext.length = 0;
                currentoptr = optr;
                break;

            case "*":
                operand1 *= parseFloat(displaytext.join(''));
                tempscr.innerText = operand1;
                screen.innerText = "";
                displaytext.length = 0;
                currentoptr = optr;
                break;      
                
            case "=":
                operand1 = parseFloat(displaytext.join(''));
                tempscr.innerText = operand1;
                screen.innerText = "";
                currentoptr = optr;
                displaytext.length = 0;
                break;
        }
    }

    if(optr === "=")
    {
        screen.innerText = operand1;
        tempscr.innerText = "";
    }
}