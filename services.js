var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "миття голови": "100 грн",
  "погладити кота": "2000 грн",
  "виговоритись про наболівше": "0 грн",
  "розкинути таро": "99 грн",

  price: function() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        total += parseInt(this[key]);
      }
    }
    return total;
  },

  minPrice: function() {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        let price = parseInt(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },

  maxPrice: function() {
    let max = -Infinity;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        let price = parseInt(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  }
};

console.log("Загальна вартість послуг:", services.price(), "грн");
console.log("Мінімальна ціна послуги:", services.minPrice(), "грн");
console.log("Максимальна ціна послуги:", services.maxPrice(), "грн");
