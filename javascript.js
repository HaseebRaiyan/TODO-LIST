// Get the form and input elements
var form = document.getElementById("todo-form");
var input = document.getElementById("todo-input");

// Get the list element
var list = document.getElementById("todo-list");

// Add event listener for form submit
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Get the value of the input field
  var value = input.value.trim();

  // Check if the input value is not empty
  if (value !== "") {
    // Create a new list item element
    var item = document.createElement("li");
    item.className = "todo-item";
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var label = document.createElement("label");
    label.innerText = value;

    // Add the checkbox and label to the list item
    item.appendChild(checkbox);
    item.appendChild(label);

    // Add the list item to the list
    list.appendChild(item);

    // Clear the input field
    input.value = "";
  }
});
