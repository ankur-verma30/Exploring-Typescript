"use strict";
const expenseType = document.getElementById("expense-type");
const expenseDescription = document.getElementById("desc");
const expenseAmount = document.getElementById("amount");
const expenseButton = document.querySelector(".add-expense-btn");
const totalExpenseAmount = document.querySelector(".total-expense-amount");
const debitCard = document.querySelector(".expense-debit-item-container");
const creditCard = document.querySelector(".expense-credit-item-container");
let expenseItems = [];
class Expense {
    constructor(type, description, amount) {
        this.type = type;
        this.description = description;
        this.amount = amount;
        this.id = 0;
        this.id = ++Expense.currentId;
    }
}
Expense.currentId = 0;
let totalAmount = 0;
expenseButton.addEventListener("click", (e) => {
    e.preventDefault();
    let type = expenseType.value === "credit" ? "credit" : "debit";
    let description = expenseDescription.value;
    let amount = +expenseAmount.value;
    if (type === 'credit')
        totalAmount += amount;
    else
        totalAmount -= amount;
    totalExpenseAmount.textContent = 'Aval. Balance ' + totalAmount.toString();
    const exp = new Expense(type, description, amount);
    expenseItems.push(exp);
    displayExpenseItems();
});
function displayExpenseItems() {
    debitCard.innerHTML = "";
    creditCard.innerHTML = "";
    for (let i = 0; i < expenseItems.length; i++) {
        let expItem = expenseItems[i];
        let containerDiv = expItem.type === "credit" ? creditCard : debitCard;
        let cssClass = expItem.type === "credit" ? "credit-item" : "debit-item";
        let template = `
    <div class="${cssClass}">
    <div class="exp-desc">${expItem.description}</div>
    <div class="exp-amt">${expItem.amount}</div>
    <div class="exp-delete">
    <button class="delete-expense" onclick=deleteExpense(${expItem.id})>X</button>
    </div>
    </div>

    `;
        containerDiv === null || containerDiv === void 0 ? void 0 : containerDiv.insertAdjacentHTML("beforeend", template);
    }
}
function deleteExpense(id) {
    const exp = expenseItems.find((element) => {
        return element.id === id;
    });
    let index = expenseItems.indexOf(exp);
    expenseItems.splice(index, 1);
    displayExpenseItems();
    updateBalance(exp);
}
function updateBalance(expense) {
    let amount = expense.amount;
    if (expense.type === 'credit') {
        totalAmount -= amount;
        totalExpenseAmount.textContent = 'Aval. Balance ' + totalAmount.toString();
    }
    else {
        totalAmount += amount;
        totalExpenseAmount.textContent = 'Aval. Balance ' + totalAmount.toString();
    }
}
