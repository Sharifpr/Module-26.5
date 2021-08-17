function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear deposit field
    inputField.value = '';
    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const totalAmount = previousTotal + amount;
    totalElement.innerText = totalAmount;
}

function getCurrentBalance() {
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    return previousBalance;
}


function updateBalance(amount, isAdd) {

    const totalBalance = document.getElementById('total-balance');

    /* 
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    */
    const previousBalance = getCurrentBalance();

    if (isAdd == true) {
        const newBalanceTotal = previousBalance + amount;
        totalBalance.innerText = newBalanceTotal;
    }
    else {
        const newBalanceTotal = previousBalance - amount;
        totalBalance.innerText = newBalanceTotal;
    }
}


document.getElementById('deposit-button').addEventListener('click', function () {

    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    // get and update deposit total
    /* 
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositTotal; 
    */

    // get update balance
    /* 
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    const newBalanceTotal = previousBalance + depositAmount;
    totalBalance.innerText = newBalanceTotal; 
    */

    const depositAmount = getInputValue('deposit-input')
    if (depositAmount > 0) {
        updateTotalField('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }

})

document.getElementById('withdraw-button').addEventListener('click', function () {

    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); 
    */

    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previouswithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal; 
    */

    // get update balance after withdraw
    /*  
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    const newBalanceTotal = previousBalance - withdrawAmount;
    totalBalance.innerText = newBalanceTotal;
    */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('total-withdraw', withdrawAmount)
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('There is not enough money in the account');
    }

})

