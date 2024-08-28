const transactions = [
    {
        id: 1,
        name: 'salary',
        amount: 5000,
        date: new Date(),
        type: 'income'
    },
    {
        id: 2,
        name: 'dog',
        amount: 20,
        date: new Date(),
        type: 'expense'
    },
    {
        id: 3,
        name: 'album',
        amount: 400,
        date: new Date(),
        type: 'income'
    }
];

const formatter = new Intl.NumberFormat('en-US', {
    style: "currency",
    currency: "USD",
    signDisplay: "always",
});

const list = document.getElementById("transactionList");
const status = document.getElementById('status');

function renderList() {
    list.innerHTML = "";

    if (transactions.length === 0) {
        status.textContent = 'No transaction.';
        return;
    }

    transactions.forEach((transaction) => {
        const li = document.createElement('li');

        li.innerHTML = `
            <div class="name">
                <h4>${transaction.name}</h4>
                <p>${new Date(transaction.date).toLocaleDateString()}</p>
            </div>

            <div class="amount">
                <span>${formatter.format(transaction.amount)}</span>
            </div>
        `;

        list.appendChild(li);
    });
}

renderList();
