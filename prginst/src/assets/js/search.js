// Sample list of items to search through
const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
];

// Function to filter and display matching items
function filterItems() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = ""; // Clear previous results

    // Filter items based on the search input
    const filteredItems = items.filter(item => item.toLowerCase().includes(searchText));

    // Display the filtered items
    filteredItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        resultsList.appendChild(listItem);
    });
}

// Attach the filterItems function to the input's "input" event
document.getElementById("searchInput").addEventListener("input", filterItems);

// Optionally, you can also trigger the search when the search icon is clicked
document.getElementById("searchIcon").addEventListener("click", filterItems);
