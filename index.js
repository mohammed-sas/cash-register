const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkBtn = document.querySelector('#check-btn');
const message = document.querySelector('.error-message');
const cashGivenDiv = document.querySelector('.div-cash-given');
const changeTableDiv = document.querySelector('.div-change-table');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const nextbtn = document.querySelector('#next');
const denomination = [2000, 500, 100, 20, 10, 5, 1];

hideCashGiven();
hideChangeTable();

nextbtn.addEventListener("click", function () {
            hideChangeTable();
            cashGiven.value="";

    if (billAmount.value < 0)
        showMessage("invalid amount");
    else if (billAmount.value == "") {
        showMessage("Please enter an amount");
    } else {

        message.style.display = "none";
        showCashGiven();
    }
});

checkBtn.addEventListener("click", function () {
    message.style.display = "none";
    console.log(cashGiven.value >= billAmount.value);
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountReturn = cashGiven.value - billAmount.value;
            calculateChange(amountReturn);

        } else {
            console.log(billAmount.value, cashGiven.value);
            showMessage("Insufficient cash provided");
        }
    } else {
        showMessage("Invalid amount");
    }
});

function hideChangeTable() {
    changeTableDiv.style.display = "none";
}

function showChangeTable() {
    changeTableDiv.style.display = "block";
}


function hideCashGiven() {
    cashGivenDiv.style.display = "none";
}

function showCashGiven() {
    cashGivenDiv.style.display = "block";
}


function calculateChange(amount) {
    showChangeTable();
    for (let i = 0; i < denomination.length; i++) {
        const numberOfNotes = Math.trunc(amount / denomination[i]);
        amount = amount % denomination[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function showMessage(errorMessage) {
    message.style.display = "block";
    message.innerText = errorMessage;

}