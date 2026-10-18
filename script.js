// AI-generated: click a card to show/hide its extra details
const cards = document.querySelectorAll('.skill-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');

    const hint = card.querySelector('.hint');
    if (card.classList.contains('expanded')) {
      hint.textContent = 'Click to hide details';
    } else {
      hint.textContent = 'Click to see more';
    }
  });
});