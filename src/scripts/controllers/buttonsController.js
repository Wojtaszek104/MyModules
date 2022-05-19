const getCurrentPageStatus = (blockId) => {
  const radioBox = document.querySelector(
    `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
  );
  return {
    currentPage: parseInt(radioBox.dataset.offset, 10),
    pages: parseInt(radioBox.dataset.pages, 10),
  };
};

const setCurrentPageStatus = (blockId, currentPage) => {
  const radioBox = document.querySelector(
    `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
  );
  radioBox.dataset.offset = currentPage;
};

const getNextPage = (blockId) => {
  const data = getCurrentPageStatus(blockId);
  if (data.currentPage + 1 < data.pages) {
    setCurrentPageStatus(blockId, data.currentPage + 1);
    const span = document.querySelector(
      `.bs-news__nav__pagination__radio-box__label__control[data-block-id="${blockId}"][data-value="${
        data.currentPage + 1
      }"]`
    );
    span.click();
  }
};

const getPrevPage = (blockId) => {
  const data = getCurrentPageStatus(blockId);
  if (data.currentPage - 1 >= 0) {
    setCurrentPageStatus(blockId, data.currentPage - 1);
    const span = document.querySelector(
      `.bs-news__nav__pagination__radio-box__label__control[data-block-id="${blockId}"][data-value="${
        data.currentPage - 1
      }"]`
    );
    span.click();
  }
};

const buttonsController = (blockId) => {
  const buttons = document.querySelectorAll(
    `.bs-news__nav__pagination__button[data-block-id="${blockId}"]`
  );

  buttons.forEach((button) => {
    if (button.classList.contains('bs-news__nav__pagination__button-next')) {
      button.addEventListener('click', (e) => {
        getNextPage(blockId);
      });
    }
    if (button.classList.contains('bs-news__nav__pagination__button-prev')) {
      button.addEventListener('click', (e) => {
        getPrevPage(blockId);
      });
    }
  });
};

export default buttonsController;
