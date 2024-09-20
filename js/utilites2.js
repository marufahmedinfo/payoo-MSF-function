// Add Maney Amount [start]

function getInputFillValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
    return inputNumber;
};

function getTextFiledValueById(id){
    const amountText = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amountText);
    return amountNumber;
}

// Add Maney Amount [end]



// Cash Out Amount [start]
function showSectionById(id){
    document.getElementById('add-maney-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('tranjection-id').classList.add('hidden');
    document.getElementById('tranjetion-sectin').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden')
}


// Cash Out Amount [end]





