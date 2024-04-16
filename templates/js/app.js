const bankAccount = {
    'customerNumber': getCustomerNumber(),
    'sortCode': getSortCode(),
    'name': getAccName(),
    'balance': getAccBalance(),
}

const customerName = document.querySelector('#customerName')
const customerNumber = document.querySelector('#accountNumber')
const customerSortCode = document.querySelector('#sortCode')
const customerBalance = document.querySelector('#moneyBalance')

function getAccBalance(){
    return 1000.00
}

function getCustomerNumber(){
    // let customerNumber = prompt("Enter Customer Number: ")
    // if(customerNumber.length <10) {
    //     return customerNumber
    // } else {
    //    return "Loading Error"
    // }
    return "Loading Error"
}

function getSortCode(){
    // let sortCode = prompt("Enter sort code: ")
    // if(sortCode.length != 6){
    //     return "Loading Error"
    // } else {
    //     return sortCode.toString().match(/.{1,2}/g).join('-')
    // }
    return "Loading Error"

}

function getAccName(){
    return prompt('Enter Your Banking Account Name: ')
}


function loadData(){
    customerName.innerHTML = bankAccount.name
    customerNumber.innerHTML = bankAccount.customerNumber
    customerSortCode.innerHTML = bankAccount.sortCode
    customerBalance.innerHTML = bankAccount.balance
}

loadData()