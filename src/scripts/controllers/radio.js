const radioListener = (radioButtonsWrapper, blockId) => {
  const targets = radioButtonsWrapper.querySelectorAll(
    `span[data-block-id=${blockId}]`
  );
  targets.forEach((span) => {
    span.addEventListener('click', (e) => {
      const radioLabels = document.querySelectorAll(
        `label[data-block-id="${e.target.dataset.blockId}"]`
      );

      radioLabels.forEach((label) => {
        const button = label.querySelector('span');
        button.classList.remove(
          'bs-news__nav__pagination__radio-box__label__control--checked'
        );
      });

      e.target.classList.add(
        'bs-news__nav__pagination__radio-box__label__control--checked'
      );
    });
  });
};

export default radioListener;
