function runTypingEffect() {
  const text = "I am Nguyễn Quốc Đạt.";
  const typingElement = document.getElementById("typing-text");
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}

function typeText(text, typingElement, delay) {
  [...text].forEach((ele, i) =>
    setTimeout(() => (typingElement.textContent += ele), delay * i)
  );
}

document.addEventListener("DOMContentLoaded", runTypingEffect);
