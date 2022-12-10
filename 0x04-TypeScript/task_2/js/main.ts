// Task5 - Advanced types Part 1
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && salary < 500) return new Teacher();
  return new Director();
};
/*TypeScript tiene una característica llamada protección de tipo. Una protección de tipos es una expresión que realiza una verificación en tiempo de ejecución que asegura que el tipo es inmutable en un campo determinado (es decir, sabremos que es solo de un tipo en el alcance y que el tipo no cambiará mientras estemos en el mismo campo). Para definir una protección de tipo, solo necesitamos definir una función cuyo tipo de retorno sea un predicado de tipo booleano:

TypeScript
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}
La sentencia pet is Fish es de tipo booleano en este ejemplo. La instrucción booleana tiene el formato parameterName is Type, donde el nombre del parámetro  parameterName debe ser de la firma de la función del tipo actual.

Cada vez que se llama a la función con una isFishvariable , TypeScript limitará esa variable a su tipo, el tipo dado si el tipo original es compatible.*/
// Task6 -Creating functions specific to employees
const isDirector = (employee: Director | Teacher): employee is Director => {
  return employee instanceof Director;
};

const executeWork = (employee: Director | Teacher): string => {
  return isDirector(employee)
    ? employee.workDirectorTasks()
    : employee.workTeacherTasks();
};

//task7 - string literal type: https://www.geeksforgeeks.org/what-are-sltring-literal-types-in-tpescript/#:~:text=The%20string%20literal%20type%20allows,by%20the%20string%20litera%20type.

type Subjects = "Math" | "History";

const teachClass = (todayClass: Subjects): string => {
  return `Teaching ${todayClass}`;
};

// Sample task5

/*console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee("$500"));*/

// sample task6
/*console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));*/

// sample task7
console.log(teachClass("Math"));
console.log(teachClass("History"));
