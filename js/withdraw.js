// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawString = withdrawField.value;
    const withdraw = parseFloat(withdrawString);

    // step-7
    withdrawField.value = '';

    // console.log(typeof deposit);

    // validation
    if(isNaN(withdraw)){
        alert('Please give a number!');
        return;
    }

    // step-3
    const withdrawAmountElement = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmountElement.innerText;
    const withdrawAmount = parseFloat(withdrawAmountString);
    // console.log(typeof depositAmount);

    // step-5
    const balanceAmountElement = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmountElement.innerText;
    const balance = parseFloat(balanceAmountString);

    // validation
    if(withdraw > balance){
        alert ('Sorry!! You do not have that much amount in your account');
        return;
    }

    // step-4
    const totalWithdraw = withdrawAmount + withdraw ;
    withdrawAmountElement.innerText = totalWithdraw;

    // step-6
    const totalBalance = balance - withdraw;
    balanceAmountElement.innerText = totalBalance;


    
})