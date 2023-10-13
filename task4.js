const user = {
  name: "John",
  balance: 500,

  addMoney(amount) {
    this.balance += amount;
  },

  balanceInfo() {
    console.log(`Поточний баланс користувача: ${this.balance} грн.`);
  },
};

const users = [
  { name: "Alice", balance: 300 },
  { name: "Bob", balance: 200 },
  { name: "Charlie", balance: 1000 },
];

// Використовуємо метод "forEach()" для додавання грошей кожному користувачу:
users.forEach(function (user) {
  user.addMoney.call(user, 100);
});

// Виводимо оновлений масив користувачів:
console.log(users);

// Використовуємо метод "filter()" для вибору користувачів з балансом більше 500:
const wealthyUsers = users.filter(function (user) {
  return user.balance > 500;
});

// Виводимо масив користувачів з високим балансом:
console.log(wealthyUsers);

// Використовуємо метод "map()" для створення масиву балансів користувачів:
const userBalances = users.map(function (user) {
  return user.balance;
});

// Виводимо масив балансів:
console.log(userBalances);

// Викликаємо метод "balanceInfo" для першого користувача:
user.balanceInfo.call(users[0]);
