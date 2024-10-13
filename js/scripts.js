/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
const text = "welcome to our website";
let index = 0;
const typingSpeed = 100; // Waktu delay untuk mengetik
const pauseTime = 1000; // Waktu jeda sebelum mengulang

function type() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(() => {
      index = 0;
      document.getElementById("typing-text").innerHTML = ''; // Kosongkan teks sebelum mengetik ulang
      type(); // Mulai mengetik ulang
    }, pauseTime);
  }
}

type();
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-img');

    // Menambahkan kelas 'visible' setelah waktu tertentu
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add('visible');
        }, index * 300); // Delay untuk setiap gambar
    });
});


