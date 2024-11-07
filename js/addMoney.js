document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const amountInput = document.getElementById('amount-input').value;
        const pinInput = document.getElementById('pin-input').value;

        if(pinInput === '1234'){
            const currentBalance = document.getElementById('current-balance').innerText;

            const newBalance = parseInt(amountInput) + parseInt(currentBalance);

            document.getElementById('current-balance').innerText = newBalance;

        }
        else{
            alert('Failed to add money! Please try again')
        }
})