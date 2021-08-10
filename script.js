//Phone increase button
document.getElementById('phone-plus-button').addEventListener('click', function(){
    let phoneCount = parseInt(document.getElementById('phone-count').value);
    phoneCount = phoneCount + 1;
    document.getElementById('phone-count').value = phoneCount;
    let phonePrice = phoneCount * 1219;
    document.getElementById('phone-price').innerText = "$"+ phonePrice;
    totalPrice();
});

//phone decrease button
document.getElementById('phone-minus-button').addEventListener('click', function(){
    let phoneCount = parseInt(document.getElementById('phone-count').value);
    if(phoneCount<1){

    }
    else{
        phoneCount = phoneCount - 1;
        document.getElementById('phone-count').value = phoneCount;
        let phonePrice = phoneCount * 1219;
        document.getElementById('phone-price').innerText = "$"+ phonePrice;
    }
    totalPrice();
});

//Case Increase button
document.getElementById('case-plus-button').addEventListener('click', function(){
    let caseCount = parseInt(document.getElementById('case-count').value);
    caseCount = caseCount + 1;
    document.getElementById('case-count').value = caseCount;
    let casePrice = caseCount * 59;
    document.getElementById('case-price').innerText = "$" + casePrice;
    totalPrice();
});

//Case Decrease button
document.getElementById('case-minus-button').addEventListener('click', function(){
    let caseCount = parseInt(document.getElementById('case-count').value);
    if(caseCount < 1){

    }

    else{
        caseCount = caseCount - 1;
        document.getElementById('case-count').value = caseCount;
        let casePrice = caseCount * 59;
        document.getElementById('case-price').innerText = "$" + casePrice;
    }
    totalPrice();
});

function totalPrice(){
    let caseCount = parseInt(document.getElementById('case-count').value);
let phoneCount = parseInt(document.getElementById('phone-count').value);
console.log(phoneCount);
let totalPrice = caseCount * 59 + phoneCount *1219;
document.getElementById('total-price').innerText = "$"+totalPrice;
document.getElementById('grand-total').innerText = "$"+totalPrice;
}
