function checkBP() {
    let sys = parseInt(document.getElementById("sys").value);
    let dia = parseInt(document.getElementById("dia").value);
    let result = "";

    if (sys < 120 && dia < 80) {
        result = "Normal";
    }
    else if (sys >= 120 && sys < 130 && dia < 80) {
        result = "Elevated";
    }
    else if ((sys >= 130 && sys < 140) || (dia >= 80 && dia < 90)) {
        result = "High Blood Pressure (Stage 1)";
    }
    else if ((sys >= 140 && sys < 180) || (dia >= 90 && dia < 120)) {
        result = "High Blood Pressure (Stage 2)";
    }
    else if (sys >= 180 || dia >= 120) {
        result = "Hypertensive Crisis – Seek medical help!";
    }
    else {
        result = "Invalid Input";
    }

    document.getElementById("result").innerHTML = result;
}
