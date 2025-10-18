// Load existing data from localStorage
document.addEventListener("DOMContentLoaded", showStudents);

// Add student
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let dept = document.getElementById("dept").value;

  if (!name || !roll || !dept) {
    alert("Please fill all fields!");
    return;
  }

  let student = { name, roll, dept };

  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentForm").reset();
  showStudents();
});

// Display student data
function showStudents() {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  let tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    let row = `<tr>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.dept}</td>
      <td><button class="delete-btn" onclick="deleteStudent(${index})">Delete</button></td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Delete student
function deleteStudent(index) {
  let students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  showStudents();
}
