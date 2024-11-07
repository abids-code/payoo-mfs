document.getElementById('cash-out-show-button')
    .addEventListener('click', function(){

        document.getElementById('cash-out-form').classList.remove('hidden');

        document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('add-money-show-button')
    .addEventListener('click', function(){

        document.getElementById('cash-out-form').classList.add('hidden');
        document.getElementById('add-money-form').classList.remove('hidden');
})