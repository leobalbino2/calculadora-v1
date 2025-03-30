// Calculation variable
let cal = "";

// This function inserts a value inside the variable and then shows it to the user
function insert(num) {
    cal += num;
    document.getElementById('result').value = cal;
};

// This function tries to give a result but is stopped if the operation is invalid
function calculate() {
    try {
        let result = eval(cal);
        // For the clearScreen to work correctly, the "result" variable has to be turned into a string
        cal = result.toString();  
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = "Operação Inválida!";
    }
}

// This function only clears the last number or operator of the cal variable
function clearLast() {
    cal = cal.slice(0, -1)
    document.getElementById('result').value = cal;
}

// Unlike the above, this function clears the cal variable completely
function clearScreen() {
    cal = "";
    document.getElementById('result').value = "";
}