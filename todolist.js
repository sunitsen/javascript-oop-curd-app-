// Create ListIteam class
class ListIteam {
    constructor() {
        this.items = [];
    }

    addIteam(itemText) {
        const item = {
            note: itemText
        };
        this.items.push(item);
        this.saveItemToLocalStorage();
        this.renderItem();
    }

    editItem(index, newText) {
        this.items[index].note = newText;
        this.saveItemToLocalStorage();
        this.renderItem();
    }

    deleteItem(index) {
        this.items.splice(index, 1);
        this.saveItemToLocalStorage();
        this.renderItem();
    }

    saveItemToLocalStorage() {
        localStorage.setItem("items", JSON.stringify(this.items));
    }

    loadItemFromLocalStorage() {
        const storedItems = localStorage.getItem('items');
        this.items = JSON.parse(storedItems) || [];
        this.renderItem();
    }

    renderItem() {
        const itemList = document.getElementById("ItemList");
        itemList.innerHTML = "";

        this.items.forEach((item, index) => {
            const singleList = document.createElement("li");
            singleList.innerHTML = `
                <span>${item.note}</span>
                <span>
                    <button class="edit-button" onClick="listItem.editItem(${index}, prompt('Edit Item', '${item.note}'))">Edit</button>
                    <button class="delete-button" onClick="listItem.deleteItem(${index})">Delete</button>
                </span>
            `;
            itemList.appendChild(singleList);
        });
    }
}