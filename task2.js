const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  speed: 180,
  showInfo() {
    return `Марка: ${this.brand}; Модель: ${this.model}; Рік випуску: ${this.year}`;
  },
};

const location = {
  city: "Київ",
  distance: 400,
};

car.showTime = function () {
  const time = this.distance / this.speed;
  return `Автомобіль ${this.showInfo()} дістанеться міста ${
    location.city
  } за ${time} годин.`;
};

// Приклад використання:
console.log(car.showInfo());
console.log(car.showTime());
