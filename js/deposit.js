
// step1 add event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click' , function(){

    // step2 get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field')
    const newDepositAmountString  = depositField.value ;
    const newDepositAmount = parseFloat(newDepositAmountString)


    //step3 get the current deposit total amount

    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText
    const previousDepositTotal = parseFloat(previousDepositTotalString)


    //step4 add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = currentDepositTotal
    console.log(previousDepositTotal)

    //step5 get  balance of current  total
    const balanceTotalElement = document.getElementById('balance-total')
    const prevBalanceTotalString = balanceTotalElement.innerText ;
    const prevBalanceTotal = parseFloat(prevBalanceTotalString)
    

    // step-6 calculate current balance total
    const currentBalanceTotal = prevBalanceTotal + newDepositAmount ;
    balanceTotalElement.innerText = currentBalanceTotal;


// step7 clear the deposit value
    depositField.value = ''
})