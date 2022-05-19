const selectorController = (blockId) => {
  const selectWrapper = document.querySelector(
    `#ms-mbp-news-filter_${blockId}`
  );
  if (selectWrapper) {
    selectWrapper.addEventListener('focus', () => {
      selectWrapper.getElementsByClassName.opacity = 1;
    });

    selectWrapper.addEventListener('blur', () => {
      selectWrapper.getElementsByClassName.opacity = 0;
    });
  }
};

export default selectorController;
