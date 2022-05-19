import './init/initReadMoreButton';
import radioButtonController from './controllers/radioButtonController';
import filterSelectorController from './controllers/filterSelectorController';
import selectorController from './controllers/selectorController';
import buttonsController from './controllers/buttonsController';
import radioListener from './controllers/radio';

(() => {
  const blocks = document.querySelectorAll('[data-block="bs-mbp-news"]');
  blocks.forEach((block) => {
    const blockId = block.id;
    const radioButtonsWrapper = document.querySelector(
      `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
    );
    radioListener(radioButtonsWrapper, blockId);
    radioButtonController(blockId);
    filterSelectorController(blockId);
    selectorController(blockId);
    buttonsController(blockId);
  });
})();
