/*
    аргумент: 

    автомобіль: volvo=60000, smart=25000;
    одяг: футболка: зелений=10, червоний=16, чорний=25; 
    фрукти з цінами за кілограм: ананас=0.99, яблуко=1.29, лимон=1.69, апельсин=1.50; 
    овочі: картопля, морква, цибуля, часник, селера; 
*/

const priceAutoVolvo = 60000;
const priceAutoSmart = 25000;
const priceAutoMercedes = 30000; // Не було у оригінальній умові, додаю

const priceTShirtGreen = 10;
const priceTShirtRed = 16;
const priceTShirtBlack = 25;

const pricePineapplePerKG = 0.99;
const priceApplePerKG = 1.29;
const priceLimonPerKG = 1.69;
const priceOrangePerKG = 1.5;

const pricePotatoesPerKG = 10;
const priceCarrotsPerKG = 20;
const priceTsibulyaPerKG = 30;
const priceChasnikPerKG = 40;
const priceSeleraPerKG = 50;

/* Демонстрація switch */

/**
 * 
 * @param {string} good 
 * @returns {number}
 */
const getBillPrice = function (good) {
  switch (good) {
    case "volvo":
      return priceAutoVolvo;
    case "smart":
      return priceAutoSmart;
    case "mercedes":
      return priceAutoMercedes;
    case "pineapple":
      return pricePineapplePerKG;
    case "apple":
      return priceApplePerKG;
    case "limon":
      return priceLimonPerKG;
    case "orange":
      return priceOrangePerKG;
    case "tsibulya":
      return priceTsibulyaPerKG + priceAutoMercedes + priceOrangePerKG;
    // І так далі, немає сенсу повністю все писати заради демонстрації switch
    default:
      return 0;
  }
};

// Рахунок для Марії: Mercedes + апельсин + цибуля, якщо Марія купує цибулю;
// По умові ми не продаємо мерседеси :), тому такий рахунок буде сформувати неможливо, але я дописав його
console.log("priceAutoMercedes =", priceAutoMercedes);
console.log("priceOrangePerKG =", priceOrangePerKG);
console.log("priceTsibulyaPerKG =", priceTsibulyaPerKG);
console.log("Рахунок для Марії:", getBillPrice("tsibulya"), "\n");

// Рахунок для Джорджа: volvo, якщо він купує автомобіль
console.log("priceAutoVolvo =", priceAutoVolvo);
console.log("Рахунок для Джорджа:", getBillPrice("volvo"));