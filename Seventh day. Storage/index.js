// LocalStorage
// LocalStorage - bu browserni 5-10mb oralig'ida kichik  faqat primitiv string tipidagi ma'lumotlarni saqlash uchun kerak bo'ladigan xotirasi

// Local Storage - Brauzer yopilganda saqlangan ma'lumotlar o'chirilmaydi.

// Session Storage - Ma'lumotlar faqat sessiya uchun saqlanadi va brauzer yopilganda o'chiriladi.

// Cookies - Ma'lumotlarning amal qilish muddati ma'lum bir vaqtda tugashi mumkin.

// setItem('key' , value) - localStoragega ma'lumot saqlash uchun ishlatiladi

// getItem(key) - localStoragedagi ma'lumot olish uchun ishlatiladi

// clear() - localStoragedagi ma'lumotlarni tozalab beradi.

// localStorage faqat primitive tipidagi stringlarni qabul qilganligi sababli Arraylarni to'gridan to'g'ri saqlay olmaymiz

// setItem('key' , JSON.stringify(value)) - localStoragega ma'lumotni array ko'rinishida  saqlash uchun ishlatiladi

// JSON.parse(localStorage.getItem('names')) -  localStoragedagi array ko'rinishidagi ma'lumot olish uchun ishlatiladi

// localStorage.setItem("name", "John");

// localStorage.getItem("name");

// localStorage.removeItem('name')

// sessionStorage.setItem('name' , 'John')


const h1 = document.querySelector("#h1");
const btn = document.querySelector("#btn");

document.addEventListener("DOMContentLoaded", function () {
  const saveH1 = localStorage.getItem("headingText");
  if (saveH1) {
    h1.textContent = saveH1;
  }
  btn.addEventListener("click", function () {
    const currentH1Text = h1.textContent;
    const newH1 = currentH1Text === "Olma" ? "Banan" : "Olma";
    h1.textContent = newH1;
    localStorage.setItem("headingText", newH1);
  });
});
