const changeSection = (offset, blockId) => {
  const container = document.querySelector(`#ms-mbp-news-display_${blockId}`);
  const sections = container.querySelectorAll(
    '.bs-news__posts-container__section'
  );
  sections.forEach((section) => {
    section.style.transform = `translateX(-${offset * 100}%)`;
  });
};

export default changeSection;
