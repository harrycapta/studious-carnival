document.addEventListener('DOMContentLoaded', (event) => {
  const title = document.getElementById('title');
  const text = title.textContent;
  title.textContent = '';

  // Creare gli span per ogni carattere
  text.split('').forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.classList.add('character');
      title.appendChild(span);
  });

  const characters = document.querySelectorAll('.character');

  function swapRandomCharacters() {
      const index1 = Math.floor(Math.random() * characters.length);
      const index2 = Math.floor(Math.random() * characters.length);

      // Evita di scambiare lo stesso carattere
      if (index1 === index2) return;

      const temp = characters[index1].textContent;
      characters[index1].textContent = characters[index2].textContent;
      characters[index2].textContent = temp;
  }

  setInterval(swapRandomCharacters, 1000); // Cambia caratteri ogni secondo
});
