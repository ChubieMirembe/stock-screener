// Sample stock data
const stocks = [
    { name: "Stock A", pe: 15 },
    { name: "Stock B", pe: 20 },
    { name: "Stock C", pe: 10 },
    { name: "Stock D", pe: 25 },
    { name: "Stock E", pe: 18 },
    { name: "Stock F", pe: 22 },
    { name: "Stock G", pe: 17 },
    { name: "Stock H", pe: 30 },
    { name: "Stock I", pe: 12 },
    { name: "Stock J", pe: 28 },
    { name: "Stock K", pe: 14 },
    { name: "Stock L", pe: 19 },
    { name: "Stock M", pe: 24 },
    { name: "Stock N", pe: 16 },
    { name: "Stock O", pe: 21 },
    { name: "Stock P", pe: 23 },
    { name: "Stock Q", pe: 13 },
    { name: "Stock R", pe: 27 },
    { name: "Stock S", pe: 26 },
    { name: "Stock T", pe: 11 },
    { name: "Stock U", pe: 29 }
];

// Function to display stocks in table format
function displayStocks() {
    const stockTable = document.getElementById("stockTable").getElementsByTagName('tbody')[0];
    stockTable.innerHTML = "";

    stocks.forEach(stock => {
        const row = stockTable.insertRow();
        const nameCell = row.insertCell(0);
        const peCell = row.insertCell(1);

        nameCell.textContent = stock.name;
        peCell.textContent = stock.pe;
    });
}

// Function to filter stocks based on P/E ratio
function filterStocks() {
    const peFilterValue = parseFloat(document.getElementById("pe").value);
    const peOperator = document.getElementById("peOperator").value;

    const filteredStocks = stocks.filter(stock => {
        switch(peOperator) {
            case "gt":
                return stock.pe > peFilterValue;
            case "lt":
                return stock.pe < peFilterValue;
            case "gte":
                return stock.pe >= peFilterValue;
            case "lte":
                return stock.pe <= peFilterValue;
            default:
                return false;
        }
    });

    displayFilteredStocks(filteredStocks);
}

// Function to display filtered stocks
function displayFilteredStocks(filteredStocks) {
    const stockTable = document.getElementById("stockTable").getElementsByTagName('tbody')[0];
    stockTable.innerHTML = "";

    filteredStocks.forEach(stock => {
        const row = stockTable.insertRow();
        const nameCell = row.insertCell(0);
        const peCell = row.insertCell(1);

        nameCell.textContent = stock.name;
        peCell.textContent = stock.pe;
    });
}

// Display stocks initially
displayStocks();
