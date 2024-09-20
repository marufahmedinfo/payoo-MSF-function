document.getElementById('add-maney-btn').addEventListener('click', function(event){
    event.preventDefault();
    // console.log("click the button")
    
    const addManey = getInputFillValueById("input-add-maney");
    const pinNumber = getInputFillValueById("input-add-maney-pin");
    console.log(addManey, pinNumber)
})