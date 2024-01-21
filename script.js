const displayBalance = document.querySelector("#total-balance");

const calculate = document.querySelector("#calculate");

const bougtItems = document.querySelector("#bougt-items");

let totalBalance = 50000000;  // you can set  amount whatever you like;

displayBalance.innerHTML = `Total balance: $ ${totalBalance} `;

const getItems = () => {
  const itemsInput = document.querySelector("#items");

  const moneySpend = document.querySelector("#money-spend");


  //used trim() method to remove extra white spaces
  const money = parseInt(moneySpend.value.trim()) || 0; // Use parseInt and handle NaN with default value
  const data = itemsInput.value.trim(); 

  
  trackExpenses(data, money);

  totalBalance -= money; // Subtract money from totalBalance

  displayBalance.innerHTML = `Total balance: $ ${totalBalance} `;
};

const trackExpenses = (items, money) => {

    if(items && money!==""){
        const createExpenses = document.createElement('li');

        createExpenses.innerText = `${items}  $ ${money}`;
      
        bougtItems.appendChild(createExpenses);
    }else{
        alert("Something Missing...")
    }


    
    
  
};


calculate.addEventListener("click", getItems); 

