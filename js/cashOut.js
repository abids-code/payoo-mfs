document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = document.getElementById('cash-out-amount').value;
        const pinInput = document.getElementById('cash-out-pin').value;

        if(pinInput === '1234'){
            const currentBalance = document.getElementById('current-balance').innerText;

            const newBalance = parseInt(currentBalance) - parseInt(cashOut);

            document.getElementById('current-balance').innerText = newBalance;

        }
        else{
            alert('Failed to Cash Out! Please try again')
        }
})