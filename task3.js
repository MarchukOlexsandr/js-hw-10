const students = [
  { name: "Alice", age: 20, rating: 85 },
  { name: "Bob", age: 22, rating: 90 },
  { name: "Charlie", age: 21, rating: 78 },
];

// Додамо метод "вітатися" до кожного студента:
students.forEach(function (student) {
  student.sayHello = function () {
    return `Привіт, мене звати ${this.name}.`;
  };
});

// Використовуємо метод "map()" для створення масиву з привітаннями:
const greetings = students.map(function (student) {
  return student.sayHello();
});

// Виведемо масив з привітаннями:
console.log(greetings);

// Використовуємо метод "filter()" для створення масиву студентів із рейтингом більше 80:
const highRatingStudents = students.filter(function (student) {
  return student.rating > 80;
});

// Виведемо масив студентів із високим рейтингом:
console.log(highRatingStudents);

// Функція для збільшення рейтингу студента на певну кількість балів:
function addRating(points) {
  this.rating += points;
}

// Використаємо "call()" для збільшення рейтингу першого студента на 5 балів:
addRating.call(students[0], 5);

// Виведемо оновлений масив студентів:
console.log(students);
