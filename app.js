const typingElement = document.querySelector('.typing');
const text = typingElement.textContent;
typingElement.textContent = '';
let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;
