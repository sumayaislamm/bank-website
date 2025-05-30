//add money to the account

// Step One: add an even handler 
// Step two: get money to the account 
// step3 get the pin number
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;

    const pinNumber = document.getElementById('input-pin').value;
    console.log(addMoneyInput, pinNumber);
})