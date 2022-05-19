import renderSectionTemplate from '../partials/section';
import renderRadioButtonsTemplate from '../partials/radio';

/**
 *
 * @param {*} data
 */
const fetchPosts = async (data, blockId, renderRadioButtons) => {
  data['lang'] = document.documentElement.lang.replace('-', '_'); //.substring(0, 2);
  data['max'] = parseInt(data.rows, 10) * parseInt(data.columns, 10) * 5;
  const response = await fetch('/wp-json/bs/v1/news/subpage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await response.json();
  const sectionsCount = renderSectionTemplate(
    resData.posts,
    data.columns,
    data.rows,
    blockId
  );

  if (renderRadioButtons) {
    renderRadioButtonsTemplate(sectionsCount, blockId);
    const radioBox = document.querySelector(
      `.bs-news__nav__pagination__radio-box[data-block-id="${blockId}"]`
    );
    radioBox.dataset.pages = sectionsCount;
  }
};

export default fetchPosts;
