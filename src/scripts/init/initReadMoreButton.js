(() => {
  const button = document.querySelectorAll('.bs-news__nav__read-more');

  button.forEach((button) => {
    let link = '/aktualnosci/';
    if (document.documentElement.lang === 'en-EN') {
      link = '/en' + link;
    } else if (document.documentElement.lang === 'ru-RU') {
      link = '/ru' + link;
    }

    button.href = link;
  });
})();
