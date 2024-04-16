const actionHistory = {
    trans0: {
        type: 'transfer',
        sum: '-100.00',
        comment: 'Happy Birthday',
        date: '09.05.2012'
    },
    trans1: {
        type: 'transfer',
        sum: '+1020.00',
        comment: 'Car',
        date: '01.09.2023'
    },
    trans2: {
        type: 'transfer',
        sum: '-1000.00',
        comment: 'For rent',
        date: '09.12.2024'
    },
}


const operationContainer = document.querySelector('.bank__operation__container')

function loadHistory() {
    for (const action in actionHistory) {
        operationContainer.insertAdjacentHTML("beforeend", `
            <div class="bank__operation__card" data-id="0">
                <span id="operationDate">${actionHistory[action].date}</span>
                <div class="bank__operation__card__flex">
                    <h1 id="operationComment">${actionHistory[action].comment}</h1>
                    <p><span id="operationSum">${actionHistory[action].sum}</span>$</p>
                </div>     
            </div>
            `)
    }
}
loadHistory()
function clearHistory() {
    operationContainer.innerHTML = ''
}

function moneyTransfer(){
    let sum = transferSum.value.replace(/\D/g, '')
    let cardNum = transferCard.value
    if (bankAccount.balance > sum && sum > 0) {
        bankAccount.balance = bankAccount.balance - sum
        actionHistory[`trans${Object.keys(actionHistory).length}`] = {
            type: 'transfer',
            sum: '-'+sum,
            comment: `Переказ на картку: ${cardNum}`,
            date: `${new Date().getDate()}` + '.' + `${new Date().getMonth() + 1}` + '.' + `${new Date().getFullYear()}`
        }
        clearHistory()
        loadHistory()
        sumInMessage.innerHTML = actionHistory[`trans${Object.keys(actionHistory).length-1}`].sum + '$'
        transactionForm.classList.toggle('disabled')
        message.classList.toggle('disabled')
        messageTimer(message)
    } else {
        transactionForm.classList.toggle('disabled')
        messageError.classList.toggle('disabled')
        messageTimer(messageError)
    }
    return loadData()
}


// MONEY TRANSFER










// https://stackoverflow.com/questions/73745068/how-to-add-space-between-every-4-numbers HOW TO ADD SPACE BEETWEEN EVERY 4 NUMBERS

// TRANSFER FORM

const closeFormBtn = document.querySelector('#closeBtn')
const transactionForm = document.querySelector('.transactionForm')

closeFormBtn.onclick = (event) => {
    transactionForm.classList.toggle("disabled")
}

const transferSum = document.querySelector('#transferSum')
const transferCard = document.querySelector('#trasferTo')
const openTransferForm = document.querySelector('#openTransferForm')

openTransferForm.onclick = (event) => {
    transactionForm.classList.toggle('disabled')
}

// START ANIMATION WHEN TRANSACTION SUCCESS

const sumInMessage = document.querySelector('#sumToMessage')
const message = document.querySelector('.message__container')

const messageError = document.querySelector('.message__container_error')

function messageTimer(msg){ setTimeout(() => {
    msg.classList.toggle('disabled')
}, 3000)}