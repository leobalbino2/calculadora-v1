// Calculation variable
let cal = "";

// This function inserts a value inside both the variable and then shows it to the user
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

// This function only clears the last number of the cal variable
function clearScreen() {
    cal = cal.slice(0, -1)
    document.getElementById('result').value = cal;
}

// Alternate version of this function which clears the cal variable and the calculator display of any values
/*function clearScreen() {
    cal = "";
    document.getElementById('result').value = "";
}*/