const el = document.querySelector(".typewriter__text");

const lines = [
  "",
];

let lineIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = lines[lineIndex];

  if (!deleting) {
    el.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800); // pause before deleting
      return;
    }
  } else {
    el.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      lineIndex = (lineIndex + 1) % lines.length;
    }
  }

  setTimeout(type, deleting ? 40 : 80);
}

document.addEventListener("DOMContentLoaded", type);
