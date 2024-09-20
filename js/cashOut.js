document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutManey = getInputFillValueById('input-cash-out');
    const cashOutPinNumber = getInputFillValueById('input-cash-out-pin');
    if(isNaN(cashOutManey)){
        alert('Failed to the cash out Maney');
        return;
    }
    if(cashOutPinNumber === 1234){
        const balance = getTextFiledValueById('Amount');
        if(cashOutManey > balance){
            alert('You do not have enough maney to cash out');
            return;
        }
        const newBalance = balance - cashOutManey;
        document.getElementById('Amount').innerText = newBalance;

        //tranjetion section
        const div = document.createElement('div');
        div.classList.add("bg-red-200");
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out maney</h4>
        <p>${cashOutManey} Total Balance : ${newBalance}</p>
        `
        document.getElementById('tranjetion-sectin').appendChild(div)
    }else{
        alert('Failed to Your Cash Out Amount!')
    }
})