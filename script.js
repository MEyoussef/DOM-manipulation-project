// Selecting the input fields for name, gender, salary, and city from the HTML document
const full_name_input = document.querySelector("#full_name_input");
const gender_input = document.querySelector("#gender_input");
const salary_input = document.querySelector("#salary_input");
const city_input = document.querySelector("#city_input");

// Selecting the submit button element
const submit_button = document.querySelector("#submit_data");

// Creating a new table element in the document and selecting the body of the document
const HTML_table = document.createElement("table");
const HTML_body = document.querySelector("body");

// Adding the newly created table to the body of the document
HTML_body.appendChild(HTML_table);

// Creating a new table row inside the table using DOM manipulation
const HTML_table_rows = document.createElement("tr");
HTML_table.appendChild(HTML_table_rows);

// Creating 5 table header cells (th) inside the table row dynamically
for (let i = 1; i <= 5; i++) {
  const HTML_table_cells = document.createElement("th");
  HTML_table_rows.appendChild(HTML_table_cells);
  HTML_table_cells.classList.add(`table_cell_number${i}`); // Adding a class for each cell
}

// Function to style the table by setting borders, width, and text alignment
function HTML_table_style() {
  HTML_table.style.borderCollapse = "collapse"; // Merging borders between cells
  HTML_table.style.width = "100%"; // Setting table width to 100% of the container
  HTML_table.style.textAlign = "center"; // Aligning text to the center of the cells
}

// Apply the table styling function
HTML_table_style();

// Selecting each header cell by its dynamically added class for further modifications
const table_cell_number1 = document.querySelector(".table_cell_number1");
const table_cell_number2 = document.querySelector(".table_cell_number2");
const table_cell_number3 = document.querySelector(".table_cell_number3");
const table_cell_number4 = document.querySelector(".table_cell_number4");

// Adding descriptive text content for each header cell (Name, Gender, Salary, City, Extra Buttons)
table_cell_number1.textContent = "name";
table_cell_number2.textContent = "gender";
table_cell_number3.textContent = "salary";
table_cell_number4.textContent = "city";

// Storing all table header cells in an array for styling purposes
const cells = [
  table_cell_number1,
  table_cell_number2,
  table_cell_number3,
  table_cell_number4,
];

// Function to style each cell with a border, font weight, and padding
function styleCells(cells_array) {
  cells_array.forEach((cell) => {
    cell.style.border = "1px solid black"; // Adding black border to each cell
    cell.style.fontWeight = "15px"; // Setting font weight (15px)
    cell.style.padding = "7px"; // Adding padding inside each cell
  });
}

// Apply the cell styling function to the header cells
styleCells(cells);

// Adding a click event listener to the submit button
submit_button.addEventListener("click", () => {
  // Check if all input fields have values
  if (
    full_name_input.value != "" &&
    gender_input.value != "" &&
    salary_input.value != "" &&
    city_input.value != ""
  ) {
    // Create a new table row for the input data
    const HTML_table_rows = document.createElement("tr");
    HTML_table.appendChild(HTML_table_rows);

    // Dynamically create 4 table data (td) cells for the input data
    for (let i = 1; i <= 4; i++) {
      const HTML_table_cells = document.createElement("td");
      HTML_table_rows.appendChild(HTML_table_cells);
      HTML_table_cells.classList.add(`table_cell__element_number${i}`); // Add a class for each cell
    }

    // Apply table styling to the newly created rows and cells
    HTML_table_style();

    // Get the last added row (most recent one) and select all cells inside it
    const lastRow = HTML_table.querySelector("tr:last-child");
    const cells = lastRow.querySelectorAll("td");

    // Assign each cell its respective value from the input fields
    const cel1 = cells[0]; // Full name
    const cel2 = cells[1]; // Gender
    const cel3 = cells[2]; // Salary
    const cel4 = cells[3]; // City

    cel1.textContent = full_name_input.value;
    cel2.textContent = gender_input.value;
    cel3.textContent = salary_input.value;
    cel4.textContent = city_input.value;

    const edit_btn = document.createElement("button");
    edit_btn.textContent = "edit";
    edit_btn.style.padding = "7px";
    edit_btn.style.marginRight = "10px";
    edit_btn.style.backgroundColor = "rgb(222 235 247)";
    edit_btn.style.border = "none";
    lastRow.appendChild(edit_btn);
    edit_btn.addEventListener("click", () => {
      full_name_input.value = cel1.textContent;
      gender_input.value = cel2.textContent;
      salary_input.value = cel3.textContent;
      city_input.value = cel4.textContent;

      lastRow.remove();
    });

    const delete_btn = document.createElement("button");
    delete_btn.textContent = "delete";
    delete_btn.style.padding = "7px";
    delete_btn.style.backgroundColor = "rgb(222 235 247)";
    delete_btn.style.border = "none";
    lastRow.appendChild(delete_btn);
    delete_btn.addEventListener("click", () => lastRow.remove());

    // Array for the new cells to apply the same styling
    const cells_element = [cel1, cel2, cel3, cel4];
    styleCells(cells_element); // Apply styles to the new cells

    // Clear the input fields after submission
    full_name_input.value = "";
    gender_input.value = "";
    salary_input.value = "";
    city_input.value = "";

    // Focus on the full name input field for a new entry
    full_name_input.focus();
  } else {
    // Show an alert if any input fields are empty
    alert("data inputs can not be empty");
  }
});
