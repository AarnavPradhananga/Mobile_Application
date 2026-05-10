// Get main div
let app = document.getElementById("app");

// Create 8 input fields
for (let i = 1; i <= 8; i++) {
    let input = document.createElement("input");
    input.type = "number";
    input.id = "sub" + i;
    input.placeholder = "Subject " + i;
    input.style.display = "block";
    input.style.margin = "10px";

    app.appendChild(input);
}


let button = document.createElement("button");
button.innerText = "Calculate";
button.onclick = calculate;
app.appendChild(button);

// Create result display
let totalText = document.createElement("h3");
totalText.id = "total";
app.appendChild(totalText);

let resultText = document.createElement("h3");
resultText.id = "result";
app.appendChild(resultText);

// Function to calculate
function calculate() {
    let total = 0;

    for (let i = 1; i <= 8; i++) {
        let value = document.getElementById("sub" + i).value;
        total += Number(value);
    }

    totalText.innerText = "Total Marks: " + total;

    let result = "";
    let color = "black";

    if (total >= 700) {
        result = "Distinction";
        color = "green";
    } else if (total >= 600) {
        result = "First Division";
    } else if (total >= 500) {
        result = "Second Division";
    } else if (total >= 400) {
        result = "Third Division";
    } else {
        result = "Fail";
        color = "red";
    }

    resultText.innerText = "Result: " + result;
    resultText.style.color = color;
}