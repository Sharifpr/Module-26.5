document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    // update deposit total
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositTotal + depositAmount;
    depositTotal.innerText = newDepositTotal;

    // clear deposit field
    depositInput.value = '';


    // get update balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    const newBalanceTotal = previousBalance + depositAmount;
    totalBalance.innerText = newBalanceTotal;

})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // update deposit total
    const withdrawTotal = document.getElementById('total-withdraw');
    const previousWithdrawText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previouswithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // clear deposit field
    withdrawInput.value = '';


    // get update balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    const newBalanceTotal = previousBalance - withdrawAmount;
    totalBalance.innerText = newBalanceTotal;

})

