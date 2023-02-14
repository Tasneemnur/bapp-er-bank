document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField = document.getElementById('deposit-field');
    const depositString = depositField.value;
    const deposit = parseFloat(depositString);

    //step-7
    depositField.value = '';

    // console.log(typeof deposit);
    //isNaN() - eta ekta function which means --->is Not a Number
    
    // validation
    if(isNaN(deposit)){
        alert('Please provide a number');
        return;
    }

    // step-3
    const depositAmountElement = document.getElementById('deposit-amount');
    const depositAmountString = depositAmountElement.innerText;
    const depositAmount = parseFloat(depositAmountString);
    // console.log(typeof depositAmount);

    // step-4
    const totalDeposit = depositAmount + deposit ;
    depositAmountElement.innerText = totalDeposit;

    // step-5
    const balanceAmountElement = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmountElement.innerText;
    const balance = parseFloat(balanceAmountString);

    // step-6
    const totalBalance = balance + deposit;
    balanceAmountElement.innerText = totalBalance;

    
})