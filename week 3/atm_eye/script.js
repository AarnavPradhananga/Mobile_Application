let balance = 10000;
let pinCode = 1234;

let hidden = false;

// load lucide icons
lucide.createIcons();

function updateBalance(){

    if(hidden == false){

        document.getElementById("balance").innerHTML =
        "Current Balance: Rs. " + balance;

        // open eye icon
        $("#eyeBtn").html(`
            <i data-lucide="eye"></i>
        `);
    }

    else{

        document.getElementById("balance").innerHTML =
        "Current Balance: ******";

        // closed eye icon
        $("#eyeBtn").html(`
            <i data-lucide="eye-off"></i>
        `);
    }

    // refresh lucide icons
    lucide.createIcons();
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

$("#eyeBtn").click(function(){

    if(hidden == false){

        hidden = true;
    }

    else{

        hidden = false;
    }

    updateBalance();
});