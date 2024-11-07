document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const amountInput = document.getElementById('amount-input').value;
        console.log(amountInput);
        const pinInput = document.getElementById('pin-input').value;
        console.log(pinInput);

        if(pinInput === '1234'){
            const currentBalance = document.getElementById('current-balance').innerText;
            
            const newBalance = parseFloat(currentBalance) + parseFloat(amountInput);
            
            document.getElementById('current-balance').innerText = newBalance;
        }else{
            alert('Failed to add money! Please try again.')
        }
})