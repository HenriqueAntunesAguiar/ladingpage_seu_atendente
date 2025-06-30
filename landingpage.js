const elemento = document.getElementById('my__background_word_div');
const target = document.getElementById('my__chat_section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      elemento.classList.add('hidden');
    } else {
      elemento.classList.remove('hidden');
    }
  });
}, {
  threshold: 0.5 // Pode ajustar: 0.5 significa metade da seção visível
});

observer.observe(target);