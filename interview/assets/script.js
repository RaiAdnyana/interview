
  document.querySelectorAll('.question').forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      answer.style.display =
        answer.style.display === 'block' ? 'none' : 'block';
    });
  });

  document.querySelectorAll('.toggle-status').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const article = btn.closest('article');
      article.classList.toggle('ready');
      article.classList.toggle('not-ready');

      btn.textContent =
        article.classList.contains('ready')
          ? 'Siap'
          : 'Belum Siap';
    });
  });
