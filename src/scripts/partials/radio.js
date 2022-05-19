import radioListener from '../controllers/radio';
import radioButtonController from '../controllers/radioButtonController';

const renderRadioButtonsTemplate = (sectionsCount, blockId) => {
  const radioButtonsWrapper = document.querySelector(
    `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
  );

  radioButtonsWrapper.innerHTML = '';

  const template = document.querySelector(
    '#bs_template__mbp_news_radio-button'
  );

  for (let index = 0; index < sectionsCount; index += 1) {
    const radio = template.content.cloneNode(true);
    const input = radio.querySelector('input');
    const span = radio.querySelector('span');
    input.value = index;
    span.dataset.value = index;
    if (index === 0) {
      span.classList.add(
        'bs-news__nav__pagination__radio-box__label__control--checked'
      );
    }
    radioButtonsWrapper.appendChild(radio);
  }

  radioListener(radioButtonsWrapper, blockId);
  radioButtonController(blockId);
};

export default renderRadioButtonsTemplate;
