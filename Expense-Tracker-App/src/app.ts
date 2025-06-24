//Access DOM Elements from TypeScript
//Typecasting expType as HTMLSelectElement
const expenseType = document.getElementById(
  "expense-type"
)! as HTMLSelectElement;

const expenseDescription = document.getElementById("desc")! as HTMLInputElement;
const expenseAmount = document.getElementById("amount")! as HTMLInputElement;
const expenseButton = document.querySelector(
  ".add-expense-btn"
)! as HTMLButtonElement;

const totalExpenseAmount = document.querySelector(".total-expense-amount")!;

const debitCard = document.querySelector(
  ".expense-debit-item-container"
)! as HTMLDivElement;
const creditCard = document.querySelector(
  ".expense-credit-item-container"
)! as HTMLDivElement;

let expenseItems: Expense[] = [];
class Expense {
  private static currentId: number = 0;
  readonly id: number = 0;
  constructor(
    public type: "credit" | "debit",
    public description: string,
    public amount: number
  ) {
    this.id = ++Expense.currentId;
  }
}
let totalAmount: number = 0;
expenseButton.addEventListener("click", (e) => {
  e.preventDefault();
  let type: "credit" | "debit" =
    expenseType.value === "credit" ? "credit" : "debit";
  let description = expenseDescription.value;
  let amount = +expenseAmount.value;

  //calculating the total amount
  if(type==='credit') totalAmount+=amount;
  else totalAmount-=amount;
  totalExpenseAmount.textContent ='Aval. Balance '+totalAmount.toString();

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
    containerDiv?.insertAdjacentHTML(
      "beforeend",
    template
    );
  }
}


function deleteExpense(id:number){
 const exp=expenseItems.find((element)=>{
    return element.id ===id;
 })  as Expense;
 
 let index:number=expenseItems.indexOf(exp);
 expenseItems.splice(index,1);
 displayExpenseItems();

 updateBalance(exp);
}

function updateBalance(expense:Expense){
    let amount=expense.amount;
    if(expense.type==='credit') {
        totalAmount-=amount;
        totalExpenseAmount.textContent ='Aval. Balance '+totalAmount.toString();
    }
    else {
        totalAmount+=amount;
        totalExpenseAmount.textContent ='Aval. Balance '+totalAmount.toString();
    }
   
}