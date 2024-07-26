let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
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