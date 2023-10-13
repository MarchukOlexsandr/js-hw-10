const user = {
  firstName: "John",
  lastName: "Doe",
  friends: [
    { firstName: "Jane", lastName: "Doe" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Alice", lastName: "Wonderland" },
  ],
};

// Функція "friendsInfo" для виведення імен і прізвищ друзів користувача:
function friendsInfo() {
  this.friends.forEach(function (friend) {
    console.log(`Ім'я: ${friend.firstName}; Прізвище: ${friend.lastName}`);
  });
}

// Викликаємо "friendsInfo" для об'єкта "user":
friendsInfo.call(user);

// Створимо ще один об'єкт "user" зі своїми властивостями та масивом друзів:
const user2 = {
  name: "Juan",
  surname: "Hernandez",
  friends: [
    { name: "Maria", surname: "Garcia" },
    { name: "Carlos", surname: "Rodriguez" },
    { name: "Ana", surname: "Lopez" },
  ],
};

// Викликаємо "friendsInfo" для другого об'єкта "user":
friendsInfo.call(user2);
