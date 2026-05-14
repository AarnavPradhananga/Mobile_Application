let balance = 10000;
let pinCode = 1234;

function updateBalance(){

    document.getElementById("balance").innerHTML =
    "Current Balance: Rs. " + balance;
}

function showMessage(text){

    document.getElementById("message").innerHTML = text;
}

function withdraw(){

    let amount =
    parseInt(document.getElementById("amount").value);

    // modulus concept
    if(amount % 100 !== 0){

        showMessage("Amount must be multiple of 100");
        return;
    }

    let pin = prompt("Enter PIN");

    if(pin != pinCode){

        showMessage("Wrong PIN");
        return;
    }

    if(amount > balance){

        showMessage("Insufficient Balance");
        return;
    }

    balance = balance - amount;

    updateBalance();

    showMessage("Withdraw Successful");
}

function deposit(){

    let amount =
    parseInt(document.getElementById("amount").value);

    // modulus concept
    if(amount % 100 !== 0){

        showMessage("Amount must be multiple of 100");
        return;
    }

    let pin = prompt("Enter PIN");

    if(pin != pinCode){

        showMessage("Wrong PIN");
        return;
    }

    balance = balance + amount;

    updateBalance();

    showMessage("Deposit Successful");
}