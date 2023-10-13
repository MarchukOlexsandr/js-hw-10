const person = {
  name: "John",
  age: 30,
  gender: "male",
  introduce() {
    return `Мене звати ${this.name}, мені ${this.age} років, я ${this.gender}.`;
  },
};

// Приклад використання:
console.log(person.introduce());
person.changeName = function (newName) {
  this.name = newName;
};

// Змінюємо ім'я:
person.changeName("Alice");

// Виведемо оновлену інформацію:
console.log(person.introduce());
