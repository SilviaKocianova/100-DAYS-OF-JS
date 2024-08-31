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

    transactions.forEach(({ id, name, amount, date, type}) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="name">
                <h4>${transaction.name}</h4>
                <p>${new Date(transaction.date).toLocaleDateString()}</p>
            </div>

            <div class="amount ${type}">
                <span>${formatter.format(amount)}</span>
            </div>

            <div class="action">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
        `;

        list.appendChild(li);
    });
}

renderList();
