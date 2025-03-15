// Restock Alerts
function checkStock() {
    let clothesStock = document.getElementById('clothes-stock').innerText;
    let shoesStock = document.getElementById('shoes-stock').innerText;

    if (clothesStock < 5) document.getElementById('clothes-alert').innerText = "Restock Needed!";
    if (shoesStock < 5) document.getElementById('shoes-alert').innerText = "Restock Needed!";
}

setInterval(checkStock, 5000);

// Profit Calculation
function calculateProfit() {
    let revenue = 50000; // Example revenue
    let expenses = 20000; // Example expenses
    let profit = revenue - expenses;
    document.getElementById("profit").innerText = `KES ${profit}`;
}

// Button Click Alert
document.addEventListener("DOMContentLoaded", () => {
    let shopNowButton = document.querySelector(".btn");
    if (shopNowButton) {
        shopNowButton.addEventListener("click", () => {
            alert("Welcome to Aesthetic Labels! Start Shopping Now.");
        });
    }
});
