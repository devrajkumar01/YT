// Typing Effect
const text = ["Creator", "Vlogger", "Unfiltered Devraj"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  if (index >= text.length) index = 0;
  currentText = text[index];

  if (!isDeleting) {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    document.getElementById("typing").textContent =
      currentText.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      index++;
    }
  }
  setTimeout(typeEffect, 100);
}
typeEffect();

// Fade In On Scroll
const faders = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Auto Slide
function autoSlide(sliderId) {
  const slider = document.getElementById(sliderId);
  let index = 0;
  setInterval(() => {
    index++;
    if (index >= slider.children.length) index = 0;
    slider.style.transform = translateX(-${index * 100}%);
  }, 3000);
}

autoSlide("videoSlider");
autoSlide("postSlider");
