// Show the management window
function showManageWindow() {
    const manageWindow = document.getElementById("manage-window");
    const manageList = document.getElementById("manage-list");
    const list = document.querySelector(".square .list");

    // Clear the current management list
    manageList.innerHTML = '';

    // Copy all list items into the management list
    list.querySelectorAll("li").forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.textContent;
        addEditDeleteButtons(li); // Add buttons to each item
        manageList.appendChild(li);
    });

    manageWindow.classList.add("active"); // Add 'active' class to show modal
}

// Close the management window
function closeManageWindow() {
    const manageWindow = document.getElementById("manage-window");
    manageWindow.classList.remove("active"); // Remove 'active' class to hide modal
}

// Add Item function
function addItem() {
    const input = document.getElementById("new-item-input");
    const manageList = document.getElementById("manage-list");

    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;
        addEditDeleteButtons(li); // Add Edit/Delete buttons
        manageList.appendChild(li);

        // Clear the input field after adding the item
        input.value = "";
    }
}

// Function to add Edit/Delete buttons to each list item
function addEditDeleteButtons(li) {
    // Edit button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editItem(li);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => li.remove();

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
}

// Function to edit a list item
function editItem(li) {
    const newText = prompt("Edit item:", li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText;
    }
}
