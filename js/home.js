//add money to the account

// Step One: add an even handler 
// Step two: get money to the account 
// step3 get the pin number
//step4 : get the current balance
// Step 5 : Add addmoney with balance 
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;

    const pinNumber = document.getElementById('input-pin').value;
    // console.log( addMoneyInput, pinNumber); 

     //check the pin, wrong way but it's okay 
     if(pinNumber === '1234'){
        // console.log('adding money to your account')
        const balance = document.getElementById('balance').innerText;
        // console.log( balance);

        // String to Number
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
       //Addition
        const newBalance = addMoneyNumber + balanceNumber;
        // console.log(newBalance);

        // Update the balance in The Dom/UI
        document.getElementById('balance').innerText = newBalance;
        

     }
     else{
        alert('Failed, Try again!')
     }
})