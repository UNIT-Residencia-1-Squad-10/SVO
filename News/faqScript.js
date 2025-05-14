const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        faqItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });