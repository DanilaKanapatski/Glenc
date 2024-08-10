let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

let currSlide = 0;

function moveSlide1(direction) {
  const slides1 = document.querySelector('.slides-1');
  const totalSlides1 = document.querySelectorAll('.slide-1').length;

  currSlide = (currSlide + direction + totalSlides1) % totalSlides1;
  slides1.style.transform = `translateX(-${currSlide * 100}%)`;
}

let curSlide = 0;

function moveSlide2(direction) {
  const slides2 = document.querySelector('.slides-2');
  const totalSlides2 = document.querySelectorAll('.slide-2').length;

  curSlide = (curSlide + direction + totalSlides2) % totalSlides2;
  slides2.style.transform = `translateX(-${curSlide * 100}%)`;
}

//

document.addEventListener("DOMContentLoaded", function() {
  const orderCallButton = document.getElementById("orderCall");
  const closePopupButton = document.getElementById("closePopup");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("overlay");

  function openPopup() {
      overlay.style.display = "flex";
      popup.style.display = "block";
  }

  function closePopup() {
      overlay.style.display = "none";
      popup.style.display = "none";
  }

  orderCallButton.addEventListener("click", openPopup);
  closePopupButton.addEventListener("click", closePopup);

  overlay.addEventListener("click", function(e) {
      if (e.target === overlay) {
          closePopup();
      }
  });
});

///

window.onscroll = function() {myFunction()};

var header = document.querySelector(".header-links");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function toggleMenu(element) {
  var menu = document.getElementById('dropdown-menu');
  if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }
  element.classList.toggle('active');
}

function toggleDropdown(id) {
  var dropdown = document.getElementById(id);
  if (dropdown.classList.contains('hidden')) {
      dropdown.classList.remove('hidden');
  } else {
      dropdown.classList.add('hidden');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const menuHeader = document.getElementById('menu-header');
  const dropdownMenu1 = document.getElementById('dropdown-menu-1');

  menuHeader.addEventListener('click', function() {
    menuHeader.classList.toggle('active');
      dropdownMenu1.style.display = dropdownMenu1.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuHeader = document.getElementById('menu-header-1');
  const dropdownMenu1 = document.getElementById('dropdown-menu-2');

  menuHeader.addEventListener('click', function() {
    menuHeader.classList.toggle('active');
      dropdownMenu1.style.display = dropdownMenu1.style.display === 'block' ? 'none' : 'block';
  });
});

function changeImage(imageName, colorName) {
  document.getElementById('main-image').src = imageName;
  document.getElementById('color-name').textContent = colorName;
}

function changeImage1(imageName, colorName) {
  document.getElementById('main-image-1').src = imageName;
  document.getElementById('color-name-1').textContent = colorName;
}

document.addEventListener('DOMContentLoaded', function () {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
      form.addEventListener('submit', function (event) {
          const checkbox = form.querySelector('input[type="checkbox"]');
          if (!checkbox.checked) {
              alert('Пожалуйста, согласитесь с условиями перед отправкой.');
              event.preventDefault();
          }
      });
  });
});