/*PROPIEDADES OPCIONALES (?) Las interfaces con propiedades opcionales se escriben de manera similar a otras interfaces,
y cada propiedad opcional se indica con una ?al final del nombre de la propiedad en la declaración.

PROPIEDADES SOLO LECTURA (readonly)
Algunas propiedades solo deberían poder modificarse cuando se crea un objeto por primera vez.
Puede especificar esto poniendo readonlyantes del nombre de la propiedad:

PROPIEDADES PERSONALIZADAS CUALQUIER VALOR  [propName: string]: any;


*/

// Task1 - Teacher's Interface
interface teacherInterface {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attributeName: string]: any;
}
// Task2 - Extending Teacher class
interface Directors extends teacherInterface {
  numberOfReports: number;
}

// Task3 - Printing teachers
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
): string {
  return `${firstName[0]}. ${lastName}`;
};

// Task4 - Writing a Class
interface studentInterface {
  fisrtName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentInterface {
  public fisrtName: string;
  public lastName: string;

  constructor(fisrtName: string, lastName: string) {
    this.fisrtName = fisrtName;
    this.lastName = lastName;
  }

  public workOnHomework(): string {
    return "Currently working HOME";
  }

  public displayName(): string {
    return `${this.fisrtName}`;
  }
}

// Sample Task1
/*const teacher3: teacherInterface = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  age: 45,
};

console.log(teacher3);*/

// Sample Task2
/*const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);*/

// Sample Task3
//console.log(printTeacher("John", "Doe"));

// sample task4
/*const student: StudentClass = new StudentClass("Jhon", "Doe");
console.log(
  `${student.fisrtName} ${student.lastName} ${student.workOnHomework()}`
);*/
