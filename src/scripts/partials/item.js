/**
 *
 * @param {Array<Object>} postsData -
 * @param {String} columns - number of elements in a row
 */
const renderImagesTemplate = (post, columns, item) => {
  item.querySelector('[data-news-link]').href = post.permalink;
  item
    .querySelector('[data-news-item]')
    .classList.add(`bs-news__posts-container__section__post--${columns}`);

  /**
   * img
   */
  const imgTarget = item.querySelector('[data-news-img]');
  if (imgTarget) {
    if (post.default_img) {
      imgTarget.classList.add(
        'bs-news__posts-container__section__post__img--logo'
      );
      imgTarget.src = post.default_img;
    } else {
      imgTarget.src = post.post_img;
    }
  }

  /**
   * Date
   */
  const dateTarget = item.querySelector('[data-news-date]');
  if (dateTarget) {
    dateTarget.innerText = post.parsed_date;
  }

  /**
   * Description
   */
  const descriptionTarget = item.querySelector('[data-news-desc]');
  if (descriptionTarget) {
    descriptionTarget.innerText = post.post_title;
  }

  return item;
};

export default renderImagesTemplate;
