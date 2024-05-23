
// Create an instance of ListIteam
const listItem = new ListIteam();

// Function to add an item
function addIteam() {
    const itemInput = document.getElementById("itemInput");
    const itemText = itemInput.value.trim();

    if (itemText.length > 0) {
        listItem.addIteam(itemText);
        itemInput.value = "";
    }
}



// Event listener for "Add" button click
document.getElementById("addButton").addEventListener("click", addIteam);

// Event listener for "Enter" key press in input field
document.getElementById("itemInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addIteam();
    }
});


// Load items from local storage when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    listItem.loadItemFromLocalStorage();
});