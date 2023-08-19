
// add event listener to the deposit btn
document.getElementById('btn-deposit').addEventListener('click' , function(){
    // get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field')
    const depositAmount  = depositField.value ;
    console.log(depositAmount)

    // get the current deposit total amount

    const depositTotalElement = document.getElementById('deposit-total')
    const depositTotal = depositTotalElement.innerText
    depositTotalElement.innerText = depositAmount
    console.log(depositTotal)
})