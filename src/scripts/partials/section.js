import renderImagesTemplate from './item';
import splitArrayToChunks from '../utils/splitArrayToChunks';

/**
 *
 * @param {*} numberOfSections
 */
function setNumberOfSections(numberOfSections, blockId) {
  const radioBox = document.querySelector(
    `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
  );
  radioBox.dataset.pages = numberOfSections;
}

/**
 *
 * @param {*} display
 * @returns
 */
const renderTemplateInstance = (display) => {
  const template = document.querySelector('#bs_template__mbp_news_section');
  let templateInstance = template.content.cloneNode(true);
  templateInstance = templateInstance.querySelector('div');
  display.appendChild(templateInstance);
  return templateInstance;
};

/**
 *
 * @param {Array<Object>} postsData -
 * @param {String} columns - number of elements in a row
 */
const renderSectionTemplate = (postsData, columns, rows, blockId) => {
  const display = document.querySelector(`#ms-mbp-news-display_${blockId}`);
  const template = document.querySelector('#bs_template__mbp_item');

  const sections = splitArrayToChunks(
    postsData,
    parseInt(columns, 10) * parseInt(rows, 10)
  );

  display.innerHTML = '';
  sections.forEach((section, index) => {
    if (index < 5) {
      const sectionNode = renderTemplateInstance(display);
      sectionNode.dataset.sectionId = index;
      section.forEach((post) => {
        const item = template.content.cloneNode(true);
        const itemNode = renderImagesTemplate(post, columns, item);
        sectionNode.appendChild(itemNode);
      });
    }
  });

  setNumberOfSections(sections.length, blockId);

  return sections.length;
};

export default renderSectionTemplate;
