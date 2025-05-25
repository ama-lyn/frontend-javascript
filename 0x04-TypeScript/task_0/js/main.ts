interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Hayes",
  lastName: "Smith",
  age: 20,
  location: "New York"
};

const studentB: Student = {
  firstName: "John",
  lastName: "Kamau",
  age: 21,
  location: "Nairobi"
};

const studentsList: Student[] = [studentA, studentB];

const table = document.createElement("table");
const headerRow = document.createElement("tr");
const headerFirstName = document.createElement("th");
const headerLocation = document.createElement("th");

headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

studentsList.forEach(student => {
  const row = document.createElement("tr");
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  
  table.appendChild(row);
});

document.body.appendChild(table);