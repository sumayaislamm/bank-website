//add money to the account

// Step One: add an even handler 
// Step two: get money to the account 
// step3 get the pin number
//step4 : get the current balance
// Step 5 : Add addmoney with balance 
// Step06 : / String to Number
// Step 07 : Update the balance in The Dom/UI

 
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


//Cashout to the account

document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
   const amount = document.getElementById('input-cash-out').value;
   const cashOutPin = document.getElementById('cash-out-pin').value;
   const amountNumber = parseFloat(amount); 
   const cashoutPinNumber = parseFloat(cashOutPin);

   if(cashoutPinNumber === 1234){
      const balance = document.getElementById('balance').innerText;
      const balanceNumber = parseFloat(balance);
      
      const remainingBalance = balanceNumber - amountNumber; 
    //   console.log(remainingBalance);
      document.getElementById('balance').innerText = remainingBalance;
   }
   else{
    alert('Something is wrong! Try again');
   }

})

// Cash out Button 

// Show the cashout form 
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})

// Show the addmoney form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})
 