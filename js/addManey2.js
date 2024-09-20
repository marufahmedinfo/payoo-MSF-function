document.getElementById('add-maney-btn').addEventListener('click', function(event){
    event.preventDefault();
    const addManey = getInputFillValueById("input-add-maney");
    const pinNumber = getInputFillValueById("input-add-maney-pin");
    // console.log("add amney inside :", addManey , pinNumber)
    if(isNaN(addManey)){
        alert('Failed to the add Maney');
        return;
    }
    if(pinNumber === 1234){
        const balance = getTextFiledValueById('Amount');
        const newBalance = balance + addManey ;
        // console.log(newBalance)
        document.getElementById('Amount').innerText = newBalance;
        // tranjection section
        const p = document.createElement('p');
        p.innerText = `Added Maney : ${addManey} Tk. Total Amount : ${newBalance}`
        document.getElementById('tranjetion-sectin').appendChild(p);
    }else{
        alert('Failed to Your Add maney!')
    }
})