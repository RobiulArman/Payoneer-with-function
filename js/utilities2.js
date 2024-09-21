
// Function for all InputField id
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // for returning Number
    return inputNumber;
}

// Function for all TextField id
function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// Function for all section id
function showSectionById(id){
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    
    // show the section with the provide id as parameter Je id re call dibo ore dhekabe
    document.getElementById(id).classList.remove('hidden');
}