// import getDataFromForm from '../utils/getDataFromForm';
import changeSection from '../utils/changeSection';

const radioButtonController = (blockId) => {
  /**
   * Add event listeners
   */
  const radioInputs = document.querySelectorAll(
    `.bs-news__nav__pagination__radio-box__label__input[data-block-id="${blockId}"]`
  );

  if (radioInputs) {
    radioInputs.forEach((input) => {
      input.addEventListener('change', (e) => {
        // const data = getDataFromForm(blockId);
        const radioBox = document.querySelector(
          `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
        );
        const offset = parseInt(e.target.value, 10);
        radioBox.dataset.offset = offset;
        changeSection(offset, blockId);
      });
    });
  }
};

export default radioButtonController;
