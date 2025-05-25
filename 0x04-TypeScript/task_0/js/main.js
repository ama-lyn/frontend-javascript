var studentA = {
    firstName: "Hayes",
    lastName: "Smith",
    age: 20,
    location: "New York"
};
var studentB = {
    firstName: "John",
    lastName: "Kamau",
    age: 21,
    location: "Nairobi"
};
var studentsList = [studentA, studentB];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var headerFirstName = document.createElement("th");
var headerLocation = document.createElement("th");
headerFirstName.textContent = "First Name";
headerLocation.textContent = "Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    var locationCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
