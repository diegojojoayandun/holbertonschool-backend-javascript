/* creates an interface named Student */
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: "Diego",
  lastName: "Jojoa",
  age: 35,
  location: "Pasto",
};

const studentTwo: Student = {
  firstName: "Daniel",
  lastName: "Ruiz",
  age: 30,
  location: "Palmira",
};

const studentList: Array<Student> = [studentOne, studentTwo];

const table = document.createElement("table");
const tbody = document.createElement("tbody");
const thead = document.createElement("thead");
const th = document.createElement("tr");
const thName = document.createElement("th");
const thLocation = document.createElement("th");

studentList.map((student: Student) => {
  const tdName = document.createElement("td");
  const td_location = document.createElement("td");

  const tr = document.createElement("tr");

  tdName.innerText = student.firstName;
  td_location.innerText = student.location;

  tr.appendChild(tdName);
  tr.appendChild(td_location);

  tbody.appendChild(tr);
});

table.appendChild(tbody);
document.body.appendChild(table);
