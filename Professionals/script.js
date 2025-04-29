function show__card__professionals__details(button) {
    const card = button.closest('.card__professionals'); // sobe até o card mais proximo
    const details = card.querySelector('.card__professionals__details');
    details.style.display = (details.style.display === 'none') ? 'block' : 'none';
  }